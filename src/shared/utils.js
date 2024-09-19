import * as Yup from 'yup';
import { USER_TYPE } from './constants.js';

export const validationSchema = Yup.object({
    username: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.\-\s]{1,62}$/, 'ПІБ повинно містити тільки літери, пробіли, апострофи та дефіси.')
        .required("Обов'язкове поле"),
    phone: Yup.string()
        .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Невірний формат телефону. Використовуйте формат +380XXXXXXXXX.')
        .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний формат електронної пошти').required("Обов'язкове поле")
});

export async function downloadFileFn(id, personType) {
    try {
        // TODO: REWRITE ON Blob Object When Backend Will Do It
        const url =
            personType === USER_TYPE.COMPANY
                ? `https://www.devsm.space/files/download-cmp/${id}`
                : `https://www.devsm.space/files/download/${id}`;

        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}
