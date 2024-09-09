import React from 'react';
import PersonMainSection from '../PersonMainSection/PersonMainSection';
import girlImg from '../../assets/naturalPageImg/girlLegal.png';
import backgroundImg from '../../assets/naturalPageImg/moneyLegal.png';

export default function LegalMainSection() {
    return (
        <PersonMainSection
            girlImgSrc={girlImg}
            mainTitle="МИ Єднаємо"
            subTitle="Реальний та цифровий світ у бізнесі"
            subDescription1="Відкрийте нові можливості для вашого бізнесу з"
            subDescription2="VAASI INTERNATIONAL GROUP"
            buttonLabel="ВІДКРИТИ МОЖЛИВОСТІ"
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
                maxWidth: '268px',
                transition: 'background 0.3s ease',
                zIndex: 20
            }}
            backgroundImage={backgroundImg}
        />
    );
}
