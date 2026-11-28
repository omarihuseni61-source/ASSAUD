'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe, Loader2, RotateCw } from 'lucide-react';
import { useGoogleTranslate } from './GoogleTranslateProvider';

interface LanguageToggleProps {
  isMobile?: boolean;
}

export function LanguageToggle({ isMobile = false }: LanguageToggleProps) {
  const { status, language, languages, setLanguage, retry } = useGoogleTranslate();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLabel =
    languages.find((option) => option.code === language)?.label ?? 'English';
  const isLoading = status === 'idle' || status === 'loading';
  const isUnavailable = status === 'unavailable';

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) close();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [isOpen, close]);

  const handleSelect = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-gray-700 transition-colors hover:bg-red-50 hover:text-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800 focus-visible:ring-offset-2"
        aria-label={`Change language, current language ${currentLabel}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin text-gray-500" aria-hidden="true" />
        ) : (
          <Globe className="h-5 w-5" aria-hidden="true" />
        )}
        {!isMobile && (
          <span className="max-w-[7.5rem] truncate text-sm font-medium" lang={language}>
            {currentLabel}
          </span>
        )}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-30 mt-2 w-60 max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <ul
            role="listbox"
            aria-label="Available languages"
            className="max-h-72 overflow-y-auto py-1"
          >
            {languages.map((option) => {
              const isSelected = option.code === language;

              return (
                <li key={option.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.code)}
                    className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors ${
                      isSelected
                        ? 'bg-red-50 font-semibold text-red-900'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Check
                      className={`h-4 w-4 shrink-0 ${isSelected ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden="true"
                    />
                    <span className="truncate" lang={option.code}>
                      {option.label}
                    </span>
                    {option.label !== option.englishLabel && (
                      <span className="ml-auto truncate text-xs font-normal text-gray-400">
                        {option.englishLabel}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {isUnavailable ? (
            <div className="border-t border-gray-100 bg-amber-50 px-3 py-2.5">
              <p className="text-xs leading-snug text-amber-900">
                Translation service could not be reached.
              </p>
              <button
                type="button"
                onClick={retry}
                className="mt-1.5 inline-flex items-center gap-1.5 rounded-md bg-amber-900 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-amber-950"
              >
                <RotateCw className="h-3 w-3" aria-hidden="true" />
                Try again
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
