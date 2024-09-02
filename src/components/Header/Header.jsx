import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LanguageSelect from '../../components/UI/LanguageSelect/LanguageSelect';
import style from './Header.module.css';
import VButton from '../../components/UI/VButton/VButton';
import sfereImg from '../../assets/mainPageImg/sfere.png';
import logoImg from '../../assets/mainPageImg/logo.png';
import watchImg from '../../assets/mainPageImg/watch.png';
import useRegistrationStore from '../../store/useRegistrationStore';


export default function Header() {
    const { openRegistration } = useRegistrationStore();
    const [drawerOpen, setDrawerOpen] = useState(false);

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
                    <Link to="/">
                        <div className={style.logoContainer}>
                            <img className={style.logo} src={logoImg} alt="VAASI Logo" />
                        </div>
                    </Link>
                </div>
            </ListItem>
            <ListItemButton>
                <VButton
                    label="Увійти"
                    buttonStyles={{
                        background: 'var(--gradient-button)',
                        textColor: 'var(--button-color-white)',
                        fontSize: 16,
                        padding: '8px 8px',
                        borderRadius: '50px',
                        lineHeight: '19.2px',
                        borderColor: 'none',
                        hoverBackground: 'var(--button-color-hover)',
                        hoverBorderColor: 'transparent',
                        height: '35px',
                        width: '113px',
                        transition: 'background 0.3s ease'
                    }}
                />
            </ListItemButton>
            <ListItemButton>
                <button onClick={openRegistration}>
                    Реєстрація
                </button>
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
                            <div className={style.navLinks}>
                                <Link to="/legal-entities">Юридичні особи</Link>
                                <span>|</span>
                                <Link to="/natural-persons">Фізичні особи</Link>
                            </div>
                        </div>

                        <div className={style.headerRight} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <div className={style.clocks}>
                                <div className={style.clockeItemWithImg}>
                                    <img className={style.watch} src={watchImg} alt="watch" />
                                    <div className={style.clockeItem}>
                                        <span>07:21</span>
                                        <span>Київ</span>
                                    </div>
                                </div>
                                <div className={style.clockeItemWithImg}>
                                    <img className={style.watch} src={watchImg} alt="watch" />
                                    <div className={style.clockeItem}>
                                        <span>07:21</span>
                                        <span>Токіо</span>
                                    </div>
                                </div>
                                <div className={style.clockeItemWithImg}>
                                    <img className={style.watch} src={watchImg} alt="watch" />
                                    <div className={style.clockeItem}>
                                        <span>07:21</span>
                                        <span>Сідней</span>
                                    </div>
                                </div>
                                <div className={style.clockeItemWithImg}>
                                    <img className={style.watch} src={watchImg} alt="watch" />
                                    <div className={style.clockeItem}>
                                        <span>07:21</span>
                                        <span>Нью-Йорк</span>
                                    </div>
                                </div>
                                <div className={style.clockeItemWithImg}>
                                    <img className={style.watch} src={watchImg} alt="watch" />
                                    <div className={style.clockeItem}>
                                        <span>07:21</span>
                                        <span>Лондон</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.authButtons}>
                                <button onClick={openRegistration}>Реєстрація</button>

                                <div className={style.separator}></div>
                                <VButton
                                    label="Увійти"
                                    buttonStyles={{
                                        background: 'var(--gradient-button)',
                                        textColor: 'var(--button-color-white)',
                                        fontSize: 16,
                                        padding: '8px 8px',
                                        borderRadius: '50px',
                                        lineHeight: '19.2px',
                                        borderColor: 'none',
                                        hoverBackground: 'var(--button-color-hover)',
                                        hoverBorderColor: 'transparent',
                                        height: '35px',
                                        width: '113px',
                                        transition: 'background 0.3s ease'
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
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        // sx={{
                        //     '& .MuiDrawer-paper': {
                        //         width: '100%',
                        //         height: '100%', // Займає весь екран
                        //         backgroundColor: 'white' // Зміна кольору фону
                        //     }
                        // }}
                    >
                        {menuItems}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}
