import { v4 as uuidv4 } from 'uuid';
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const generateToken = (setTokenCode, setIsCopyDisabled, setTooltipText, setIcon) => {
    const token = uuidv4();
    setTokenCode(token);
    setIsCopyDisabled(false);
    setTooltipText('Скопіювати?');
    setIcon(<ContentCopyIcon sx={{ color: 'var(--font-color-thirdy)' }} />);
};

export const handleCopyToken = (tokenCode, setTooltipText, setIcon) => {
    navigator.clipboard.writeText(tokenCode);
    setTooltipText('Скопійовано');
    setIcon(<CheckIcon sx={{ color: 'var(--font-color-thirdy)' }} />);

    setTimeout(() => {
        setTooltipText('Скопіювати?');
        setIcon(<ContentCopyIcon sx={{ color: 'var(--font-color-thirdy)' }} />);
    }, 3000);
};

export const loadSavedValues = (formKey) => {
    const savedValues = localStorage.getItem(formKey);
    return savedValues ? JSON.parse(savedValues) : null;
};
