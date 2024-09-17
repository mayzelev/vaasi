import { Accordion, AccordionDetails } from '@mui/material';
import style from './Accordion.module.css';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Arrow from '../../assets/iconComponents/Arrow.jsx';

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<Arrow />} {...props} />)(() => ({
    '& .MuiAccordionSummary-expandIconWrapper svg': {
        fill: 'black'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        svg: {
            fill: 'orange',
            transition: 'all 0.1s'
        }
    },
    '&.MuiButtonBase-root': {
        boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.15)',
        padding: '27px 16px',
        '& .MuiAccordionSummary-content': {
            margin: '0'
        }
    }
}));

const MuiAccordion = styled(({ children, ...props }) => <Accordion {...props}>{children}</Accordion>)(() => ({
    '&.MuiPaper-root': {
        boxShadow: 'none',
        marginTop: '11px',
        '&:before': {
            display: 'none'
        }
    },
    '& .MuiAccordionDetails-root': {
        padding: '16px'
    }
}));

export default function AccordionSection({ data }) {
    return (
        <>
            {data.map((item) => (
                <MuiAccordion key={item.id}>
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <p className={style.topTitle}>{item.name}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className={style.bottomTitle}>{item.description}</p>
                    </AccordionDetails>
                </MuiAccordion>
            ))}
        </>
    );
}
