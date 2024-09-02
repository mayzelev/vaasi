import { Box, Button, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import useRegistrationStore from '../../../../../../store/useRegistrationStore';
import style from './SuccessModalOpen.module.css';

export default function SuccessModalOpen({ openSuccessModal, setOpenSuccessModal }) {
    const { closeRegistration } = useRegistrationStore();
    const handleCloseSuccessModal = () => {
        setOpenSuccessModal(false);
        closeRegistration();
    };
    return (
        <Modal
            open={openSuccessModal}
            onClose={handleCloseSuccessModal}
            aria-labelledby="success-modal-title"
            aria-describedby="success-modal-description"
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
                    textAlign: 'center',
                    maxWidth: '540px',
                    width: '100%'
                }}
            >
                <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={handleCloseSuccessModal} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <h2 id="success-modal-title" className={style.header}>
                    ВІТАЄМО!
                </h2>
                <p id="success-modal-description" className={style.description}>
                    Ви успішно зареєстровані. Використовуйте токен <br /> для входу в особистий кабінет. Виконайте наступні кроки для
                    завершення реєстрації на порталі.
                </p>
            </Box>
        </Modal>
    );
}
