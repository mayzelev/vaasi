import { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import LanguageSelect from '../LanguageSelect';
import VButton from '../VButton';
import style from './Header.module.css';

import sfereImg from '../../assets/icons/sfere.png';
import logoImg from '../../assets/icons/logo.png';
import useAuthStore from '../../store/useAuthStore';
import { mockDataHeaderWatch } from './mockData.js';

export default function Header() {
    const { openRegistration, openLogin } = useAuthStore();
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setDrawerOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = (
        <List>
            <ListItem>
                <div className={style.headerLeft}>
                    <div className={style.logoContainer}>
                        <img className={style.logo} src={logoImg} alt="VAASI Logo" />
                    </div>
                </div>
            </ListItem>
            <ListItemButton>
                <VButton
                    onClick={openLogin}
                    label={'Увійти'}
                    buttonStyles={{
                        height: '35px',
                        width: '113px'
                    }}
                />
            </ListItemButton>
            <ListItemButton>
                <button onClick={openRegistration}>Реєстрація</button>
            </ListItemButton>
            <ListItemButton>
                <Link to="/natural-persons">Фізичні особи</Link>
            </ListItemButton>
            <ListItemButton>
                <Link to="/legal-entities">Юридичні особи</Link>
            </ListItemButton>
            <ListItemButton>
                <LanguageSelect />
            </ListItemButton>
        </List>
    );

    return (
        <header className="container">
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
                            <div className={style.navLinks}>
                                <Link to="/legal-entities">Юридичні особи</Link>
                                <span>|</span>
                                <Link to="/natural-persons">Фізичні особи</Link>
                            </div>
                        </div>

                        <div className={style.headerRight}>
                            <div className={style.clocks}>
                                {mockDataHeaderWatch.map(({ timeZone, watch }) => (
                                    <div className={style.clockeItemWithImg} key={timeZone.id}>
                                        <img className={style.watch} src={watch.src} alt={watch.alt} />
                                        <div className={style.clockeItem}>
                                            <span>{timeZone.time}</span>
                                            <span>{timeZone.city}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={style.authButtons}>
                                <button onClick={openRegistration}>Реєстрація</button>

                                <div className={style.separator}></div>

                                <VButton
                                    onClick={openLogin}
                                    label={'Увійти'}
                                    buttonStyles={{
                                        height: '35px',
                                        width: '113px'
                                    }}
                                />
                            </div>
                            <LanguageSelect />
                        </div>
                    </div>

                    <IconButton
                        edge="start"
                        color="var( --font-color-primary)"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ display: { xs: 'block', md: 'none' } }}>
                        {menuItems}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </header>
    );
}
