'use client';

// components/layout/LanguageToggle.tsx
import { useState } from 'react';
import { useGoogleTranslate } from 'next-google-translate';

interface LanguageToggleProps {
  isMobile?: boolean;
}

export function LanguageToggle({ isMobile = false }: LanguageToggleProps) {
  const { isReady, currentLanguage, changeLanguage, availableLanguages } =
    useGoogleTranslate();
  const [isOpen, setIsOpen] = useState(false);

  if (!isReady) return null;

  // Get the label for the current language (for display)
  const currentLabel =
    availableLanguages.find((l) => l.value === currentLanguage)?.label ||
    'Language';

  return (
    <div className="relative">
      {/* Trigger button: only show icon, or icon + text */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 p-2 rounded hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        {/* Google-style globe icon (can be replaced with your own SVG) */}
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        {/* Desktop can show current language name, mobile only show icon */}
        {!isMobile && (
          <span className="text-sm font-medium text-gray-700">
            {currentLabel}
          </span>
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Click outside to close overlay */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-80 overflow-y-auto">
            {availableLanguages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => {
                  changeLanguage(lang.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                  currentLanguage === lang.value
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}