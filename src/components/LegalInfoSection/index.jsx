import shieldWithDollar from '../../assets/icons/shieldWithDollar.png';
import handWithCircle from '../../assets/icons/handWithCircle.png';
import descWithBitcoin from '../../assets/icons/descWithBitcoin.png';
import exchangeRate from '../../assets/icons/exchangeRate.png';
import PersonInfoSection from '../PersonInfoSection';
import backgroundImage from '../../assets/naturalPageImg/bcgLegalInfo.png';

export const data = {
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

export default function LegalInfoSection() {
    return <PersonInfoSection data={data} backgroundImage={backgroundImage} />;
}
