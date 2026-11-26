import { PAGE_LANGUAGE, isSupportedLanguage } from './languages';

const STORAGE_KEY = 'assaud.language';
const GOOGTRANS_COOKIE = 'googtrans';
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

/**
 * The Google widget picks its starting language from the `googtrans` cookie, so the
 * cookie is the source of truth for the widget while localStorage drives our own UI.
 * Both are written together and both are cleared when switching back to the page
 * language.
 */

function readCookieLanguage(): string | null {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return null;
  // Cookie shape is "/en/es" - the trailing segment is the target language.
  const [, target] = decodeURIComponent(match[1]).split('/');
  return target || null;
}

export function readStoredLanguage(): string {
  if (typeof window === 'undefined') return PAGE_LANGUAGE;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isSupportedLanguage(stored)) return stored;
  } catch {
    // Private mode / storage disabled - fall through to the cookie.
  }

  const cookieLanguage = readCookieLanguage();
  return isSupportedLanguage(cookieLanguage) ? cookieLanguage : PAGE_LANGUAGE;
}

export function writeStoredLanguage(code: string): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Non-fatal: the visit works, it just will not be remembered next time.
  }

  clearGoogleTranslateCookie();

  if (code !== PAGE_LANGUAGE) {
    document.cookie =
      `${GOOGTRANS_COOKIE}=/${PAGE_LANGUAGE}/${code}; path=/; ` +
      `max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
  }
}

function clearGoogleTranslateCookie(): void {
  // Google writes the cookie on both the plain and the dotted host form; clear both.
  const hostname = window.location.hostname;
  const variants = ['', `; domain=${hostname}`, `; domain=.${hostname}`];
  for (const variant of variants) {
    document.cookie = `${GOOGTRANS_COOKIE}=; path=/${variant}; max-age=0; SameSite=Lax`;
  }
}
