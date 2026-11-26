'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import {
  LANGUAGES,
  PAGE_LANGUAGE,
  type LanguageOption,
} from '@/lib/googleTranslate/languages';
import {
  googleTranslateController,
  type GoogleTranslateState,
} from '@/lib/googleTranslate/controller';
import { patchDomForGoogleTranslate } from '@/lib/googleTranslate/domPatch';

interface GoogleTranslateContextValue extends GoogleTranslateState {
  languages: LanguageOption[];
  /** True when the page is currently showing a translation of the source content. */
  isTranslating: boolean;
  setLanguage: (code: string) => void;
  retry: () => void;
}

const GoogleTranslateContext = createContext<GoogleTranslateContextValue | null>(null);

/**
 * Owns the Google Translate widget lifecycle for the whole app.
 *
 * Deliberately not `next-google-translate`: that package renders the widget's mount
 * node inside React's tree (so React tries to unmount Google's injected markup) and
 * drops its own UI when the script is slow or blocked.
 */
export function GoogleTranslateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GoogleTranslateState>(() =>
    googleTranslateController.getState(),
  );
  const pathname = usePathname();

  useEffect(() => {
    // Must run before any translated DOM exists, otherwise React throws on the first
    // commit that removes a node Google has re-wrapped.
    patchDomForGoogleTranslate();

    const unsubscribe = googleTranslateController.subscribe(setState);
    void googleTranslateController.init();

    return unsubscribe;
  }, []);

  useEffect(() => {
    // New route = fresh, untranslated DOM.
    googleTranslateController.refresh();
  }, [pathname]);

  const setLanguage = useCallback((code: string) => {
    googleTranslateController.setLanguage(code);
  }, []);

  const retry = useCallback(() => {
    googleTranslateController.retry();
  }, []);

  const value = useMemo<GoogleTranslateContextValue>(
    () => ({
      ...state,
      languages: LANGUAGES,
      isTranslating: state.status === 'ready' && state.language !== PAGE_LANGUAGE,
      setLanguage,
      retry,
    }),
    [state, setLanguage, retry],
  );

  return (
    <GoogleTranslateContext.Provider value={value}>
      {children}
    </GoogleTranslateContext.Provider>
  );
}

export function useGoogleTranslate(): GoogleTranslateContextValue {
  const context = useContext(GoogleTranslateContext);
  if (!context) {
    throw new Error('useGoogleTranslate must be used within a GoogleTranslateProvider');
  }
  return context;
}
