import React, { useEffect, useState } from 'react';
import { Modal, Box, Tab, Tabs, IconButton } from '@mui/material';
import useAuthStore from '../../store/useAuthStore.js';
import LegalEntityForm from './LegalEntityForm';
import IndividualForm from './IndividualForm';
import CloseIcon from '@mui/icons-material/Close';
import style from './RegistrationForm.module.css';
import SuccessModalOpen from './SuccessModalOpen';

export default function RegistrationPopup() {
    const { isRegistrationOpen, closeRegistration, initialTab } = useAuthStore();
    const [activeTab, setActiveTab] = useState(initialTab);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

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
                        zIndex: 1300
                    }}
                >
                    <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} onClick={closeRegistration} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Box sx={{ mt: 1, mb: 1, textAlign: 'center', fontWeight: '900', lineHeight: '36px', fontSize: '30px' }}>
                        РЕЄСТРАЦІЯ
                    </Box>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        centered
                        sx={{
                            '.MuiTabs-indicator': {
                                backgroundColor: 'var(--button-color-active)'
                            }
                        }}
                    >
                        <Tab
                            sx={{
                                textAlign: 'center',
                                fontWeight: '600',
                                fontSize: '16px',
                                lineHeight: '22px',
                                padding: '0 20px',

                                color: activeTab === 0 ? 'var(--button-color-active)' : 'inherit'
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
                                fontSize: '16px',
                                lineHeight: '22px',
                                padding: '0 30px',
                                color: activeTab === 1 ? 'var(--button-color-active)' : 'inherit'
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
