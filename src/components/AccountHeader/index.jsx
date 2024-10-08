import { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, ClickAwayListener, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import LanguageSelect from '../LanguageSelect';
import VButton from '../VButton';
import style from './Header.module.css';

import sfereImg from '../../assets/icons/sfere.png';
import logoImg from '../../assets/icons/logo.png';
import avatarImg from '../../assets/img/account-mock.jpg';
import cashImg from '../../assets/icons/cash.svg';

import MenuItems from './MenuItem.jsx';
import useUserStore from '../../store/useUserStore.js';
import { PERSON_TYPE, USER_ID, USER_TYPE } from '../../shared/constants.js';
import { getCompany, getUser } from '../../api/apiUsers.js';
import LogOutModal from '../Modals/LogOutModal/index.jsx';

export default function AccountHeader() {
    const { setUserInfo, userData } = useUserStore();
    const { username, balance } = userData;
    const [drawerOpen, setDrawerOpen] = useState(false);
    const userId = localStorage.getItem(USER_ID);
    const personType = localStorage.getItem(PERSON_TYPE);
    const [openLogOutModal, setOpenLogOutModal] = useState(false);
    const containerRef = useRef();

    const [left, setLeft] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setLeft(containerRef?.current?.getBoundingClientRect()?.left + 'px' || 0);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const fetchFunction = personType === USER_TYPE.COMPANY ? getCompany : getUser;
            try {
                const data = await fetchFunction(userId);
                setUserInfo({ ...data });
            } catch (error) {
                console.error(`Error fetching ${personType} info:`, error);
            }
        };
        fetchUserInfo();
    }, [personType, setUserInfo, userId]);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleClickAway = () => {
        if (drawerOpen) {
            setDrawerOpen(false);
        }
    };

    return (
        <div className="container">
            <AppBar position="static">
                <Toolbar className={style.headerToolbar} ref={containerRef}>
                    <div className={style.header}>
                        <div className={style.headerLeft}>
                            <Link to="/">
                                <div className={style.logoContainer}>
                                    <img className={style.sfere} src={sfereImg} alt="VAASI Logo" />
                                    <img className={style.logoMobile} src={logoImg} alt="VAASI Logo" />
                                </div>
                            </Link>
                        </div>
                        <div className={style.headerRight}>
                            {/*TO DO: MAKE SEPARATE COMPONENT    */}
                            <div className={style.accountHeader}>
                                <div className={style.accountText}>
                                    <p>
                                        <strong>{username}</strong>
                                    </p>
                                    <p>
                                        Поточний баланс: <span>{balance || 0}</span> <img src={cashImg} alt={'cash'} />
                                    </p>
                                </div>
                                <img src={avatarImg} className={style.avatarImg} alt={'avatar'} />
                            </div>
                            <div className={style.headerRightInfo}>
                                <VButton
                                    onClick={() => setOpenLogOutModal(true)}
                                    label={'Вийти'}
                                    buttonStyles={{
                                        background: 'var(--button-color-grey)',
                                        textColor: 'var(--font-color-primary)',
                                        hoverBackground: 'var(--button-color-hover)',
                                        padding: '2px 8px',
                                        width: 'auto'
                                    }}
                                />
                                <LanguageSelect />
                            </div>
                        </div>
                    </div>

                    <IconButton edge="start" color="var( --font-color-primary)" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        hideBackdrop={true}
                        PaperProps={{
                            style: {
                                marginTop: '66px',
                                left: left,
                                height: '100%'
                            }
                        }}
                    >
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div>
                                <MenuItems toggleDrawer={toggleDrawer} />
                                <ListItemButton>
                                    <VButton
                                        onClick={() => setOpenLogOutModal(true)}
                                        label={'Вийти'}
                                        buttonStyles={{
                                            background: 'var(--button-color-grey)',
                                            textColor: 'var(--font-color-primary)',
                                            hoverBackground: 'var(--button-color-hover)',
                                            width: '100%'
                                        }}
                                    />
                                </ListItemButton>
                            </div>
                        </ClickAwayListener>
                    </Drawer>
                </Toolbar>
            </AppBar>
            <LogOutModal openLogOutModal={openLogOutModal} setOpenLogOutModal={setOpenLogOutModal} />
        </div>
    );
}
