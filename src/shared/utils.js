import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.\-\s]{1,62}$/, 'ПІБ повинно містити тільки літери, пробіли, апострофи та дефіси.')
        .required("Обов'язкове поле"),
    phone: Yup.string()
        .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Невірний формат телефону. Використовуйте формат +380XXXXXXXXX.')
        .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний формат електронної пошти').required("Обов'язкове поле")
});
