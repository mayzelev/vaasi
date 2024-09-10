import shieldWithDollar from '../../assets/icons/shieldWithDollar.png';
import handWithCircle from '../../assets/icons/handWithCircle.png';
import descWithBitcoin from '../../assets/icons/descWithBitcoin.png';
import exchangeRate from '../../assets/icons/exchangeRate.png';
import PersonInfoSection from '../PersonInfoSection';
import backgroundImage from '../../assets/naturalPageImg/bcgIndividualInfo.png';

export const data = {
    header: 'Робота з фізичними особами',
    description:
        'Наша основна робота з фізичними особами це допомога у придбанні та обробці VAASI code. Ми пропонуємо послуги обробки VAASI code та технічну підтримку під час нашої взаємодії.',
    title: 'Ми пропонуємо консультативні послуги у наступних питаннях:',
    image: [
        {
            id: 1,
            text: 'shieldWithDollar',
            link: shieldWithDollar,
            description: 'Страхування валютних курсів'
        },
        {
            id: 2,
            text: 'handWithCircle',
            link: handWithCircle,
            description: 'Заощадження на обміні валюти'
        },
        {
            id: 3,
            text: 'descWithBitcoin',
            link: descWithBitcoin,
            description: 'Вивчення електронних фінансових інструментів'
        },
        {
            id: 4,
            text: 'exchangeRate',
            link: exchangeRate,
            description: 'Організація онлайн процесів для фізичних осіб, що допоможуть заощадити на конвертаціях валюти та її придбанні.'
        }
    ]
};

export default function NaturalInfoSection() {
    return <PersonInfoSection data={data} backgroundImage={backgroundImage} />;
}
