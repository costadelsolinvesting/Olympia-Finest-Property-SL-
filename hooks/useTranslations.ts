import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { BilingualString } from '../types';

export const useTranslations = () => {
  const { language } = useLanguage();

  // FIX: Added optional defaultValue parameter to the t function to handle missing translation keys gracefully.
  const t = (key: string, defaultValue?: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    if (defaultValue) {
      return defaultValue;
    }
    console.warn(`Translation key "${key}" not found.`);
    return key;
  };
  
  const T = (bilingualString: BilingualString | undefined): string => {
    if (!bilingualString) return '';
    return bilingualString[language];
  }

  return { t, T, language };
};
