import { Box, Button, Modal } from '@mui/material';
import React from 'react';
import useStore from '../../../../store';

export default function SuccessModalOpen() {
    const { isSuccessModalOpen, closeSuccessModal, closeRegistration } = useStore();

    const handleCloseSuccessModal = () => {
        closeSuccessModal();
        closeRegistration();
    };
    return (
        <Modal
            open={isSuccessModalOpen}
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
                    maxWidth: '400px',
                    width: '100%'
                }}
            >
                <h2 id="success-modal-title" style={{ color: '#ff7a5a', marginBottom: '16px' }}>
                    ВІТАЄМО!
                </h2>
                <p id="success-modal-description">
                    Ви успішно зареєстровані. Використовуйте токен для входу в особистий кабінет. Виконайте наступні кроки для завершення
                    реєстрації на порталі.
                </p>
                <Button onClick={handleCloseSuccessModal} variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    Закрити
                </Button>
            </Box>
        </Modal>
    );
}
