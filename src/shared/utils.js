import * as Yup from 'yup';
import { downloadFile, downloadFileCompany } from '../api/apiFiles.js';
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

export async function downloadFileFn(id, personType, filename) {
    try {
        const fetchFunction = personType === USER_TYPE.COMPANY ? downloadFileCompany : downloadFile;
        const response = await fetchFunction(id);
        const contentType = response.headers['content-type'];
        const blob = new Blob([response.data], { type: contentType });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}
