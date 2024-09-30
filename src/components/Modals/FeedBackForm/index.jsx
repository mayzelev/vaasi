import { Box, IconButton, Modal, useMediaQuery, useTheme } from '@mui/material';
import PersonOnlineConsultation from '../../PersonOnlineConsultation';
import { mockDataConsultation } from './mockData';
import CloseIcon from '@mui/icons-material/Close';
import useModalStore from '../../../store/useModalStore';

export default function FeedBackForm() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { isFeedBackFormOpen, closeFeedBackForm } = useModalStore();
    return (
        <>
            <Modal open={isFeedBackFormOpen} onClose={closeFeedBackForm} aria-labelledby="feedback-modal" aria-describedby="feedback-form">
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        borderRadius: 4,
                        boxShadow: 24,
                        width: '100%',
                        maxWidth: '1200px',
                        zIndex: 1300,
                        maxHeight: isSmallScreen ? '90vh' : 'none',
                        overflowY: isSmallScreen ? 'auto' : 'visible',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <IconButton
                        onClick={closeFeedBackForm}
                        sx={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box
                        sx={{
                            paddingTop: 10
                        }}
                    >
                        <PersonOnlineConsultation data={mockDataConsultation} />
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
