import { useEffect, useState } from 'react';
import { Modal, Box, Tab, Tabs, IconButton, useMediaQuery, useTheme } from '@mui/material';

import useAuthStore from '../../store/useAuthStore';
import LegalEntityForm from './LegalEntityForm';
import IndividualForm from './IndividualForm';
import CloseIcon from '@mui/icons-material/Close';
import SuccessModalOpen from './SuccessModalOpen';
import style from './RegistrationForm.module.css';

export default function RegistrationPopup() {
    const { isRegistrationOpen, closeRegistration, initialTab } = useAuthStore();
    const [activeTab, setActiveTab] = useState(initialTab);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    const handleTabChange = (event, newValue) => setActiveTab(newValue);

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
                        width: '100%',
                        maxWidth: '540px',
                        maxHeight: isSmallScreen ? '90vh' : 'none',
                        overflowY: isSmallScreen ? 'auto' : 'visible',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 1300
                    }}
                >
                    <IconButton sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }} onClick={closeRegistration} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Box
                        sx={{
                            mt: 1,
                            mb: 1,
                            textAlign: 'center',
                            fontWeight: '900',
                            lineHeight: '36px',
                            fontSize: isSmallScreen ? '1.5rem' : '1.8rem'
                        }}
                    >
                        РЕЄСТРАЦІЯ
                    </Box>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        centered
                        variant={isSmallScreen ? 'fullWidth' : 'standard'}
                        sx={{
                            '.MuiTabs-indicator': {
                                backgroundColor: 'var(--button-color-active)'
                            },
                            '.MuiTab-root': {
                                minWidth: 0,
                                padding: isSmallScreen ? '6px 12px' : '6px 20px'
                            }
                        }}
                    >
                        <Tab
                            sx={{
                                textAlign: 'center',
                                fontWeight: '600',
                                fontSize: isSmallScreen ? '0.8rem' : '1rem',
                                lineHeight: isSmallScreen ? '18px' : '22px',
                                padding: '0 20px',
                                color: activeTab === 0 ? 'var(--button-color-active)' : 'inherit',
                                '&.Mui-selected': {
                                    color: 'var(--button-color-active)'
                                }
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
                                fontSize: isSmallScreen ? '0.8rem' : '1rem',
                                lineHeight: isSmallScreen ? '18px' : '22px',
                                padding: '0 30px',
                                color: activeTab === 1 ? 'var(--button-color-active)' : 'inherit',
                                '&.Mui-selected': {
                                    color: 'var(--button-color-active)'
                                }
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

                    <Box sx={{ mt: 2 }}>
                        {activeTab === 0 && <LegalEntityForm setOpenSuccessModal={setOpenSuccessModal} />}

                        {activeTab === 1 && <IndividualForm setOpenSuccessModal={setOpenSuccessModal} />}
                    </Box>
                </Box>
            </Modal>
            <SuccessModalOpen openSuccessModal={openSuccessModal} setOpenSuccessModal={setOpenSuccessModal} />
        </>
    );
}
