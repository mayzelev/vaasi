import { Link } from 'react-router-dom';
import style from './InfoSection.module.css';
import VButton from '../VButton';
import peopleImg from '../../assets/icons/people.png';
import factoryImg from '../../assets/icons/factory.png';

import useAuthStore from '../../store/useAuthStore';

export default function InfoSection() {
    const { openRegistration, openLogin } = useAuthStore();

    const handleOpenLegalEntityRegistration = () => {
        openRegistration({ initialTab: 0 });
    };

    const handleOpenIndividualRegistration = () => {
        openRegistration({ initialTab: 1 });
    };
    const handleOpenLegalLogin = () => {
        openLogin({ initialTabLogin: 0 });
    };

    const handleOpenIndividualLogin = () => {
        openLogin({ initialTabLogin: 1 });
    };

    return (
        <div className="container">
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
                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.cardHeader}>
                                            <h2 className={style.cardTitle}>Інформація для фізичних осіб</h2>
                                            <img src={peopleImg} alt="people" />
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
                                    <div className={style.buttonSize}>
                                        <VButton
                                            onClick={handleOpenIndividualLogin}
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
                                                height: '34px',
                                                maxWidth: '234px',
                                                transition: 'background 0.3s ease'
                                            }}
                                        />
                                    </div>
                                    <div className={style.buttonSize}>
                                        <VButton
                                            onClick={handleOpenIndividualRegistration}
                                            label="Зареєструватися"
                                            buttonStyles={{
                                                background: 'var(--button-color-grey)',
                                                textColor: 'var(--font-color-primary)',
                                                fontSize: 16,
                                                padding: '8px 8px',
                                                borderRadius: '50px',
                                                lineHeight: '19.2px',
                                                borderColor: 'none',
                                                hoverColor: 'white',
                                                hoverBackground: 'var(--button-color-hover)',
                                                hoverBorderColor: 'transparent',
                                                height: '34px',
                                                maxWidth: '234px',
                                                transition: 'background 0.3s ease'
                                            }}
                                        />
                                    </div>
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
                                        </div>
                                    </div>
                                    <div>
                                        <div className={style.cardHeader}>
                                            <h2 className={style.cardTitle}>Інформація для юридичних осіб</h2>
                                            <img src={factoryImg} alt="factory" />
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
                                    <div className={style.buttonSize}>
                                        <VButton
                                            onClick={handleOpenLegalLogin}
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
                                                height: '34px',
                                                maxWidth: '234px',
                                                transition: 'background 0.3s ease'
                                            }}
                                        />
                                    </div>
                                    <div className={style.buttonSize}>
                                        <VButton
                                            onClick={handleOpenLegalEntityRegistration}
                                            label="Зареєструватися"
                                            buttonStyles={{
                                                background: 'var(--button-color-grey)',
                                                textColor: 'var(--font-color-primary)',
                                                fontSize: 16,
                                                padding: '8px 8px',
                                                borderRadius: '50px',
                                                lineHeight: '19.2px',
                                                borderColor: 'none',
                                                hoverBackground: 'var(--button-color-hover)',
                                                hoverBorderColor: 'transparent',
                                                height: '34px',
                                                maxWidth: '234px',
                                                transition: 'background 0.3s ease'
                                            }}
                                        />
                                    </div>
                                </div>
                                <Link className={style.detais} to={'/legal-persons/details'}>
                                    Детальніше
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
