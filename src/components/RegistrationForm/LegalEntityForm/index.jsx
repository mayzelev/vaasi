import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, InputAdornment, FormControlLabel, Checkbox, IconButton, Tooltip } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BlockIcon from '@mui/icons-material/Block';
import style from './LegalEntityForm.module.css';
import buildingIcon from '../../../assets/icons/building.svg';
import personIcon from '../../../assets/icons/user.svg';
import emailIcon from '../../../assets/icons/email.svg';
import lockIcon from '../../../assets/icons/lock.svg';
import { authCompany } from '../../../api/auth.js';
import useAuthStore from '../../../store/useAuthStore';
import VButton from '../../VButton';
import { createHandleAuthSubmit, sanitizePhoneNumber } from '../../../shared/utils.js';
import { PhoneInput } from '../../PhoneInput/index.jsx';
import { generateToken, handleCopyToken, loadSavedValues } from '../formUtils.jsx';
import FormField from '../../FormField/index.jsx';
import { AdminCodeValidation, EmailValidation, PhoneValidation, TermsValidation, TokenCodeValidation } from '../../../shared/constants.js';

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
    phone: PhoneValidation,
    email: EmailValidation,
    adminCode: AdminCodeValidation,
    tokenCode: TokenCodeValidation,
    terms: TermsValidation
});

export default function LegalEntityForm({ setOpenSuccessModal }) {
    const { closeRegistration, closeLogin } = useAuthStore();
    const [authError, setAuthError] = useState(null);
    const [tokenCode, setTokenCode] = useState('');
    const [tooltipText, setTooltipText] = useState('Скопіювати?');
    const [icon, setIcon] = useState();
    const [isCopyDisabled, setIsCopyDisabled] = useState(true);

    const handleSubmit = createHandleAuthSubmit(
        ({ companyName: username, phone, email, adminCode: code, tokenCode: token, contactPerson: contact }) =>
            authCompany({ username, phone, email, code, token, contact }),
        { setOpenSuccessModal, closeRegistration, closeLogin, setAuthError }
    );

    const formik = useFormik({
        initialValues: loadSavedValues('legalEntityForm') || {
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
                <FormField
                    formik={formik}
                    id="companyName"
                    placeholder="Назва підприємства"
                    adornment={buildingIcon}
                    error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                    helperText={formik.touched.companyName && formik.errors.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <FormField
                    formik={formik}
                    id="contactPerson"
                    placeholder="Контактна особа"
                    adornment={personIcon}
                    error={formik.touched.contactPerson && Boolean(formik.errors.contactPerson)}
                    helperText={formik.touched.contactPerson && formik.errors.contactPerson}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <PhoneInput formik={formik} authError={authError} setAuthError={setAuthError} country={'UA'} />

                <FormField
                    formik={formik}
                    id="email"
                    placeholder="Електронна пошта"
                    adornment={emailIcon}
                    error={!!authError?.email || (formik.touched.email && Boolean(formik.errors.email))}
                    helperText={authError?.email || (formik.touched.email && formik.errors.email)}
                    onChange={(params) => {
                        formik.handleChange(params);
                        if (authError) {
                            setAuthError(null);
                        }
                    }}
                    onBlur={formik.handleBlur}
                />

                <FormField
                    formik={formik}
                    id="adminCode"
                    placeholder="Код адміністратора"
                    adornment={lockIcon}
                    error={formik.touched.adminCode && Boolean(formik.errors.adminCode)}
                    helperText={formik.touched.adminCode && formik.errors.adminCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </Box>
            <Box sx={{ mt: 2, paddingInline: 4, textAlign: 'center' }}>
                <div className={style.attentionToken}>
                    Обов&apos;язково збережіть свій токен зараз, оскільки він <br /> буде використовуватися для входу в особистий кабінет
                </div>
            </Box>
            <Box sx={{ mt: 2, paddingInline: 4 }}>
                <VButton
                    onClick={() => generateToken(setTokenCode, setIsCopyDisabled, setTooltipText, setIcon)}
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
                                <Tooltip title={!tokenCode ? 'Спочатку згенеруйте токен' : tooltipText} arrow placement="left">
                                    <span>
                                        <IconButton
                                            onClick={() => handleCopyToken(tokenCode, setTooltipText, setIcon)}
                                            disabled={isCopyDisabled}
                                        >
                                            <div className={style.iconsContainer}>
                                                {isCopyDisabled ? <BlockIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} /> : icon}
                                            </div>
                                        </IconButton>
                                    </span>
                                </Tooltip>
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
                            padding: '10px 10px',
                            hoverBackground: 'var(--button-color-hover)',
                            maxWidth: '540px'
                        }}
                    />
                </Box>
            </Box>
        </form>
    );
}
