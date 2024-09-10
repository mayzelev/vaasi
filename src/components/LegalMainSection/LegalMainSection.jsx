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
                maxWidth: '268px'
            }}
            backgroundImage={backgroundImg}
        />
    );
}
