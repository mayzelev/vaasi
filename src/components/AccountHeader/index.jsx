import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, ClickAwayListener } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

import LanguageSelect from '../LanguageSelect';
import VButton from '../VButton';
import style from './Header.module.css';

import sfereImg from '../../assets/icons/sfere.png';
import logoImg from '../../assets/icons/logo.png';
import avatarImg from '../../assets/img/account-mock.jpg';
import cashImg from '../../assets/icons/cash.svg';

import useAuthStore, { USER_ID } from '../../store/useAuthStore';
import MenuItems from './MenuItem.jsx';
import { getUser } from '../../api/apiUsers.js';

export default function AccountHeader() {
    const { logout } = useAuthStore();
    const userId = localStorage.getItem(USER_ID);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [user, setUser] = useState('');

    const navigate = useNavigate();
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleClickAway = () => {
        if (drawerOpen) {
            setDrawerOpen(false); // Close the drawer when clicking outside
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        if (!userId) {
            return;
        }
        const fetchUserData = async () => {
            try {
                const data = await getUser(userId);
                setUser({
                    username: data.username,
                    balance: data.balance
                });
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        fetchUserData();
    }, [userId]);

    return (
        <div className="container">
            <AppBar position="static">
                <Toolbar className={style.headerToolbar}>
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
                                        <strong>{user.username}</strong>
                                    </p>
                                    <p>
                                        Поточний баланс: <span>{user.balance || 0}</span> <img src={cashImg} alt={'cash'} />
                                    </p>
                                </div>
                                <img src={avatarImg} className={style.avatarImg} alt={"avatar"}/>
                            </div>
                            <div className={style.headerRightInfo}>
                                <VButton
                                    onClick={handleLogout}
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
                                marginTop: '66px' // Adjust this value as needed
                            }
                        }}
                    >
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div>
                                <MenuItems />
                            </div>
                        </ClickAwayListener>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}
