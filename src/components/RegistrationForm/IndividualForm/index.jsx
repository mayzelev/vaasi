import { useEffect, useState } from 'react';
import { Box, TextField, InputAdornment, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';

import style from './IndividualForm.module.css';

import personIcon from '../../../assets/icons/user.svg';
import phoneIcon from '../../../assets/icons/phone.svg';
import emailIcon from '../../../assets/icons/email.svg';
import lockIcon from '../../../assets/icons/lock.svg';
import hyperLink from '../../../assets/icons/Hyperlink.svg';

import { authUser } from '../../../api/auth.js';
import useAuthStore from '../../../store/useAuthStore';
import VButton from '../../VButton';

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
        formik.setFieldValue('tokenCode', tokenCode);
    }, [formik.values, tokenCode]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: 1 }}>
                <TextField
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
                <TextField
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
                    Обов&apos;язково збережіть свій токен зараз, оскільки він <br /> буде використовуватися для входу в особистий кабінет
                </div>
            </Box>
            <Box sx={{ mt: 2 }}>
                <VButton
                    onClick={generateToken}
                    label="ЗГЕНЕРУВАТИ ТОКЕН"
                    buttonStyles={{
                        padding: '20px 10px',
                        height: '34px',
                        maxWidth: '540px'
                    }}
                />
                <TextField
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
                            backgroundColor: 'var(--bg-color-form)',
                            boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                            borderRadius: '5px',
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
                            padding: '20px 10px',
                            hoverColor: 'white',
                            hoverBackground: 'var(--button-color-hover)',
                            height: '34px',
                            maxWidth: '540px'
                        }}
                    />
                </Box>
            </Box>
        </form>
    );
}
