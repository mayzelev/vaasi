import { Link } from 'react-router-dom';
import LanguageSelect from '../../UI/LanguageSelect/LanguageSelect';
import style from './Header.module.css';
import VButton from '../../UI/VButton/VButton';
import sfereImg from '../../assets/sfere.png';
import logoImg from '../../assets/logo.png';
import watchImg from '../../assets/watch.png';

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerLeft}>
                <div className={style.logoContainer}>
                    <img className={style.sfere} src={sfereImg} alt="VAASI Logo" />
                    <img className={style.logo} src={logoImg} alt="VAASI Logo" />
                </div>
                <div className={style.navLinks}>
                    <Link to="/LegalEntities">Юридичні особи</Link>|<Link to="/NaturalPersons">Фізичні особи</Link>
                </div>
            </div>
            <div className={style.headerRight}>
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
                    <Link to="/registration" className={style.register}>
                        Реєстрація
                    </Link>
                    <div className={style.separator}></div>

                    <Link to="/login" className="login">
                        <VButton
                            label="Увійти"
                            buttonStyles={{
                                background: 'var(--gradient-button)',
                                textColor: 'var(--button-color-white)',
                                fontSize: 16,
                                padding: '8px 8px',
                                borderRadius: '50px',
                                lineHeight: '19.2px',
                                borderColor: 'transparent',
                                hoverBackground: 'var(--button-color-hover)',
                                hoverBorderColor: 'transparent',
                                height: '35px',
                                width: '113px',
                                transition: 'background 0.3s ease'
                            }}
                        />
                    </Link>
                </div>
                <LanguageSelect />
            </div>
        </header>
    );
}
