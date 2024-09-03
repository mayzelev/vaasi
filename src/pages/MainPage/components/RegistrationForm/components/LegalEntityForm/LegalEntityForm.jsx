import React, { useEffect, useState } from 'react';
import { Box, TextField, InputAdornment, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@mui/material/Snackbar';

import buildingIcon from '../../../../../../assets/formImg/building.svg';
import personIcon from '../../../../../../assets/formImg/user.svg';
import phoneIcon from '../../../../../../assets/formImg/phone.svg';
import emailIcon from '../../../../../../assets/formImg/email.svg';
import lockIcon from '../../../../../../assets/formImg/lock.svg';
import hyperLink from '../../../../../../assets/formImg/Hyperlink.svg';
import style from './LegalEntityForm.module.css';
import VButton from '../../../../../../components/UI/VButton/VButton';
import useRegistrationStore from '../../../../../../store/useRegistrationStore';

const validationSchema = Yup.object({
    companyName: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.-]{1,62}$/, 'Назва підприємства повинна містити тільки літери, цифри, крапку та дефіс.')
        .required("Обов'язкове поле"),
    contactPerson: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.\-\s]{1,62}$/, 'Контактна особа повинна містити тільки літери, пробіли, апострофи, та дефіси.')
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
    terms: Yup.boolean().oneOf([true], 'Ви повинні погодитися з правилами користування сайтом.').required("Обов'язкове поле")
});

export default function LegalEntityForm({ setOpenSuccessModal }) {
    const { closeRegistration } = useRegistrationStore();
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
            console.log('Форма відправлена', values);
            setOpenSuccessModal(true);
            closeRegistration();
        }
    });

    useEffect(() => {
        localStorage.setItem('legalEntityForm', JSON.stringify(formik.values));
    }, [formik.values]);

    useEffect(() => {
        formik.setFieldValue('tokenCode', tokenCode);
    }, [tokenCode]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box>
                <TextField
                    sx={{ backgroundColor: 'var(--bg-color-form)', boxShadow: 'inset 0px 1px 3px var(--text-shadow)', borderRadius: '5px' }}
                    fullWidth
                    placeholder="Назва підприємства"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment sx={{ transform: 'translateX(-13px)' }}>
                                <div className={style.iconsContainer}>
                                    <img className={style.icons} src={buildingIcon} alt="building" />
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
                    id="companyName"
                    name="companyName"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                    helperText={formik.touched.companyName && formik.errors.companyName}
                />
                <TextField
                    sx={{ backgroundColor: 'var(--bg-color-form)', boxShadow: 'inset 0px 1px 3px var(--text-shadow)', borderRadius: '5px' }}
                    fullWidth
                    placeholder="Контактна особа"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment sx={{ transform: 'translateX(-13px)' }}>
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
                    id="contactPerson"
                    name="contactPerson"
                    value={formik.values.contactPerson}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.contactPerson && Boolean(formik.errors.contactPerson)}
                    helperText={formik.touched.contactPerson && formik.errors.contactPerson}
                />
                <TextField
                    sx={{ backgroundColor: 'var(--bg-color-form)', boxShadow: 'inset 0px 1px 3px var(--text-shadow)', borderRadius: '5px' }}
                    fullWidth
                    placeholder="+38(0XX)XXX XX XX"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment sx={{ transform: 'translateX(-13px)' }}>
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
                    sx={{
                        backgroundColor: 'var(--bg-color-form)',
                        boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                        borderRadius: '5px',
                        
                    }}
                    fullWidth
                    placeholder="Електронна пошта"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment sx={{ transform: 'translateX(-13px)' }}>
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
                    sx={{
                        backgroundColor: 'var(--bg-color-form)',
                        boxShadow: 'inset 0px 1px 3px var(--text-shadow)',
                        borderRadius: '5px',
                        
                    }}
                    fullWidth
                    placeholder="Код адміністратора"
                    variant="outlined"
                    margin="dense"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment sx={{ transform: 'translateX(-13px)' }}>
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
                        lineHeight: '19px',
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
                        borderRadius: '5px',
                       
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
                <Snackbar open={copySuccess} autoHideDuration={3000} onClose={() => setCopySuccess(false)} message="Токен скопійовано" />
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
                <Box sx={{ mt: 2, textAlign: 'center' }}>
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
