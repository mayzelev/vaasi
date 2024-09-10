import React from 'react';
import PersonMainSection from '../PersonMainSection/PersonMainSection';
import girlImg from '../../assets/naturalPageImg/girl.png';
import backgroundImg from '../../assets/naturalPageImg/moneyTop.png'

export default function NaturalPersonMainSection() {
    return (
        <PersonMainSection
            girlImgSrc={girlImg}
            mainTitle="Занурюйся"
            subTitle="у світ цифрових можливостей"
            subDescription1="Отримуй переваги співпраці разом з"
            subDescription2="VAASI INTERNATIONAL GROUP"
            buttonLabel="ОТРИМАТИ ПЕРЕВАГИ"
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
            backgroundImage={backgroundImg}
        />
    );
}
