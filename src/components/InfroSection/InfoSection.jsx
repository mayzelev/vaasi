import { Link } from 'react-router-dom';
import VButton from '../../UI/languageSelect/VButton/VButton';
import style from './InfoSection.module.css';

export default function InfoSection() {
    return (
        <div className={style.infoContainerSecondary}>
            <div className={style.infoContainer}>
                <div className={style.container}>
                    <div className={style.header}>
                        <h2 className={style.headerTitle}>VAASI</h2>
                        <h3 className={style.headerSubTitle}>INTERNATIONAL GROUP</h3>
                    </div>
                    <div className={style.content}>
                        <div className={style.card}>
                            <div className={style.containerForLine}>
                                <div className={style.lineContainer}>
                                    <div className={style.verticalLine}>
                                        <div className={`${style.circle} ${style.large}`}></div>
                                        <div className={`${style.circle} ${style.small} ${style.firstCircle}`}></div>
                                        <div className={`${style.circle} ${style.small} ${style.secondCircle}`}></div>
                                        <div className={`${style.circle} ${style.small}`}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className={style.cardHeader}>
                                        <h2 className={style.cardTitle}>Інформація для фізичних осіб</h2>
                                        <img src="../image/people.png" alt="people" />
                                    </div>
                                    <div className={style.description}>
                                        <p>
                                            Занурюйся у світ цифрових можливостей та отримуйте переваги співпраці разом з VAASI <br />{' '}
                                            INTERNATIONAL GROUP.
                                        </p>
                                        <p>Наша основна робота з фізичними особами це допомога у придбанні та обробці VAASI code.</p>
                                        <p>Ми пропонуємо послуги з обробки VAASI code та технічну підтримку під час нашої взаємодії.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.buttons}>
                                <Link to="/login/natural-persons" className="login">
                                    <VButton
                                        label="Увійти"
                                        buttonStyles={{
                                            background: 'var(--gradient-button)',
                                            textColor: 'var(--button-color-white)',
                                            fontSize: 16,
                                            padding: '8px 8px',
                                            borderRadius: '25px',
                                            lineHeight: '19.2px',
                                            borderColor: 'transparent',
                                            hoverBackground: 'var(--button-color-hover)',
                                            hoverBorderColor: 'transparent',
                                            height: '34px',
                                            width: '234px',
                                            transition: 'background 0.3s ease'
                                        }}
                                    />
                                </Link>
                                <Link to="/registration/natural-persons" className="registration">
                                    <VButton
                                        label="Зареєструватися"
                                        buttonStyles={{
                                            background: 'var(--button-color-grey)',
                                            textColor: 'var(--font-color-primary)',
                                            fontSize: 16,
                                            padding: '8px 8px',
                                            borderRadius: '25px',
                                            lineHeight: '19.2px',
                                            borderColor: 'transparent',
                                            hoverBackground: 'var(--button-color-hover)',
                                            hoverBorderColor: 'transparent',
                                            height: '34px',
                                            width: '234px',
                                            transition: 'background 0.3s ease'
                                        }}
                                    />
                                </Link>
                            </div>
                            <Link className={style.detais} to={'/natural-persons/details'}>
                                Детальніше
                            </Link>
                        </div>
                        <div className={style.card}>
                            <div className={style.containerForLine}>
                                <div className={style.lineContainer}>
                                    <div className={style.verticalLine2}>
                                        <div className={`${style.circle2} ${style.large2}`}></div>
                                        <div className={`${style.circle2} ${style.small2} ${style.firstCircle2}`}></div>
                                        <div className={`${style.circle2} ${style.small2} ${style.secondCircle2}`}></div>
                                        <div className={`${style.circle2} ${style.small2}`}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className={style.cardHeader}>
                                        <h2 className={style.cardTitle}>Інформація для юридичних осіб</h2>
                                        <img src="../image/factory.png" alt="factory" />
                                    </div>
                                    <div className={`${style.description} ${style.descriptionBottom}`}>
                                        <p>Ми єднаємо реальний та цифровий світ у бізнесі.</p>
                                        <p>Відкрийте нові можливості для вашого бізнесу.</p>
                                        <p>
                                            Скористайтеся нашими послугами та досвідом у створенні власного цифрового проєкту вашого
                                            бізнесу.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.buttons}>
                                <Link to="/login/legal-persons" className="login">
                                    <VButton
                                        label="Увійти"
                                        buttonStyles={{
                                            background: 'var(--gradient-button)',
                                            textColor: 'var(--button-color-white)',
                                            fontSize: 16,
                                            padding: '8px 8px',
                                            borderRadius: '25px',
                                            lineHeight: '19.2px',
                                            borderColor: 'transparent',
                                            hoverBackground: 'var(--button-color-hover)',
                                            hoverBorderColor: 'transparent',
                                            height: '34px',
                                            width: '234px',
                                            transition: 'background 0.3s ease'
                                        }}
                                    />
                                </Link>
                                <Link to="/registration/legal-persons" className="registration">
                                    <VButton
                                        label="Зареєструватися"
                                        buttonStyles={{
                                            background: 'var(--button-color-grey)',
                                            textColor: 'var(--font-color-primary)',
                                            fontSize: 16,
                                            padding: '8px 8px',
                                            borderRadius: '25px',
                                            lineHeight: '19.2px',
                                            borderColor: 'transparent',
                                            hoverBackground: 'var(--button-color-hover)',
                                            hoverBorderColor: 'transparent',
                                            height: '34px',
                                            width: '234px',
                                            transition: 'background 0.3s ease'
                                        }}
                                    />
                                </Link>
                            </div>
                            <Link className={style.detais} to={'/legal-persons/details'}>
                                Детальніше
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
