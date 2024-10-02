import { ClickAwayListener, Tooltip } from '@mui/material';
import { useState } from 'react';
import info from '../../assets/icons/info.svg';
import style from './Tooltip.module.css';

const TooltipComponent = ({ title, tooltipStyles }) => {
    const [open, setOpen] = useState(false);

    const handleTooltipToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleTooltipClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ClickAwayListener onClickAway={handleTooltipClose}>
                <div className={style.tooltipIcon}>
                    <Tooltip
                        placement="bottom"
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title={title}
                        componentsProps={{
                            tooltip: {
                                sx: tooltipStyles
                            }
                        }}
                    >
                        <p>
                            <img src={info} onClick={handleTooltipToggle} alt="info" className={style.infoImg} />
                        </p>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        </>
    );
};

export default TooltipComponent;
