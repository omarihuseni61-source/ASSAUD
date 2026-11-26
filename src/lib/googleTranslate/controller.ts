import {
  INCLUDED_LANGUAGES,
  PAGE_LANGUAGE,
  isSupportedLanguage,
} from './languages';
import { readStoredLanguage, writeStoredLanguage } from './storage';

const ELEMENT_ID = 'google_translate_element';
const SCRIPT_ID = 'assaud-google-translate-script';
const CALLBACK_NAME = '__assaudGoogleTranslateInit';
const COMBO_SELECTOR = `#${ELEMENT_ID} select.goog-te-combo`;
const FALLBACK_COMBO_SELECTOR = 'select.goog-te-combo';
const SCRIPT_URL = `https://translate.google.com/translate_a/element.js?cb=${CALLBACK_NAME}`;

/** If Google's script has not produced a language select by now, treat it as blocked. */
const INIT_TIMEOUT_MS = 10_000;
const POLL_INTERVAL_MS = 150;

export type GoogleTranslateStatus = 'idle' | 'loading' | 'ready' | 'unavailable';

export interface GoogleTranslateState {
  status: GoogleTranslateStatus;
  /** Google Translate target code currently in effect. */
  language: string;
}

interface TranslateElementOptions {
  pageLanguage: string;
  includedLanguages?: string;
  autoDisplay?: boolean;
}

interface GoogleTranslateApi {
  translate: {
    TranslateElement: new (
      options: TranslateElementOptions,
      elementId: string,
    ) => unknown;
  };
}

declare global {
  interface Window {
    google?: GoogleTranslateApi;
  }
}

type Listener = (state: GoogleTranslateState) => void;

function fireChangeEvent(select: HTMLSelectElement): void {
  const event = document.createEvent('HTMLEvents');
  event.initEvent('change', true, true);
  select.dispatchEvent(event);
}

/** Give React and Google's own mutation observer a couple of frames to settle. */
function afterPaint(callback: () => void, frames = 2): void {
  if (frames <= 0) {
    window.setTimeout(callback, 60);
    return;
  }
  window.requestAnimationFrame(() => afterPaint(callback, frames - 1));
}

function applyDocumentLanguage(code: string): void {
  // `lang` drives hyphenation, spell-check and screen readers. We deliberately leave
  // `dir` alone: the Tailwind layout is authored LTR and the bidi algorithm already
  // renders right-to-left runs correctly inside our LTR paragraphs.
  document.documentElement.lang = code;
}

/**
 * Wraps the Google Translate widget in one place.
 *
 * The widget is third-party DOM: it is mounted outside React's tree and driven only
 * through its hidden <select>, so React never tries to unmount Google's markup.
 */
class GoogleTranslateController {
  private state: GoogleTranslateState = {
    status: 'idle',
    language: PAGE_LANGUAGE,
  };
  private readonly listeners = new Set<Listener>();
  private initPromise: Promise<boolean> | null = null;
  private resolveInit: ((ready: boolean) => void) | null = null;
  private pollTimer: number | null = null;
  private timeoutTimer: number | null = null;
  private ready = false;
  private pendingLanguage: string | null = null;

  getState(): GoogleTranslateState {
    return this.state;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  init(): Promise<boolean> {
    if (this.initPromise) return this.initPromise;
    if (typeof window === 'undefined') return Promise.resolve(false);

    const stored = readStoredLanguage();
    this.setState({ status: 'loading', language: stored });
    applyDocumentLanguage(stored);
    // Reconcile the widget's own cookie with what we believe the language to be, so a
    // stale `googtrans` value cannot silently translate a page we render as English.
    writeStoredLanguage(stored);

    this.initPromise = new Promise<boolean>((resolve) => {
      this.resolveInit = resolve;
      this.ensureContainer();
      this.defineInitCallback();
      this.injectScript();
      this.startPolling();
      this.timeoutTimer = window.setTimeout(() => this.finish(false), INIT_TIMEOUT_MS);
    });

    return this.initPromise;
  }

  setLanguage(code: string): void {
    if (!isSupportedLanguage(code)) return;

    if (code !== this.state.language) {
      this.setState({ language: code });
      applyDocumentLanguage(code);
    }
    writeStoredLanguage(code);

    if (!this.ready) {
      this.pendingLanguage = code;
      void this.init();
      return;
    }
    this.applyLanguage(code);
  }

  /**
   * Called after every App Router navigation. Google translates the DOM once; content
   * rendered by a later client-side route change stays English until it is asked again.
   */
  refresh(): void {
    if (!this.ready) return;
    const code = this.state.language;
    if (code === PAGE_LANGUAGE) return;

    afterPaint(() => {
      if (!this.ready || this.state.language !== code) return;
      this.applyLanguage(code);
    });
  }

  /** Manual retry after the script failed (network, content blocker, CSP). */
  retry(): void {
    if (typeof window === 'undefined') return;

    this.clearTimers();
    const previous = this.resolveInit;
    this.resolveInit = null;
    previous?.(false);

    this.ready = false;
    this.initPromise = null;
    void this.init();
  }

  private finish(ready: boolean): void {
    if (this.ready) return;

    this.clearTimers();
    this.ready = ready;
    this.setState({ status: ready ? 'ready' : 'unavailable' });

    if (ready) {
      const target = this.pendingLanguage ?? this.state.language;
      this.pendingLanguage = null;
      this.applyLanguage(target);
    }

    const resolve = this.resolveInit;
    this.resolveInit = null;
    resolve?.(ready);
  }

  private applyLanguage(code: string): void {
    const select = this.getCombo();
    if (!select) {
      this.pendingLanguage = code;
      return;
    }

    if (select.value !== code) {
      select.value = code;
    }
    fireChangeEvent(select);
  }

  private getCombo(): HTMLSelectElement | null {
    return (
      document.querySelector<HTMLSelectElement>(COMBO_SELECTOR) ??
      document.querySelector<HTMLSelectElement>(FALLBACK_COMBO_SELECTOR)
    );
  }

  private startPolling(): void {
    if (this.pollTimer !== null) return;
    this.pollTimer = window.setInterval(() => {
      if (this.getCombo()) this.finish(true);
    }, POLL_INTERVAL_MS);
  }

  private clearTimers(): void {
    if (this.pollTimer !== null) {
      window.clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
    if (this.timeoutTimer !== null) {
      window.clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
  }

  private injectScript(): void {
    document.getElementById(SCRIPT_ID)?.remove();

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SCRIPT_URL;
    script.async = true;
    script.addEventListener('error', () => this.finish(false));
    document.head.appendChild(script);
  }

  private defineInitCallback(): void {
    const init = () => {
      const api = window.google?.translate;
      if (!api) return;
      new api.TranslateElement(
        {
          pageLanguage: PAGE_LANGUAGE,
          includedLanguages: INCLUDED_LANGUAGES,
          autoDisplay: false,
        },
        ELEMENT_ID,
      );
    };

    (window as unknown as Record<string, unknown>)[CALLBACK_NAME] = init;
  }

  private ensureContainer(): void {
    if (document.getElementById(ELEMENT_ID)) return;

    const container = document.createElement('div');
    container.id = ELEMENT_ID;
    container.className = 'notranslate assaud-google-translate-mount';
    container.setAttribute('aria-hidden', 'true');
    document.body.appendChild(container);
  }

  private setState(patch: Partial<GoogleTranslateState>): void {
    this.state = { ...this.state, ...patch };
    for (const listener of this.listeners) listener(this.state);
  }
}

export const googleTranslateController = new GoogleTranslateController();
