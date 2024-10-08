import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import uaTranslations from './locales/ua/translation.json';
import enTranslations from './locales/en/translation.json';
import deTranslations from './locales/de/translation.json';

const lang = localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'UA';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ua: {
                translation: uaTranslations
            },
            en: {
                translation: enTranslations
            },
            de: {
                translation: deTranslations
            }
        },
        lng: lang,
        fallbackLng: 'ua',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
