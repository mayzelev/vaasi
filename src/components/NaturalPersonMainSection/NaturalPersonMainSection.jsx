import React from 'react';
import style from './NaturalPersonMainSection.module.css';

export default function NaturalPersonMainSection() {
    return (
      <div className='container'>
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
                <img className={style.bankImg} src='/' alt="bank" />
            </div>
        </div>
      </div>
    );
}
