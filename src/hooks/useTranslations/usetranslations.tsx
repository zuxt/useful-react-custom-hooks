import { useLocalStorage } from "../useStorage/useStorage";
import { translations } from "./translations/index";

export default function useTranslations() { 

  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage('fallbacklanguage', 'en');

  const translate = (key:string) => { 
    const keys = key.split('.');

    return (
      getNestedTranslations(language, keys) ??
      getNestedTranslations(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate
  };
}
type Tlangkey = keyof typeof translations;
  
const reducerF = (obj: Tlangkey, key:string) => {
      const k = key as keyof typeof obj;
      return obj?.[k];
};


function getNestedTranslations(language: Tlangkey, keys: any[]) {
  return keys.reduce(reducerF, translations[language]);
}