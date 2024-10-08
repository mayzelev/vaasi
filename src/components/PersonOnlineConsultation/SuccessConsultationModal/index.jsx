import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import style from './SuccessConsultationModal.module.css';
import useModalStore from '../../../store/useModalStore';

export default function SuccessConsultationModal() {
    const { isSuccessModalOpen, closeSuccessModal } = useModalStore();

    const handleCloseSuccessModal = () => {
        closeSuccessModal();
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
                    maxWidth: '540px',
                    width: '100%'
                }}
            >
                <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={handleCloseSuccessModal} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <h2 id="success-modal-title" className={style.header}>
                    Готово
                </h2>
                <p id="success-modal-description" className={style.description}>
                    Ваш запит відправлено для
                    <br /> опрацювання оператором, дякуємо!
                </p>
            </Box>
        </Modal>
    );
}
