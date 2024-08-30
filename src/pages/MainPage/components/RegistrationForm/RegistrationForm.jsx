import React from 'react';
import { Modal, Box, Tab, Tabs, Button, TextField, Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import useStore from '../../../../store';
import SuccessModalOpen from '../SuccessModalOpen/SuccessModalOpen';
import buildingIcon from '../../../../assets/formImg/building.png';
import style from './RegistrationForm.module.css';

const validationSchema = Yup.object({
    companyName: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.-]{1,62}$/, 'Назва підприємства повинна містити тільки літери, цифри, крапку та дефіс.')
        .required("Обов'язкове поле"),
    contactPerson: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'.-]{1,62}$/, 'Контактна особа повинна містити тільки літери.')
        .required("Обов'язкове поле"),
    phone: Yup.string()
        .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Невірний формат телефону. Використовуйте формат +38 (0XX) XXX-XXXX.')
        .required("Обов'язкове поле"),
    email: Yup.string().email('Невірний формат електронної пошти').required("Обов'язкове поле"),
    adminCode: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d]{1,}$/, 'Код адміністратора повинен містити тільки літери та цифри.')
        .required("Обов'язкове поле"),
    tokenCode: Yup.string()
        .matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\d]{1,}$/, 'Код адміністратора повинен містити тільки літери та цифри.')
        .required("Обов'язкове поле")
});

export default function RegistrationPopup() {
    const { isRegistrationOpen, closeRegistration, openSuccessModal, closeSuccessModal } = useStore();
    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabChange = (event, newValue) => setActiveTab(newValue);

    const formik = useFormik({
        initialValues: {
            companyName: '',
            contactPerson: '',
            phone: '',
            email: '',
            adminCode: '',
            tokenCode: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Форма відправлена', values);
            openSuccessModal();
        }
    });

    return (
        <>
            <Modal
                open={isRegistrationOpen}
                onClose={closeRegistration}
                aria-labelledby="registration-modal"
                aria-describedby="registration-form"
            >
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
                        width: 500,
                        maxWidth: '100%',
                        zIndex: 1300
                    }}
                >
                    <Box sx={{ mt: 1, textAlign: 'center', fontWeight: '900', lineHeight: '36px', fontSize: '30px' }}>РЕЄСТРАЦІЯ</Box>
                    <Tabs value={activeTab} onChange={handleTabChange} centered>
                        <Tab sx={{ textAlign: 'center', fontWeight: '700', lineHeight: '19px' }} label="Юридичні особи" />
                        <Tab sx={{ textAlign: 'center', fontWeight: '700', lineHeight: '19px' }} label="Фізичні особи" />
                    </Tabs>
                    <Box sx={{ mt: 2 }}>
                        <form onSubmit={formik.handleSubmit}>
                            {activeTab === 0 && (
                                <>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            placeholder="Назва підприємства"
                                            variant="outlined"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img
                                                            className={style.icons}
                                                            src={buildingIcon}
                                                            alt="Building Icon"
                                                            style={{ width: 40, height: 40 }}
                                                        />
                                                    </InputAdornment>
                                                )
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
                                            fullWidth
                                            placeholder="Контактна особа"
                                            variant="outlined"
                                            margin="normal"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonIcon />
                                                    </InputAdornment>
                                                )
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
                                    <Box sx={{ mt: 2, textAlign: 'center', fontWeight: '700', lineHeight: '19px' }}>
                                        Обов'язково збережіть свій токен зараз, оскільки він <br /> буде використовуватися для входу в
                                        особистий кабінет
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Button fullWidth variant="contained" color="secondary">
                                            ЗГЕНЕРУВАТИ ТОКЕН
                                        </Button>
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
                                            control={<Checkbox name="terms" />}
                                            label="Я ознайомився та погоджуюся з правилами користування сайтом."
                                        />

                                        <Button type="submit" fullWidth variant="outlined" color="secondary">
                                            ЗАРЕЄСТРУВАТИСЯ
                                        </Button>
                                    </Box>
                                </>
                            )}

                            {activeTab === 1 && (
                                <>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            label="ПІБ"
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
                                            id="companyName"
                                            name="companyName"
                                            value={formik.values.companyName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                                            helperText={formik.touched.companyName && formik.errors.companyName}
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
                                    <Box sx={{ mt: 2, textAlign: 'center', fontWeight: '700', lineHeight: '19px' }}>
                                        Обов'язково збережіть свій токен зараз, оскільки він <br /> буде використовуватися для входу в
                                        особистий кабінет
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Button fullWidth variant="contained" color="secondary">
                                            ЗГЕНЕРУВАТИ ТОКЕН
                                        </Button>
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
                                            control={<Checkbox name="terms" />}
                                            label="Я ознайомився та погоджуюся з правилами користування сайтом."
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="rules" />}
                                            label="Я ознайомився та погоджуюся з Правилами користування кодами VAASI."
                                        />
                                        <Button type="submit" fullWidth variant="outlined" color="secondary">
                                            ЗАРЕЄСТРУВАТИСЯ
                                        </Button>
                                    </Box>
                                </>
                            )}
                        </form>
                    </Box>
                </Box>
            </Modal>
            <SuccessModalOpen />
        </>
    );
}
