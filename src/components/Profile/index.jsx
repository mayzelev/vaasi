import { PERSON_TYPE, USER_ID } from '../../store/useAuthStore.js';
import { getCompany, getUser, updateCompany, updateUser } from '../../api/apiUsers.js';
import { useEffect, useState } from 'react';
import style from './Profile.module.css';
import pencilImg from '../../assets/icons/pencil.svg';
import Avatar from '../Avatar/index.jsx';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchema } from '../../shared/utils.js';
import useUserStore from '../../store/useUserStore.js';
import { USER_TYPE } from '../../shared/constants.js';
import bgImage from '../../assets/img/backCalculatorSmall.png';

export default function Profile() {
    const [editingField, setEditingField] = useState(null);
    const { setUserInfo, username, phone, email, balance } = useUserStore();
    const userId = localStorage.getItem(USER_ID);
    const personType = localStorage.getItem(PERSON_TYPE);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const fetchFunction = personType === USER_TYPE.COMPANY ? getCompany : getUser;
            try {
                const data = await fetchFunction(userId);
                setUserInfo({ ...data });
            } catch (error) {
                console.error(`Error fetching ${personType} info:`, error);
            }
        };
        fetchUserInfo();
    }, [personType, setUserInfo, userId]);

    const formik = useFormik({
        initialValues: { username, phone, email },
        validationSchema,
        enableReinitialize: true
    });

    const handleIconClick = (field) => setEditingField(field);

    const handleInputBlur = async (field) => {
        formik.handleBlur({ target: { name: field } });

        if (!formik.errors[field]) {
            setEditingField(null);
            const updatedData = { [field]: formik.values[field] };

            const updateFunction = personType === USER_TYPE.COMPANY ? updateCompany : updateUser;
            try {
                await updateFunction(userId, updatedData);
                setUserInfo({ username, phone, email, balance, ...updatedData });
            } catch (error) {
                console.error(`Failed to update ${personType} info:`, error);
            }
        }
    };

    const renderField = (field, label) => (
        <div className={style.lineWrapper} key={field}>
            <span>{label}</span>
            <div>
                {editingField === field ? (
                    <TextField
                        type="text"
                        name={field}
                        value={formik.values[field]}
                        onChange={formik.handleChange}
                        onBlur={() => handleInputBlur(field)}
                        autoFocus
                    />
                ) : (
                    <span>
                        <strong>{formik.values[field]}</strong>
                    </span>
                )}
                {formik.touched[field] && formik.errors[field] && <div className={style.error}>{formik.errors[field]}</div>}
                <button type="button" onClick={() => handleIconClick(field)} className={style.pencilBtn}>
                    <img src={pencilImg} alt="pencil" style={{ position: 'absolute' }} />
                </button>
            </div>
        </div>
    );

    return (
        <section className={style.profile}>
            <div className={style.container}>
                <h1 className={style.title}>Профіль</h1>
                <div className={style.userWrapper}>
                    <Avatar />
                    <form onSubmit={formik.handleSubmit}>
                        <div className={style.userInfo}>
                            {renderField('username', 'ПІБ')}
                            {renderField('phone', 'Номер телефона')}
                            {renderField('email', 'E-mail')}
                        </div>
                    </form>
                </div>
            </div>
            <img src={bgImage} className={style.bgImg} alt="money" />
        </section>
    );
}
