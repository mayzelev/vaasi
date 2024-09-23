import style from './Footer.module.css';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/icons/logo.png';
import callImg from '../../assets/icons/call.png';
import messageImg from '../../assets/icons/message.png';
import VButton from '../VButton';
import { footerLinkRulesData, footerLinkPersonsData, footerSocialData } from './mockData';
import LanguageItem from '../LanguageItem';

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
                            <LanguageItem />
                        </div>
                    </div>
                    <div className={style.center}>
                        <ul className={style.links}>
                            {footerLinkRulesData.map(({ to, text }) => (
                                <li key={to}>
                                    <Link to={to} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className={`${style.links} ${style.linksInfo}`}>
                            {footerLinkPersonsData.map(({ to, text }) => (
                                <li key={to}>
                                    <Link to={to} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.right}>
                        <div className={style.social}>
                            <span>Соціальні мережі</span>
                            {footerSocialData.map(({ src, href, alt }) => (
                                <a key={alt} href={href}>
                                    <img className={style.icons} src={src} alt={alt} />
                                </a>
                            ))}
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
