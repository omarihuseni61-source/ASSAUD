'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Language {
  value: string;
  label: string;
}

interface GoogleTranslateContextType {
  isReady: boolean;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  availableLanguages: Language[];
}

const GoogleTranslateContext = createContext<GoogleTranslateContextType | null>(null);

const GOOGLE_TRANSLATE_SCRIPT = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

export function GoogleTranslateProvider({
  children,
  pageLanguage = 'en',
  availableLanguages = [],
}: {
  children: ReactNode;
  pageLanguage?: string;
  availableLanguages: Language[];
}) {
  const [isReady, setIsReady] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(pageLanguage);

  useEffect(() => {
    const initGoogleTranslate = () => {
      if (typeof window !== 'undefined' && (window as any).google?.translate) {
        new (window as any).google.translate.TranslateElement({
          pageLanguage,
          includedLanguages: availableLanguages.map(l => l.value.split('|')[1]).join(','),
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        }, 'google_translate_element');
        setIsReady(true);
      }
    };

    (window as any).googleTranslateElementInit = initGoogleTranslate;

    const script = document.createElement('script');
    script.src = GOOGLE_TRANSLATE_SCRIPT;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="translate_a/element.js"]`);
      if (existingScript) existingScript.remove();
      const element = document.getElementById('google_translate_element');
      if (element) element.remove();
    };
  }, [pageLanguage, availableLanguages]);

  const changeLanguage = (lang: string) => {
    if (typeof window !== 'undefined') {
      const select = document.querySelector('#google_translate_element select') as HTMLSelectElement;
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        setCurrentLanguage(lang);
      }
    }
  };

  return (
    <GoogleTranslateContext.Provider value={{ isReady, currentLanguage, changeLanguage, availableLanguages }}>
      <div id="google_translate_element" style={{ display: 'none' }} />
      {children}
    </GoogleTranslateContext.Provider>
  );
}

export function useGoogleTranslate() {
  const context = useContext(GoogleTranslateContext);
  if (!context) {
    throw new Error('useGoogleTranslate must be used within a GoogleTranslateProvider');
  }
  return context;
}