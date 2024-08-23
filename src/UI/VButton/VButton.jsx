import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)(({ theme, customStyles }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: customStyles.fontSize || 16,
    padding: customStyles.padding || '6px 12px',
    border: `1px solid ${customStyles.borderColor || '#0063cc'}`,
    lineHeight: customStyles.lineHeight || 1.5,
    background: customStyles.background || '#0063cc',
    borderRadius: customStyles.borderRadius || '4px',
    color: customStyles.textColor || theme.palette.getContrastText(customStyles.backgroundColor || '#0063cc'),
    height: customStyles.height || 'auto',
    width: customStyles.width || 'auto',
    transition: customStyles.transition || 'background 0.3s ease',
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
        background: customStyles.hoverBackground || '#0069d9',
        borderColor: customStyles.hoverBorderColor || '#0062cc'
    },
    '&:active': {
        boxShadow: 'none',
        background: customStyles.activeBackground || 'var(--button-color-active)',
        borderColor: customStyles.activeBorderColor || 'var(--button-border-color-active)'
    },
    '&:focus': {
        boxShadow: customStyles.focusBoxShadow || '0 0 0 0.2rem rgba(238, 65, 59, 0.5)'
    }
}));

function VButton({ label, buttonStyles = {} }) {
    return <StyledButton customStyles={buttonStyles}>{label}</StyledButton>;
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
        focusBoxShadow: PropTypes.string,
        height: PropTypes.string,
        width: PropTypes.string,
        transition: PropTypes.string
    })
};

VButton.defaultProps = {
    buttonStyles: {}
};

export default VButton;
