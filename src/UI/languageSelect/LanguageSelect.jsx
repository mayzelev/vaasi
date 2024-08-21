import { useState } from 'react';
import { MenuItem, Select, FormControl, Box } from '@mui/material';
import { styled } from '@mui/system';
import UkraineFlag from '/flags/UkraineFlag.svg';
import GermanyFlag from '/flags/GermanyFlag.svg';
import USFlag from '/flags/USFlag.svg';

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
        <FormControl sx={{ minWidth: 59, border: 'none' }}>
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                variant="outlined"
                sx={{
                    border: 'none',
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 0 },
                    '& .MuiSelect-select': {
                        paddingLeft: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }
                }}
            >
                <MenuItem value="UKR" >
                    <Box display="flex" alignItems="center" >
                        <FlagIcon src={UkraineFlag} alt="Ukraine Flag" />
                        UKR
                    </Box>
                </MenuItem>
                <MenuItem value="DEU">
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={GermanyFlag} alt="Germany Flag" />
                        DEU
                    </Box>
                </MenuItem>
                <MenuItem value="ENG">
                    <Box display="flex" alignItems="center">
                        <FlagIcon src={USFlag} alt="US Flag" />
                        ENG
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default LanguageSelect;
