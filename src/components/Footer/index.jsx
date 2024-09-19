import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/icons/logo.png';
import insta from '../../assets/icons/instagram.png';
import telegram from '../../assets/icons/telegram.png';
import callImg from '../../assets/icons/call.png';
import messageImg from '../../assets/icons/message.png';
import VButton from '../VButton';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.left}>
                        <div className={style.logoContainer}>
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <img className={style.logo} src={logoImg} alt="VAASI Logo" />
                            </Link>
                        </div>
                        <div className={style.languages}>
                            <span>UA</span>
                            <span>EN</span>
                            <span>DE</span>
                        </div>
                    </div>
                    <div className={style.center}>
                        <ul className={style.links}>
                            <li>
                                <Link to="/about-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    Про нас
                                </Link>
                            </li>
                            <li>
                                <Link to="/rules-for-using-vaasi-code" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    Правила користування кодами VAASI
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    Політика конфіденційності
                                </Link>
                            </li>
                            <li>
                                <Link to="/rules-for-using-site" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    Правила користування сайтом
                                </Link>
                            </li>
                        </ul>
                        <ul className={`${style.links} ${style.linksInfo}`}>
                            <li>
                                <Link to="/natural-persons" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    Фізичні особи інформація
                                </Link>
                            </li>
                            <li>
                                <Link to="/legal-entities" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    Юридичні особи інформація
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.right}>
                        <div className={style.social}>
                            <span>Соціальні мережі</span>

                            <Link to="/instagram">
                                <img className={style.icons} src={insta} alt="Instagram" />
                            </Link>
                            <Link to="/telegram">
                                <img className={style.icons} src={telegram} alt="Telegram" />
                            </Link>
                        </div>

                        <div className={style.contact}>
                            <Link to="/feedback" className="feedback">
                                <VButton
                                    label="Зворотній зв'язок"
                                    buttonStyles={{
                                        textColor: 'var(--button-color-secondary)',
                                        maxWidth: '180px'
                                    }}
                                />
                            </Link>
                            <p className={style.contactLink}>
                                <img className={style.iconsContact} src={callImg} alt="call" />
                                <a href="tel:+3809898778">380 989 87 78</a>
                            </p>
                            <p className={style.contactLink}>
                                <img className={style.iconsContact} src={messageImg} alt="message" />
                                <a href="mailto:info.vaasi@gmail.com">info.vaasi@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.copyrightContainer}>
                    <div className={style.copyright}>
                        <p className={style.copyrightText}>Copyright 2024©.</p>
                        <p className={style.copyrightText}>VAASI International Group: Connecting Worlds, Creating Opportunities</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
