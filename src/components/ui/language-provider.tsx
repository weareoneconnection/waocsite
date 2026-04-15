'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { dictionaries, type Dictionary, type Lang } from '@/content/site';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const stored = window.localStorage.getItem('waoc-lang');
    if (stored === 'en' || stored === 'zh') {
      setLang(stored);
      return;
    }
    const browser = navigator.language.toLowerCase();
    if (browser.startsWith('zh')) {
      setLang('zh');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('waoc-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, dict: dictionaries[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
