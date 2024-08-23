import { useState } from 'react';
import { MenuItem, Select, FormControl, Box } from '@mui/material';
import { styled } from '@mui/system';
import UkraineFlag from '/flags/UkraineFlag.svg';
import GermanyFlag from '/flags/GermanyFlag.svg';
import USFlag from '/flags/USFlag.svg';
import s from './LanguageSelect.module.css';

const FlagIcon = styled('img')({
    marginRight: '8px',
    width: '16px',
    height: '11px'
});

const LanguageSelect = () => {
    const [language, setLanguage] = useState('UKR');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 120 }}>
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                variant="outlined"
                MenuProps={{
                    PaperProps: {
                        sx: {
                            maxHeight: '400px',
                            '& .MuiMenu-list': {
                              height: '110px',
                              width: '187px',
                            }
                        }
                    }
                }}
                IconComponent={(props) => (
                    <Box {...props} component="span" sx={{ mr: 1 }}>
                        <img className={s.arrowImg} src="/image/arrowDown.png" alt="arrow" />
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
                        paddingLeft: '8px',
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
                        left: '7px',
                        top: 'unset'
                    }
                }}
            >
                <MenuItem value="UKR">
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={UkraineFlag} alt="Ukraine Flag" />
                        <div className={s.languageFont}>UKR</div> 
                    </Box>
                </MenuItem>
                <MenuItem value="DEU">
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={GermanyFlag} alt="Germany Flag" />
                        <div className={s.languageFont}>DEU</div>
                    </Box>
                </MenuItem>
                <MenuItem value="ENG">
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={USFlag} alt="US Flag" />
                        <div className={s.languageFont}>ENG</div>
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default LanguageSelect;
