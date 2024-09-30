export const tooltipStyles = {
    bgcolor: 'white',
    borderRadius: '10px',
    filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
    color: '#242424',
    fontSize: '1rem',
    fontWeight: 250,
    fontFamily: 'inherit',
    maxWidth: '570px',
    marginLeft: '50px',
    textAlign: 'justify',
    transform: 'none !important',
    width: '600px',
    position: 'absolute',
    left: -12,
    top: -80,
    border: '1px solid #FF7067',
    '& .MuiTooltip-arrow': {
        color: 'common.black'
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 8px 17px 18px',
        borderColor: 'transparent transparent #efa7a2 transparent',
        transform: 'rotate(138deg)',
        top: 32,
        left: -17,
        zIndex: -1
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 8px 17.5px 20px',
        borderColor: 'transparent transparent white transparent',
        transform: 'rotate(138deg)',
        top: 31,
        left: -14
    },
    '@media (max-width: 1024px)': {
        width: '264px',
        left: '-284px',
        top: '-90px',
        marginLeft: 0,
        '&:after': {
            display: 'none'
        },
        '&:before': {
            display: 'none'
        }
    }
};
