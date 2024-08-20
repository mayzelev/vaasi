// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uaTranslations from './locales/ua/translation.json';
import enTranslations from './locales/en/translation.json';
import deTranslations from './locales/de/translation.json';

// Налаштування i18next
i18n.use(initReactI18next).init({
    resources: {
        uk: {
            translation: uaTranslations
        },
        en: {
            translation: enTranslations
        },
        de: {
            translation: deTranslations
        }
    },
    lng: 'uk', // Мова за замовчуванням
    fallbackLng: 'en', // Мова за замовчуванням, якщо потрібна мова не знайдена
    interpolation: {
        escapeValue: false // React вже захищає від XSS
    }
});

export default i18n;
