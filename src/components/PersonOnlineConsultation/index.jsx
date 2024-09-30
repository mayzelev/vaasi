import style from './PersonOnlineConsultation.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import VButton from '../VButton';
import { Box } from '@mui/material';
import personIcon from '../../assets/icons/user.svg';
import emailIcon from '../../assets/icons/email.svg';
import LineTitle from '../LineTitle';
import { sanitizePhoneNumber } from '../../shared/utils';
import { PhoneInput } from '../PhoneInput';
import { EmailValidation, PhoneValidation } from '../../shared/constants';
import FormField from '../FormField';
import useModalStore from '../../store/useModalStore';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.\-\s]{1,62}$/, 'ПІБ повинно містити тільки літери, пробіли, апострофи та дефіси.')
        .required("Обов'язкове поле"),
    phone: PhoneValidation,
    email: EmailValidation
});

export default function PersonOnlineConsultation({ data }) {
    const { header, description } = data;
    const { openSuccessModal, closeFeedBackForm } = useModalStore();

    const loadSavedValues = () => {
        const savedValues = localStorage.getItem('personOnlineConsultation');
        return savedValues ? JSON.parse(savedValues) : null;
    };

    const formik = useFormik({
        initialValues: loadSavedValues() || {
            fullName: '',
            phone: '',
            email: ''
        },
        validationSchema,
        onSubmit: (values) => {
            localStorage.removeItem('personOnlineConsultation');
            console.log('Форма відправлена', values);

            const sanitizedPhone = sanitizePhoneNumber(values.phone);
            handleSubmit({
                ...values,
                phone: sanitizedPhone
            });
            formik.resetForm();
        }
    });

    const handleSubmit = () => {
        openSuccessModal();
        closeFeedBackForm();
    };

    useEffect(() => {
        localStorage.setItem('personOnlineConsultation', JSON.stringify(formik.values));
    }, [formik.values]);

    return (
        <section className="container">
            <div className={style.container}>
                <div className={style.header}>{header}</div>

                <LineTitle />

                <div className={style.description}>{description}</div>
                <form className={style.form} onSubmit={formik.handleSubmit}>
                    <Box
                        sx={{
                            mt: 2,
                            mb: 5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            WebkitAlignItems: 'unset',
                            '@media (max-width: 780px)': {
                                flexDirection: 'column',
                                gap: '5px'
                            }
                        }}
                    >
                        <FormField
                            formik={formik}
                            id="fullName"
                            placeholder="Ім'я"
                            adornment={personIcon}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <PhoneInput formik={formik} country={'UA'} />

                        <FormField
                            formik={formik}
                            id="email"
                            placeholder="Електронна пошта"
                            adornment={emailIcon}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <VButton
                            type="submit"
                            label="ВІДПРАВИТИ"
                            buttonStyles={{
                                padding: '20px 10px',
                                height: '34px',
                                maxWidth: '350px'
                            }}
                        />
                    </Box>
                </form>
            </div>
        </section>
    );
}
