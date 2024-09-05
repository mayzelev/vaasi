import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)(({ theme, customstyles }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: customstyles.fontSize || 16,
    padding: customstyles.padding || '6px 12px',
    border: `1px solid ${customstyles.borderColor || '#0063cc'}`,
    lineHeight: customstyles.lineHeight || 1.5,
    background: customstyles.background || '#0063cc',
    borderRadius: customstyles.borderRadius || '4px',
    color: customstyles.textColor || theme.palette.getContrastText(customstyles.backgroundColor || '#0063cc'),
    height: customstyles.height || 'auto',
    width: customstyles.width || '100%',
    maxWidth: customstyles.maxWidth,
    transition: customstyles.transition || 'background 0.3s ease, border-color 1s ease, color 0.3s ease', // Додаємо плавний перехід
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Museo Sans Cyrl',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        boxShadow: 'none',
        background: customstyles.hoverBackground || '#0069d9',
        borderColor: customstyles.hoverBorderColor || '#0062cc',
        color: customstyles.hoverColor || '#fff'
    },
    '&:active': {
        boxShadow: 'none',
        background: customstyles.activeBackground || 'var(--button-color-active)',
        borderColor: customstyles.activeBorderColor || 'var(--button-border-color-active)'
    },
    '&:focus': {
        borderColor: customstyles.focusBorderColor || '#0063cc',
        transition: 'border-color 0.3s ease'
    },
    '&:focus-visible': {
        borderColor: 'var(--button-color-active)'
    }
}));

function VButton({ label, buttonStyles = {}, disableRipple = true, onClick, type = 'button' }) {
    return (
        <StyledButton customstyles={buttonStyles} disableRipple={disableRipple} onClick={onClick} type={type}>
            {label}
        </StyledButton>
    );
}

VButton.propTypes = {
    label: PropTypes.string.isRequired,
    buttonStyles: PropTypes.shape({
        background: PropTypes.string,
        textColor: PropTypes.string,
        fontSize: PropTypes.number,
        padding: PropTypes.string,
        borderRadius: PropTypes.string,
        borderColor: PropTypes.string,
        lineHeight: PropTypes.string,
        hoverBackgroundColor: PropTypes.string,
        hoverBorderColor: PropTypes.string,
        activeBackgroundColor: PropTypes.string,
        activeBorderColor: PropTypes.string,
        focusBorderColor: PropTypes.string,
        focusBoxShadow: PropTypes.string,
        height: PropTypes.string,
        width: PropTypes.string,
        transition: PropTypes.string,
        hoverColor: PropTypes.string,
        maxWidth: PropTypes.string
    }),
    disableRipple: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default VButton;
