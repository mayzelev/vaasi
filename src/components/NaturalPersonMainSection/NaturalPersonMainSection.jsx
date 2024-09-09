import React from 'react';
import style from './NaturalPersonMainSection.module.css';
import VButton from '../UI/VButton/VButton';

export default function NaturalPersonMainSection() {
    return (
        <div className="container">
            <div className={style.container}>
                <div className={style.containerGirl}>
                    <div className={style.containerTop}>
                        <div className={style.card}>
                            <div className={style.containerForLine}>
                                <div className={style.lineContainer}>
                                    <div className={style.verticalLine}></div>
                                </div>
                                <div>
                                    <div className={style.cardHeader}>
                                        <div className={style.cardTitle}>
                                            <div className={style.cardTitleFirst}>Занурюйся</div>
                                            <div className={style.cardTitleSecond}>
                                                {' '}
                                                у світ цифрових <br /> можливостей
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <p className={style.subDescription1}>Отримуй переваги співпраці разом з</p>
                                        <p className={style.subDescription2}>VAASI INTERNATIONAL GROUP</p>
                                    </div>
                                    <VButton
                                        className={style.vButton}
                                        label="ОТРИМАТИ ПЕРЕВАГИ"
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
                                            height: '35px',
                                            maxWidth: '221px',
                                            transition: 'background 0.3s ease',
                                            zIndex: 20
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
