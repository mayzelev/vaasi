import style from './AttentionSection.module.css';
import VButton from '../VButton';
import bankImg from '../../assets/img/BankMain.png';
import useAuthStore from '../../store/useAuthStore';

export default function AttentionSection() {
    const { openRegistration } = useAuthStore();

    return (
        <div className="container">
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
                                        Токен має бути обов&apos;язково збережений у надійному місці, оскільки він доступний лише вам та
                                        буде використовуватись під час входу до вашого особистого кабінету. <br /> Користування сайтом
                                        передбачає його оплату. Перед початком користування сайтом дізнайтеся інформацію у свого
                                        адміністратора. Реєстрація на порталі без коду адміністратора неможлива.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className={style.bankImg} src={bankImg} alt="bank" />
                </div>
                <div className={style.containerBottom}>
                    <h3 className={style.headerTitle}>Так чого ви чекаєте?</h3>
                    <p className={style.subTitle}>Обирайте нас і занурюйтесь у світ безготівкових рахунків</p>

                    <VButton
                        onClick={openRegistration}
                        label="Реєстрація"
                        buttonStyles={{
                            height: '34px',
                            width: '234px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
