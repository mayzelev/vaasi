import * as Yup from 'yup';

export const USER_TYPE = {
    COMPANY: 'company',
    PERSON: 'person'
};

export const LANGUAGES = {
    UA: 'UA',
    EN: 'EN',
    DE: 'DE'
};

export const INVALID_USER = 'Invalid user';
export const USER_EMAIL_EXIST = 'Email exists';
export const USER_PHONE_EXIST = 'Phone exists';

export const TOKEN_KEY = 'token';
export const USER_ID = 'userId';
export const PERSON_TYPE = 'personType';
export const JWT_EXPIRED = 'jwt expired';
export const INVALID_TOKEN = 'invalid token';
export const FORBIDDEN = 'Forbidden';

export const PhoneValidation = Yup.string()
    .matches(/^\+38 \d{3} \d{3} \d{2} \d{2}$/, 'Невірний формат телефону. Використовуйте формат +38 0XX XXX XX XX.')
    .required("Обов'язкове поле");

export const EmailValidation = Yup.string().email('Невірний формат E-mail').required("Обов'язкове поле");

export const AdminCodeValidation = Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d]{1,}$/, 'Код адміністратора повинен містити тільки літери та цифри.')
    .required("Обов'язкове поле");

export const TokenCodeValidation = Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d.-]{1,62}$/, 'Токен повинен містити тільки літери, цифри, крапку та дефіс.')
    .required("Обов'язкове поле");

export const TermsValidation = Yup.boolean()
    .oneOf([true], 'Ви повинні погодитися з правилами користування сайтом.')
    .required("Обов'язкове поле");
