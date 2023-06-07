import useTranslations from "../../hooks/useTranslations/usetranslations";

const Translations:React.FC = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslations();


  return (
    <>
      <div>{language}</div>
      <div>{t('hi')}</div>
      <div>{t('bye')}</div>
      <div>{t('nested.value')}</div>

      <button onClick={() => setLanguage('hr')}>set lang to hr</button>
      <button onClick={() => setLanguage('en')}>set lang to en</button>
    </>
  );


};

export default Translations;