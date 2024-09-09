import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, IconButton, Modal, Tabs, Tab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VButton from '../../../../components/UI/VButton/VButton';
import style from './LoginForm.module.css';
import useAuthStore from '../../../../store/useAuthStore';
import { INVALID_USER, loginCompany, loginUser } from '../../../../api/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    tokenCode: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d.-]{1,62}$/, 'Токен повинен містити тільки літери, цифри, крапку та дефіс.')
        .required("Обов'язкове поле")
});

export default function LoginForm() {
    const { openRegistration, IsLoginOpen, closeLogin, setToken, initialTabLogin } = useAuthStore();
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [authError, setAuthError] = useState(null);
    const [activeTab, setActiveTab] = useState(initialTabLogin);

    useEffect(() => {
        setActiveTab(initialTabLogin);
    }, [initialTabLogin]);

    const handleTabChange = (event, newValue) => setActiveTab(newValue);

    const formik = useFormik({
        initialValues: {
            tokenCode: ''
        },
        validationSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        }
    });

    const handleSubmit = ({ tokenCode: token }) => {
        if (activeTab === 0) {
            loginCompany({ token })
                .then((res) => {
                    if (res.data.token) {
                        setToken(res.data.token);
                        closeLogin();
                    } else {
                        setAuthError('Не вдалося отримати токен');
                    }
                })
                .catch((e) => {
                    if (INVALID_USER === e?.response?.data?.message) {
                        setAuthError('Перевірте свій токен та повторіть спробу!');
                    }
                });
        }

        if (activeTab === 1) {
            loginUser({ token })
                .then((res) => {
                    if (res.data.token) {
                        setToken(res.data.token);
                        closeLogin();
                    } else {
                        setAuthError('Не вдалося отримати токен');
                    }
                })
                .catch((e) => {
                    if (INVALID_USER === e?.response?.data?.message) {
                        setAuthError('Перевірте свій токен та повторіть спробу!');
                    }
                });
        }
    };

    return (
        <Modal open={IsLoginOpen} onClose={closeLogin} aria-labelledby="login-modal" aria-describedby="login-form">
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: 24,
                    p: 4,
                    width: '100%',
                    maxWidth: '540px',
                    zIndex: 1300
                }}
            >
                <IconButton
                    onClick={closeLogin}
                    sx={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px'
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        marginBottom: '5px',
                        marginTop: '15px',
                        fontWeight: '900',
                        fontSize: '30px',
                        lineHeight: '36px'
                    }}
                >
                    ЛОГІН
                </Typography>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    centered
                    sx={{
                        '.MuiTabs-indicator': {
                            backgroundColor: 'var(--button-color-active)'
                        }
                    }}
                >
                    <Tab
                        sx={{
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '22px',
                            padding: '0 20px',

                            color: activeTab === 0 ? 'var(--button-color-active)' : 'inherit'
                        }}
                        label="Юридичні особи"
                        style={{
                            color: activeTab === 0 ? 'var(--button-color-active)' : 'inherit'
                        }}
                    />
                    <Tab
                        sx={{
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '22px',
                            padding: '0 30px',
                            color: activeTab === 1 ? 'var(--button-color-active)' : 'inherit'
                        }}
                        label="Фізичні особи"
                        style={{
                            color: activeTab === 1 ? 'var(--button-color-active)' : 'inherit'
                        }}
                    />
                </Tabs>
                <Box>
                    <div className={style.line}></div>
                </Box>
                <Box sx={{ position: 'relative', marginBottom: '20px' }}>
                    <Typography>
                        Токен
                        <IconButton
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                            sx={{
                                color: isTooltipVisible ? 'var(--button-color-active)' : 'inherit',
                                transition: 'color 0.3s ease'
                            }}
                        >
                            <HelpOutlineIcon />
                        </IconButton>
                    </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            sx: {
                                height: '40px',
                                '& .MuiInputBase-input': {
                                    height: '40px',
                                    boxSizing: 'border-box'
                                }
                            }
                        }}
                        id="tokenCode"
                        name="tokenCode"
                        value={formik.values.tokenCode}
                        onChange={(params) => {
                            formik.handleChange(params);
                            if (authError) {
                                setAuthError(null);
                            }
                        }}
                        onBlur={formik.handleBlur}
                        error={!!authError || (formik.touched.tokenCode && Boolean(formik.errors.tokenCode))}
                        helperText={authError || (formik.touched.tokenCode && formik.errors.tokenCode)}
                    />

                    {isTooltipVisible && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-76px',
                                left: '61px',
                                backgroundColor: 'var(--main-bg-color)',
                                border: '1px solid var(--button-color-active)',
                                padding: '15px 5px 15px 10px',
                                borderRadius: '10px',
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                maxWidth: '285px',
                                fontSize: '14px'
                            }}
                        >
                            Вставте у поле токен, який було згенеровано при реєстрації на порталі.
                        </Box>
                    )}
                </Box>
                <Box sx={{ display: 'flex', mb: '15px', textAlign: 'center' }}>
                    <div className={style.button}>
                        <VButton
                            onClick={formik.handleSubmit}
                            label="ВХІД"
                            buttonStyles={{
                                background: 'var(--gradient-button)',
                                textColor: 'var(--button-color-white)',
                                fontSize: 16,
                                padding: '8px 8px',
                                borderRadius: '50px',
                                lineHeight: '19.2px',
                                borderColor: 'none',
                                hoverBackground: 'var(--button-color-hover)',
                                hoverBorderColor: 'transparent',
                                height: '35px',
                                maxWidth: '218px',
                                transition: 'background 0.3s ease'
                            }}
                        />
                    </div>
                </Box>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Немає токена?{' '}
                    <button className={style.registration} onClick={openRegistration}>
                        Реєструйтесь на порталі.
                    </button>
                </Typography>
            </Box>
        </Modal>
    );
}
