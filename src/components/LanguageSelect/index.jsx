import { useState } from 'react';
import { MenuItem, Select, FormControl, Box } from '@mui/material';
import { styled } from '@mui/system';

import UkraineFlag from '../../assets/flags/UkraineFlag.svg';
import GermanyFlag from '../../assets/flags/GermanyFlag.svg';
import USFlag from '../../assets/flags/USFlag.svg';
import s from './LanguageSelect.module.css';
import arrowDownImg from '../../assets/icons/arrowDown.png';

const FlagIcon = styled('img')({
    marginRight: '8px',
    width: '16px',
    height: '11px'
});

const LanguageSelect = () => {
    const [language, setLanguage] = useState('UA');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 100 }}>
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                variant="outlined"
                MenuProps={{
                    disableScrollLock: true,
                    PaperProps: {
                        sx: {
                            maxHeight: '100%',
                            '& .MuiMenu-list': {
                                width: '100%',
                                maxWidth: '120px'
                            }
                        }
                    }
                }}
                IconComponent={(props) => (
                    <Box {...props} component="span" sx={{ mr: 1 }}>
                        <img className={s.arrowImg} src={arrowDownImg} alt="arrow" />
                    </Box>
                )}
                renderValue={(selected) => {
                    if (!selected) {
                        return <span>Виберіть мову</span>;
                    }
                    return <span>{selected}</span>;
                }}
                sx={{
                    border: 'none',
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 0 },
                    '& .MuiSelect-select': {
                        paddingLeft: '25px',
                        paddingRight: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row-reverse'
                    },
                    '.MuiSelect-icon': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        order: -1,
                        right: 'unset',
                        left: '8px',
                        top: 'unset'
                    }
                }}
            >
                <MenuItem value="UA" className={s.languageItem}>
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={UkraineFlag} alt="Ukraine Flag" />
                        <div className={s.languageFont}>UA</div>
                    </Box>
                </MenuItem>
                <MenuItem value="EN" className={s.languageItem}>
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={USFlag} alt="US Flag" />
                        <div className={s.languageFont}>EN</div>
                    </Box>
                </MenuItem>
                <MenuItem value="DE" className={s.languageItem}>
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={GermanyFlag} alt="Germany Flag" />
                        <div className={s.languageFont}>DE</div>
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default LanguageSelect;
