import React, { useEffect, useState } from 'react';
import { Box, TextField, InputAdornment, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Snackbar from '@mui/material/Snackbar';
import { v4 as uuidv4 } from 'uuid';

import style from './IndividualForm.module.css';

import VButton from '../../../../../../components/UI/VButton/VButton';
import personIcon from '../../../../../../assets/formImg/user.svg';
import phoneIcon from '../../../../../../assets/formImg/phone.svg';
import emailIcon from '../../../../../../assets/formImg/email.svg';
import lockIcon from '../../../../../../assets/formImg/lock.svg';
import hyperLink from '../../../../../../assets/formImg/Hyperlink.svg';

import { authUser } from '../../../../../../api/auth.js';
import useAuthStore from '../../../../../../store/useAuthStore';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.\-\s]{1,62}$/, 'ПІБ повинно містити тільки літери, пробіли, апострофи, та дефіси.')
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
    const { closeRegistration, closeLogin } = useAuthStore();

    const [tokenCode, setTokenCode] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);

    const generateToken = () => {
        const token = uuidv4();
        setTokenCode(token);
    };

    const handleCopyToken = () => {
        navigator.clipboard.writeText(tokenCode);
        setCopySuccess(true);
    };

    const loadSavedValues = () => {
        const savedValues = localStorage.getItem('individualForm');
        return savedValues ? JSON.parse(savedValues) : null;
    };

    const handleSubmit = ({ fullName: username, phone, email, adminCode: code, tokenCode: token }) => {
        authUser({ username, phone, email, code, token }).then(() => {
            setOpenSuccessModal(true);
            closeRegistration();
            closeLogin();
        });
    };

    const formik = useFormik({
        initialValues: loadSavedValues() || {
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
            localStorage.removeItem('individualForm');
            console.log('Форма відправлена', values);
            handleSubmit(values);
        }
    });

    useEffect(() => {
        localStorage.setItem('individualForm', JSON.stringify(formik.values));
    }, [formik.values]);

    useEffect(() => {
        formik.setFieldValue('tokenCode', tokenCode);
    }, [tokenCode]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: -1 }}>
                <TextField
                    sx={{ backgroundColor: 'var(--bg-color-form)', boxShadow: 'inset 0px 1px 3px var(--text-shadow)', borderRadius: '5px' }}
                    fullWidth
                    placeholder="ПІБ"
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
                            height: '40px',
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
                <TextField
                    sx={{ backgroundColor: 'var(--bg-color-form)', boxShadow: 'inset 0px 1px 3px var(--text-shadow)', borderRadius: '5px' }}
                    fullWidth
                    placeholder="+38(0XX)XXX XX XX"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ transform: 'translateX(-13px)' }}>
                                <div className={style.iconsContainer}>
                                    <img className={style.icons} src={phoneIcon} alt="phone" />
                                </div>
                            </InputAdornment>
                        ),
                        sx: {
                            height: '40px',
                            '& .MuiInputBase-input': {
                                height: '40px',
                                boxSizing: 'border-box'
                            }
                        }
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
                    sx={{ backgroundColor: 'var(--bg-color-form)', boxShadow: 'inset 0px 1px 3px var(--text-shadow)', borderRadius: '5px' }}
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
                <TextField
                    sx={{ backgroundColor: 'var(--bg-color-form)', boxShadow: 'inset 0px 1px 3px var(--text-shadow)', borderRadius: '5px' }}
                    fullWidth
                    placeholder="Код адміністратора"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ transform: 'translateX(-13px)' }}>
                                <div className={style.iconsContainer}>
                                    <img className={style.icons} src={lockIcon} alt="lock" />
                                </div>
                            </InputAdornment>
                        ),
                        sx: {
                            height: '40px',
                            '& .MuiInputBase-input': {
                                height: '40px',
                                boxSizing: 'border-box'
                            }
                        }
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
                    sx={{
                        backgroundColor: 'var(--bg-color-form)',
                        boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                        borderRadius: '5px'
                    }}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        endAdornment: (
                            <InputAdornment position="end" sx={{ transform: 'translateX(21px)' }}>
                                <IconButton onClick={handleCopyToken}>
                                    <div className={style.iconsContainer}>
                                        <img className={style.icons} src={hyperLink} alt="hyperLink" />
                                    </div>
                                </IconButton>
                            </InputAdornment>
                        ),
                        sx: {
                            height: '40px',
                            '& .MuiInputBase-input': {
                                height: '40px'
                            }
                        }
                    }}
                    id="tokenCode"
                    name="tokenCode"
                    value={formik.values.tokenCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.tokenCode && Boolean(formik.errors.tokenCode)}
                    helperText={formik.touched.tokenCode && formik.errors.tokenCode}
                />
                <Snackbar
                    open={copySuccess}
                    autoHideDuration={500}
                    onClose={() => setCopySuccess(false)}
                    message="Токен скопійовано"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    sx={{
                        position: 'absolute',
                        top: '400px',
                        bottom: '0',
                        left: '0',
                        right: '0',

                        maxWidth: '400px'
                    }}
                />
                <Box sx={{ mt: 2 }}>
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
                </Box>
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
                                <a className={style.link} href="/terms-of-use-code-vaasi" target="_blank" rel="noopener noreferrer">
                                    правилами користування кодами VAASI
                                </a>
                            </strong>
                            .
                        </span>
                    }
                />
                {formik.touched.rules && formik.errors.rules && <div style={{ color: 'red' }}>{formik.errors.rules}</div>}

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <VButton
                        type="submit"
                        label="ЗАРЕЄСТРУВАТИСЯ"
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
