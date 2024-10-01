import { Modal, Box } from '@mui/material';
import style from './SessionExpiredModal.module.css';
import useModalStore from '../../../store/useModalStore';
import { useEffect, useState } from 'react';

export const SessionExpiredModal = () => {
    const { isSessionExpiredOpen, closeSessionExpired } = useModalStore();
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (isSessionExpiredOpen && count > 0) {
            const timer = setTimeout(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else if (count === 0) {
            closeSessionExpired();
            window.location.href = '/vaasi/';
        }
    }, [isSessionExpiredOpen, count]);

    return (
        <Modal open={isSessionExpiredOpen} aria-labelledby="global-notification-title" aria-describedby="global-notification-description">
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
                    textAlign: 'center',
                    maxWidth: '540px',
                    width: '100%'
                }}
            >
                <h2 id="success-modal-title" className={style.header}>
                    Сеанс закінчився!
                </h2>
                <p id="success-modal-description" className={style.description}>
                    Ваш сеанс завершено. Ви будете перенаправлені на головну сторінку через {count} секунд.
                </p>
            </Box>
        </Modal>
    );
};
