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
        <section className="container">
            <div className={style.infoContainerSecondary}>
                <div className={style.container}>
                    <div className={style.header}>
                        <h2 className={style.headerTitle}>VAASI</h2>
                        <h3 className={style.headerSubTitle}>INTERNATIONAL GROUP</h3>
                    </div>
                    <div className={style.content}>
                        <div className={style.card}>
                            <div className={style.cardWrapper}>
                                <div className={style.cardWrapperLine}>
                                    <div className={style.cardHeader}>
                                        <h2 className={style.cardTitle}>Інформація для фізичних осіб</h2>
                                        <img className={style.cardHeaderImg} src={peopleImg} alt="people" />
                                    </div>
                                    <div className={style.description}>
                                        <p className={style.descriptionTitle}>
                                            Занурюйся у світ цифрових можливостей та отримуй переваги співпраці разом з VAASI INTERNATIONAL
                                            GROUP.
                                        </p>
                                        <p className={style.descriptionTitle}>
                                            Наша основна робота з фізичними особами це допомога у придбанні та обробці VAASI code.
                                        </p>
                                        <p className={style.descriptionTitle}>
                                            Ми пропонуємо послуги з обробки VAASI code та технічну підтримку під час нашої взаємодії.
                                        </p>
                                    </div>
                                </div>

                                <div className={style.buttons}>
                                    <VButton
                                        onClick={handleOpenIndividualLogin}
                                        label="Увійти"
                                        buttonStyles={{
                                            minWidth: 'fit-content'
                                        }}
                                    />

                                    <VButton
                                        onClick={handleOpenIndividualRegistration}
                                        label="Зареєструватися"
                                        buttonStyles={{
                                            background: 'var(--button-color-grey)',
                                            textColor: 'var(--font-color-primary)',
                                            hoverBackground: 'var(--button-color-hover)',
                                            minWidth: 'fit-content'
                                        }}
                                    />
                                </div>
                                <Link
                                    className={style.details}
                                    to={'/natural-persons'}
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    Детальніше
                                </Link>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.cardWrapper}>
                                <div className={style.cardWrapperLine}>
                                    <div className={style.cardHeader}>
                                        <h2 className={style.cardTitle}>Інформація для юридичних осіб</h2>
                                        <img className={style.cardHeaderImg} src={factoryImg} alt="factory" />
                                    </div>
                                    <div className={`${style.description} ${style.descriptionBottom}`}>
                                        <p className={style.descriptionTitle}>Ми єднаємо реальний та цифровий світ у бізнесі.</p>
                                        <p className={style.descriptionTitle}>Відкрийте нові можливості для вашого бізнесу.</p>
                                        <p className={style.descriptionTitle}>
                                            Скористайтеся нашими послугами та досвідом у створенні власного цифрового проєкту вашого
                                            бізнесу.
                                        </p>
                                    </div>
                                </div>
                                <div className={style.buttons}>
                                    <VButton
                                        onClick={handleOpenLegalLogin}
                                        label="Увійти"
                                        buttonStyles={{
                                            minWidth: 'fit-content'
                                        }}
                                    />

                                    <VButton
                                        onClick={handleOpenLegalEntityRegistration}
                                        label="Зареєструватися"
                                        buttonStyles={{
                                            background: 'var(--button-color-grey)',
                                            textColor: 'var(--font-color-primary)',
                                            hoverBackground: 'var(--button-color-hover)',
                                            minWidth: 'fit-content'
                                        }}
                                    />
                                </div>
                                <Link
                                    className={style.details}
                                    to={'/legal-entities'}
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    Детальніше
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
