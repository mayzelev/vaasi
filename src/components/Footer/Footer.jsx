import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import VButton from '../../components/UI/VButton/VButton';
import logoImg from '../../assets/mainPageImg/logo.png';
import insta from '../../assets/mainPageImg/instagram.png';
import telegram from '../../assets/mainPageImg/telegram.png';
import callImg from '../../assets/mainPageImg/call.png';
import messageImg from '../../assets/mainPageImg/message.png';

export default function Footer() {
    return (
      <div className='container'>
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.logoContainer}>
                        <img className={style.logo} src={logoImg} alt="VAASI Logo" />
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
                            <Link to="/">Про нас</Link>
                        </li>
                        <li>
                            <Link to="/">Правила користування кодами VAASI</Link>
                        </li>
                        <li>
                            <Link to="/">Політика конфіденційності</Link>
                        </li>
                        <li>
                            <Link to="/">Правила користування сайтом</Link>
                        </li>
                    </ul>
                    <ul className={`${style.links} ${style.linksInfo}`}>
                        <li>
                            <Link to="/">Фізичні особи інформація</Link>
                        </li>
                        <li>
                            <Link to="/">Юридичні особи інформація</Link>
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
                                    background: 'var(--gradient-button)',
                                    textColor: 'var(--button-color-secondary)',
                                    fontSize: 16,
                                    padding: '8px 8px',
                                    borderRadius: '25px',
                                    lineHeight: '19px',
                                    borderColor: 'none',
                                    hoverBackground: 'var(--button-color-hover)',
                                    hoverBorderColor: 'transparent',
                                    height: '31px',
                                    width: '180px',
                                    transition: 'background 0.3s ease'
                                }}
                            />
                        </Link>
                        <p className={style.contactLink}>
                            <img className={style.iconsContact} src={callImg} alt="call" />
                            <a href="tel:+3809898778">380 989 87 78</a>
                        </p>
                        <p className={style.contactLink}>
                            <img className={style.iconsContact} src={messageImg} alt="message" />
                            <a href="mailto:curlypittie@gufum.com">curlypittie@gufum.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.copyrightContainer}>
                <div className={style.copyright}>
                    <p>Copyright 2024©.</p>
                    <p>VAASI International Group: Connecting Worlds, Creating Opportunities</p>
                </div>
            </div>
        </footer>
        </div>
    );
}
