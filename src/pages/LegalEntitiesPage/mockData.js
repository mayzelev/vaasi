import shieldWithDollar from '../../assets/img/shieldWithDollar.png';
import handWithCircle from '../../assets/img/handWithCircle.png';
import descWithBitcoin from '../../assets/img/descWithBitcoin.png';
import exchangeRate from '../../assets/img/exchangeRate.png';
import girlImg from '../../assets/img/girlLegal.png';

export const mockDataLegalMain = {
    girlImgSrc: girlImg,
    mainTitle: 'МИ Єднаємо',
    subTitle: 'Реальний та цифровий світ у бізнесі',
    subDescription1: 'Відкрийте нові можливості для вашого бізнесу з',
    subDescription2: 'VAASI INTERNATIONAL GROUP',
    buttonLabel: 'ВІДКРИТИ МОЖЛИВОСТІ',
    buttonStyles: {
        maxWidth: '268px'
    }
};

export const mockDataLegalInfo = {
    header: 'Створення власного цифрового проекту',
    description: 'Скористайтеся нашими послугами та досвідом у створенні власного цифрового проекту вашого бізнесу.',
    title: 'Ми пропонуємо консультативні послуги у наступних питаннях:',
    image: [
        {
            id: 1,
            text: 'shieldWithDollar',
            link: shieldWithDollar,
            description: 'Інноваційний підхід для диджиталізації вашого бізнесу'
        },
        {
            id: 2,
            text: 'handWithCircle',
            link: handWithCircle,
            description: ' Розробка персонального цифрового проєкту вашого підприємства'
        },
        {
            id: 3,
            text: 'descWithBitcoin',
            link: descWithBitcoin,
            description: 'Економічна підтримка вашого реального бізнесу'
        },
        {
            id: 4,
            text: 'exchangeRate',
            link: exchangeRate,
            description: 'Стратегічне планування співпраці на довгостроковій основі'
        }
    ]
};
