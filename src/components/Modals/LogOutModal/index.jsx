import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import style from './LogOutModal.module.css';
import useAuthStore from '../../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import VButton from '../../VButton';

export default function LogOutModal({ openLogOutModal, setOpenLogOutModal }) {
    const navigate = useNavigate();
    const { logout } = useAuthStore();
    const handleCloseLogoutModal = () => {
        setOpenLogOutModal(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return (
        <Modal
            open={openLogOutModal}
            onClose={handleCloseLogoutModal}
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
                    textAlign: 'center',
                    maxWidth: '540px',
                    width: '100%',
                    paddingTop: 4,
                    paddingBottom: 4,
                    gap: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={handleCloseLogoutModal} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <Box
                    sx={{
                        paddingInline: 4,
                        mt: 2
                    }}
                >
                    <h2 id="modal-logout-title" className={style.header}>
                        Ви дійсно хочете вийти?
                    </h2>
                </Box>
                <Box
                    sx={{
                        gap: '10px',
                        display: 'flex',
                        paddingInline: 4
                    }}
                >
                    <VButton
                        onClick={handleLogout}
                        label={'Так'}
                        buttonStyles={{
                            background: 'var(--button-color-grey)',
                            textColor: 'var(--font-color-primary)',
                            hoverBackground: 'var(--button-color-hover)',
                            padding: '8px 20px',
                            width: '100%'
                        }}
                    />
                    <VButton
                        onClick={() => setOpenLogOutModal(false)}
                        label={'Ні'}
                        buttonStyles={{
                            background: 'var(--button-color-grey)',
                            textColor: 'var(--font-color-primary)',
                            hoverBackground: 'var(--button-color-hover)',
                            padding: '8px 20px',
                            width: '100%'
                        }}
                    />
                </Box>
            </Box>
        </Modal>
    );
}
