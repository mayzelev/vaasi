import { useEffect, useState } from 'react';
import { Box, TextField, InputAdornment, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@mui/material/Snackbar';

import buildingIcon from '../../../assets/icons/building.svg';
import personIcon from '../../../assets/icons/user.svg';
import emailIcon from '../../../assets/icons/email.svg';
import lockIcon from '../../../assets/icons/lock.svg';
import hyperLink from '../../../assets/icons/Hyperlink.svg';

import style from './LegalEntityForm.module.css';
import { authCompany } from '../../../api/auth.js';
import useAuthStore from '../../../store/useAuthStore';
import VButton from '../../VButton';
import { createHandleAuthSubmit, sanitizePhoneNumber } from '../../../shared/utils.js';
import { PhoneInput } from '../../PhoneInput/index.jsx';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
    companyName: Yup.string()
        .matches(
            /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9'"’.\-\s]{1,62}$/,
            'Назва підприємства повинна містити тільки літери, цифри, лапки, дефіси, крапки та апострофи.'
        )
        .required("Обов'язкове поле"),
    contactPerson: Yup.string()
        .matches(
            /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9'"’.\-\s]{1,62}$/,
            'Контактна особа повинна містити тільки літери, пробіли, апострофи, крапки , та дефіси.'
        )
        .required("Обов'язкове поле"),
    phone: Yup.string()
        .matches(/^\+38 \d{3} \d{3} \d{2} \d{2}$/, 'Невірний формат телефону. Використовуйте формат +38 0XX XXX XX XX.')
        .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний формат електронної пошти').required("Обов'язкове поле"),
    adminCode: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d]{1,}$/, 'Код адміністратора повинен містити тільки літери та цифри.')
        .required("Обов'язкове поле"),
    tokenCode: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d.-]{1,62}$/, 'Токен повинен містити тільки літери, цифри, крапку та дефіс.')
        .required("Обов'язкове поле"),
    terms: Yup.boolean().oneOf([true], 'Ви повинні погодитися з правилами користування сайтом.').required("Обов'язкове поле")
});

export default function LegalEntityForm({ setOpenSuccessModal }) {
    const { closeRegistration, closeLogin } = useAuthStore();
    const [authError, setAuthError] = useState(null);
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
        const savedValues = localStorage.getItem('legalEntityForm');
        return savedValues ? JSON.parse(savedValues) : null;
    };

    const handleSubmit = createHandleAuthSubmit(
        ({ companyName: username, phone, email, adminCode: code, tokenCode: token, contactPerson: contact }) =>
            authCompany({ username, phone, email, code, token, contact }),
        { setOpenSuccessModal, closeRegistration, closeLogin, setAuthError }
    );

    const formik = useFormik({
        initialValues: loadSavedValues() || {
            companyName: '',
            contactPerson: '',
            phone: '',
            email: '',
            adminCode: '',
            tokenCode: '',
            terms: false
        },
        validationSchema,
        onSubmit: (values) => {
            localStorage.removeItem('legalEntityForm');

            const sanitizedPhone = sanitizePhoneNumber(values.phone);
            handleSubmit({
                ...values,
                phone: sanitizedPhone
            });
        }
    });

    useEffect(() => {
        localStorage.setItem('legalEntityForm', JSON.stringify(formik.values));
        formik.setFieldValue('tokenCode', tokenCode);
    }, [formik.values, tokenCode]); // eslint-disable-line

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: 1, paddingInline: 4 }}>
                <TextField
                    autoComplete="true"
                    fullWidth
                    placeholder="Назва підприємства"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ transform: 'translateX(-13px)' }}>
                                <div className={style.iconsContainer}>
                                    <img className={style.icons} src={buildingIcon} alt="building" />
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
                    id="companyName"
                    name="companyName"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                    helperText={formik.touched.companyName && formik.errors.companyName}
                />
                <TextField
                    autoComplete="true"
                    fullWidth
                    placeholder="Контактна особа"
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
                    id="contactPerson"
                    name="contactPerson"
                    value={formik.values.contactPerson}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.contactPerson && Boolean(formik.errors.contactPerson)}
                    helperText={formik.touched.contactPerson && formik.errors.contactPerson}
                />

                <PhoneInput formik={formik} authError={authError} setAuthError={setAuthError} country={'UA'} />

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
                    onChange={(params) => {
                        formik.handleChange(params);
                        if (authError) {
                            setAuthError(null);
                        }
                    }}
                    onBlur={formik.handleBlur}
                    error={!!authError?.email || (formik.touched.email && Boolean(formik.errors.email))}
                    helperText={authError?.email || (formik.touched.email && formik.errors.email)}
                />
                <TextField
                    autoComplete="true"
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
            <Box sx={{ mt: 2, paddingInline: 4, textAlign: 'center' }}>
                <div className={style.attentionToken}>
                    Обов&apos;язково збережіть свій токен зараз, оскільки він <br /> буде використовуватися для входу в особистий кабінет
                </div>
            </Box>
            <Box sx={{ mt: 2, paddingInline: 4 }}>
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
                    autoComplete="true"
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
                                <Snackbar
                                    open={copySuccess}
                                    autoHideDuration={400}
                                    onClose={() => setCopySuccess(false)}
                                    message="Токен скопійовано"
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                    sx={{ maxWidth: '400px' }}
                                />
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
                                    <Link
                                        className={style.link}
                                        to="/rules-for-using-site"
                                        target="_blank"
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    >
                                        правилами користування сайтом
                                    </Link>
                                </strong>
                                .
                            </span>
                        }
                    />
                </Box>
                {formik.touched.terms && formik.errors.terms && <div style={{ color: 'red' }}>{formik.errors.terms}</div>}
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <VButton
                        type="submit"
                        label="ЗАРЕЄСТРУВАТИСЯ"
                        buttonStyles={{
                            background: 'var(--button-color-grey)',
                            textColor: 'var(--font-color-primary)',
                            padding: '20px 10px',
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
