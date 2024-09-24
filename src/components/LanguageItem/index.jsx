import { useTranslation } from 'react-i18next';
import style from './LanguageItem.module.css';

export default function LanguageItem({ language }) {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <span className={i18n.language === language ? style.active : ''} onClick={() => handleLanguageChange(language)}>
            {language}
        </span>
    );
}
