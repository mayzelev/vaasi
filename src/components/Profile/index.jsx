import Avatar from '../../Avatar/index.jsx';
import { USER_ID } from '../../store/useAuthStore.js';
import { getUser, updateUser } from '../../api/apiUsers.js';
import { useEffect, useState } from 'react';
import style from './Profile.module.css';
import pencilImg from '../../assets/icons/pencil.svg';

export default function Profile() {
    const [editingField, setEditingField] = useState(null);
    const [values, setValues] = useState({ username: '', phone: '', email: '' });

    const userId = localStorage.getItem(USER_ID);

    useEffect(() => {
        getUser(userId)
            .then((data) => {
                setValues({
                    username: data.username,
                    phone: data.phone,
                    email: data.email,
                    ...data
                });
            })
            .catch((error) => {
                console.error('Error fetching company info:', error);
            });
    }, [userId]);

    const handleIconClick = (field) => {
        setEditingField(editingField === field ? null : field);
    };

    const handleChange = (e, field) => {
        setValues({ ...values, [field]: e.target.value });
    };

    const handleBlur = async () => {
        setEditingField(null);
        try {
            await updateUser(userId, values);
            console.log('Company info updated successfully');
        } catch (error) {
            console.error('Failed to update company info:', error);
        }
    };

    return (
        <div className={style.container}>
            <h1 className={style.title}>Профіль</h1>
            <div className={style.userWrapper}>
                <Avatar />

                <div className={style.userInfo}>
                    {['username', 'phone', 'email'].map((field) => (
                        <p key={field}>
                            <span>{field === 'username' ? 'ФІО' : field === 'phone' ? 'Номер телефона' : 'E-mail'}</span>
                            {editingField === field ? (
                                <input
                                    type="text"
                                    value={values[field]}
                                    onChange={(e) => handleChange(e, field)}
                                    onBlur={handleBlur}
                                    autoFocus
                                />
                            ) : (
                                <span>
                                    <strong>{values[field]}</strong>
                                </span>
                            )}
                            <button onClick={() => handleIconClick(field)} className={style.pencilBtn}>
                                <img src={pencilImg} alt="pencil" style={{ position: 'absolute' }} />
                            </button>
                        </p>
                    ))}
                </div>
            </div>
            <input type="text" />
        </div>
    );
}
