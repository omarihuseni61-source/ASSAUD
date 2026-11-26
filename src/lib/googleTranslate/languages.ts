/**
 * Language registry for the Google Translate widget.
 *
 * Each entry carries three names on purpose:
 * - `code`         the Google Translate target code (what the widget's select uses)
 * - `label`        the endonym — the language written in itself. Never translated.
 * - `englishLabel` used for screen readers and as a last-resort fallback.
 */
export interface LanguageOption {
  code: string;
  label: string;
  englishLabel: string;
  /** Text direction once the language is active. */
  dir?: 'ltr' | 'rtl';
}

/** The language the site content is authored in. */
export const PAGE_LANGUAGE = 'en';

/** Curated list: East Africa first, then the most requested world languages. */
export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', englishLabel: 'English', dir: 'ltr' },
  { code: 'sw', label: 'Kiswahili', englishLabel: 'Swahili', dir: 'ltr' },
  { code: 'ar', label: 'العربية', englishLabel: 'Arabic', dir: 'rtl' },
  { code: 'fr', label: 'Français', englishLabel: 'French', dir: 'ltr' },
  { code: 'es', label: 'Español', englishLabel: 'Spanish', dir: 'ltr' },
  { code: 'pt', label: 'Português', englishLabel: 'Portuguese', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', englishLabel: 'German', dir: 'ltr' },
  { code: 'it', label: 'Italiano', englishLabel: 'Italian', dir: 'ltr' },
  {
    code: 'zh-CN',
    label: '中文（简体）',
    englishLabel: 'Chinese (Simplified)',
    dir: 'ltr',
  },
  
];

const LANGUAGES_BY_CODE = new Map(
  LANGUAGES.map((language) => [language.code, language]),
);

export function findLanguage(code: string | null | undefined): LanguageOption | undefined {
  if (!code) return undefined;
  return LANGUAGES_BY_CODE.get(code);
}

/** Google only accepts codes it knows; anything else silently does nothing. */
export function isSupportedLanguage(code: string | null | undefined): code is string {
  return !!code && LANGUAGES_BY_CODE.has(code);
}

/** Handed to the widget so its hidden select only holds our languages. */
export const INCLUDED_LANGUAGES = LANGUAGES.map((language) => language.code).join(',');
