
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-1 border border-gray-300 rounded-full p-0.5">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors ${
          language === 'es' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
