import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, InputAdornment, FormControlLabel, Checkbox } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { v4 as uuidv4 } from 'uuid';
import style from './IndividualForm.module.css';
import VButton from '../../../../../../components/UI/VButton/VButton';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.-]{1,62}$/, 'ПІБ повинно містити тільки літери.')
        .required("Обов'язкове поле"),
    phone: Yup.string()
        .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Невірний формат телефону. Використовуйте формат +38 (0XX) XXX-XXXX.')
        .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний формат електронної пошти').required("Обов'язкове поле"),
    adminCode: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d]{1,}$/, 'Код адміністратора повинен містити тільки літери та цифри.')
        .required("Обов'язкове поле"),
    tokenCode: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d.-]{1,62}$/, 'Токен повинен містити тільки літери, цифри, крапку та дефіс.')
        .required("Обов'язкове поле"),
    terms: Yup.boolean().oneOf([true], 'Ви повинні погодитися з правилами користування сайтом.').required("Обов'язкове поле"),
    rules: Yup.boolean().oneOf([true], 'Ви повинні погодитися з правилами користування кодами VAASI.').required("Обов'язкове поле")
});

export default function IndividualForm({ setOpenSuccessModal }) {
    const [tokenCode, setTokenCode] = useState('');

    const generateToken = () => {
        const token = uuidv4();
        setTokenCode(token);
    };

    const formik = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            email: '',
            adminCode: '',
            tokenCode: '',
            terms: false,
            rules: false
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Форма відправлена', values);
            setOpenSuccessModal(true);
        }
    });

    useEffect(() => {
        formik.setFieldValue('tokenCode', tokenCode);
    }, [tokenCode]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box>
                <TextField
                    fullWidth
                    placeholder="ПІБ"
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        )
                    }}
                    id="fullName"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                    fullWidth
                    placeholder="+38(0XX)XXX XX XX"
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneIcon />
                            </InputAdornment>
                        )
                    }}
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                    fullWidth
                    placeholder="Електронна пошта"
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        )
                    }}
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    placeholder="Код адміністратора"
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        )
                    }}
                    id="adminCode"
                    name="adminCode"
                    value={formik.values.adminCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.adminCode && Boolean(formik.errors.adminCode)}
                    helperText={formik.touched.adminCode && formik.errors.adminCode}
                />
            </Box>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <div className={style.attentionToken}>
                    Обов'язково збережіть свій токен зараз, оскільки він <br /> буде використовуватися для входу в особистий кабінет
                </div>
            </Box>
            <Box sx={{ mt: 2 }}>
                <VButton
                    onClick={generateToken}
                    label="ЗГЕНЕРУВАТИ ТОКЕН"
                    buttonStyles={{
                        background: 'var(--gradient-button)',
                        textColor: 'var(--button-color-white)',
                        fontSize: 16,
                        padding: '20px 10px',
                        borderRadius: '50px',
                        lineHeight: '19.2px',
                        borderColor: 'none',
                        hoverBackground: 'var(--button-color-hover)',
                        hoverBorderColor: 'transparent',
                        height: '34px',
                        maxWidth: '540px',
                        transition: 'background 0.3s ease'
                    }}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon style={{ position: 'absolute', top: 15, right: 15 }} />
                            </InputAdornment>
                        )
                    }}
                    id="tokenCode"
                    name="tokenCode"
                    value={formik.values.tokenCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.tokenCode && Boolean(formik.errors.tokenCode)}
                    helperText={formik.touched.tokenCode && formik.errors.tokenCode}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="terms"
                            checked={formik.values.terms}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            color="primary"
                        />
                    }
                    label={
                        <span className={style.agreeCheck}>
                            Я ознайомився та погоджуюся з{' '}
                            <strong>
                                <a className={style.link} href="/terms-of-use" target="_blank" rel="noopener noreferrer">
                                    правилами користування сайтом
                                </a>
                            </strong>
                            .
                        </span>
                    }
                />
                {formik.touched.terms && formik.errors.terms && <div style={{ color: 'red' }}>{formik.errors.terms}</div>}
                <FormControlLabel
                    control={
                        <Checkbox
                            name="rules"
                            checked={formik.values.rules}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            color="primary"
                        />
                    }
                    label={
                        <span className={style.agreeCheck}>
                            Я ознайомився та погоджуюся з{' '}
                            <strong>
                                <a className={style.link} href="/terms-of-use" target="_blank" rel="noopener noreferrer">
                                    правилами користування кодами VAASI
                                </a>
                            </strong>
                            .
                        </span>
                    }
                />
                {formik.touched.rules && formik.errors.rules && <div style={{ color: 'red' }}>{formik.errors.rules}</div>}

                <Box sx={{ mt: 2 }}>
                    <VButton
                        type="submit"
                        label="Зареєструватися"
                        buttonStyles={{
                            background: 'var(--button-color-grey)',
                            textColor: 'var(--font-color-primary)',
                            fontSize: 16,
                            padding: '20px 10px',
                            borderRadius: '50px',
                            lineHeight: '19px',
                            borderColor: 'none',
                            hoverColor: 'white',
                            hoverBackground: 'var(--button-color-hover)',
                            hoverBorderColor: 'transparent',
                            height: '34px',
                            maxWidth: '540px',
                            transition: 'background 0.3s ease'
                        }}
                    />
                </Box>
            </Box>
        </form>
    );
}
