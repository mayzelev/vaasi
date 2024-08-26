import { Link } from 'react-router-dom';
import style from './AttentionSection.module.css';
import VButton from '../../UI/VButton/VButton';

export default function AttentionSection() {
    return (
        <div className={style.container}>
            <div className={style.containerTop}>
                <div className={style.card}>
                    <div className={style.containerForLine}>
                        <div className={style.lineContainer}>
                            <div className={style.verticalLine}>
                                <div className={`${style.circle} ${style.large}`}></div>
                            </div>
                        </div>
                        <div>
                            <div className={style.cardHeader}>
                                <div className={style.cardTitle}>
                                    <div className={style.cardTitleFirst}>Зверніть</div>
                                    <div className={style.cardTitleSecond}> увагу</div>
                                </div>
                            </div>
                            <div className={style.description}>
                                <p className={style.subDescription1}>
                                    <strong>Під час проходження реєстрації, приділіть увагу пункту генерація токена.</strong>
                                </p>
                                <p className={style.subDescription2}>
                                    Токен має бути обов&apos;язково збережений у данійному місці, оскільки він доступний лише вам та буде
                                    використовуватись під час входу до вашого особистого кабінету. Користування сайтом передбачає його
                                    оплату. Перед початком користування сайтом дізнайтеся інформацію у свого адміністратора. Реєстрація на
                                    порталі без коду адміністратора неможлива.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={style.bankImg} src="./image/BankMain.png" alt="bank" />
            </div>
            <div className={style.containerBottom}>
                <h3 className={style.headerTitle}>So what are you waiting for?</h3>
                <p className={style.subTitle}>Choose us and dive into your cashless funds</p>
                <Link to="/registration" className="registration">
                    <VButton
                        label="Реєстрація"
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
            </div>
        </div>
    );
}
