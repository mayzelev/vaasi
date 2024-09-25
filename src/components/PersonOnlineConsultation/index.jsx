import style from './PersonOnlineConsultation.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import VButton from '../VButton';
import { Box, InputAdornment, TextField } from '@mui/material';
import personIcon from '../../assets/icons/user.svg';
import emailIcon from '../../assets/icons/email.svg';
import SuccessConsultationModal from './SuccessConsultationModal';
import LineTitle from '../LineTitle';
import { sanitizePhoneNumber } from '../../shared/utils';
import { PhoneInput } from '../PhoneInput';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.\-\s]{1,62}$/, 'ПІБ повинно містити тільки літери, пробіли, апострофи та дефіси.')
        .required("Обов'язкове поле"),
    phone: Yup.string()
        .matches(/^\+38 \d{3} \d{3} \d{2} \d{2}$/, 'Невірний формат телефону. Використовуйте формат +380XX XXX XX XX.')
        .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний формат електронної пошти').required("Обов'язкове поле")
});

export default function PersonOnlineConsultation({ data }) {
    const { header, description } = data;
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

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
        setOpenSuccessModal(true);
    };

    useEffect(() => {
        localStorage.setItem('personOnlineConsultation', JSON.stringify(formik.values));
    }, [formik.values]);

    return (
        <section className={style.container}>
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
                    <TextField
                        autoComplete="true"
                        fullWidth
                        placeholder="Ім'я"
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" sx={{ transform: 'translateX(-13px)' }}>
                                    <div className={style.iconsContainer}>
                                        <img className={style.icons} src={personIcon} alt="user" />
                                    </div>
                                </InputAdornment>
                            ),
                            sx: {
                                backgroundColor: 'var(--bg-color-form)',
                                boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                                borderRadius: '5px',
                                height: '40px',
                                boxSizing: 'border-box',
                                '& .MuiInputBase-input': {
                                    height: '40px',
                                    boxSizing: 'border-box'
                                }
                            }
                        }}
                        id="fullName"
                        name="fullName"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                    />

                    <PhoneInput formik={formik} country={'UA'} />

                    <TextField
                        autoComplete="true"
                        fullWidth
                        placeholder="Електронна пошта"
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" sx={{ transform: 'translateX(-13px)' }}>
                                    <div className={style.iconsContainer}>
                                        <img className={style.icons} src={emailIcon} alt="email" />
                                    </div>
                                </InputAdornment>
                            ),
                            sx: {
                                backgroundColor: 'var(--bg-color-form)',
                                boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                                borderRadius: '5px',
                                height: '40px',
                                '& .MuiInputBase-input': {
                                    height: '40px',
                                    boxSizing: 'border-box'
                                }
                            }
                        }}
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
            <SuccessConsultationModal openSuccessModal={openSuccessModal} setOpenSuccessModal={setOpenSuccessModal} />
        </section>
    );
}
