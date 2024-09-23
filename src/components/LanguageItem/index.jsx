import { useTranslation } from 'react-i18next';
import style from './LanguageItem.module.css';

export default function LanguageItem() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <>
            <span className={i18n.language === 'UA' ? style.active : ''} onClick={() => handleLanguageChange('UA')}>
                UA
            </span>
            <span className={i18n.language === 'EN' ? style.active : ''} onClick={() => handleLanguageChange('EN')}>
                EN
            </span>
            <span className={i18n.language === 'DE' ? style.active : ''} onClick={() => handleLanguageChange('DE')}>
                DE
            </span>
        </>
    );
}
