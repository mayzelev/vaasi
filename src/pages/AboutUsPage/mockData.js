import messageIconAbout from '../../assets/icons/messageIconAbout.png';
import contractIconAbout from '../../assets/icons/contractIconAbout.png';
import windowIconAbout from '../../assets/icons/windowIconAbout.png';
import supportIconAbout from '../../assets/icons/supportIconAbout.png';
import moneyBaner from '../../assets/img/moneyBaner.png';

export const mockDataAboutMain = {
    mainTitle: 'Про нас',
    subTitle: 'VAASI INTERNATIONAL GROUP',
    subDescription3:
        'VAASI INTERNATIONAL GROUP - інтернет портал,  який створений для надання доступу у електронний світ, як фізичним так і юридичним особам за допомогою індивідуальних цифрових токенів.'
};

export const mockDataAboutInfo = {
    header: 'Наші кроки співпраці',
    description: 'Скористайтеся нашими послугами та досвідом у створенні власного цифрового проекту вашого бізнесу.',
    title: 'Ми пропонуємо консультативні послуги у наступних питаннях:',
    image: [
        {
            id: 1,
            text: 'messageIconAbout',
            link: messageIconAbout,
            description: 'Обговорюємо ваше питання'
        },
        {
            id: 2,
            text: 'contractIconAbout',
            link: contractIconAbout,
            description: 'Розробляємо стратегію співпраці'
        },
        {
            id: 3,
            text: 'windowIconAbout',
            link: windowIconAbout,
            description: 'Створюємо цифровий проект'
        },
        {
            id: 4,
            text: 'supportIconAbout',
            link: supportIconAbout,
            description: 'Технічний супровід проекту до кінця нашої співпраці'
        }
    ]
};

export const mockDataAboutAttention = {
    header: 'НАША МЕТА',
    description1: 'Наша мета полягає в',
    description2: 'поєднанні реального сектору ведення бізнесу  з цифровим світом,',
    description3:
        'що являє собою оцифрування діяльності підприємства  будь якої форми власності та розробці проекту який в подальшому буде представляти ваше підприємство у електронно- цифровому середовищі та дасть змогу залучати додаткові  інвестиції.',
    description4: 'Поки ви займаєтесь бізнесом у реальному світі ми працюємо з вашим  підприємством у цифровому світі.',
    description5:
        'Ми єднаємо реальний світ бізнесу з електронним завдяки створенню цифрового проекту вашої діяльності та наданням технічного супроводу та інформаційно консультаційних послуг,  які стосуються подальшої співпраці. Також ми допомагаємо в опрацюванні та технічній підтримці VAASI code для фізичних осіб.',
    baner: {
        header1: 'Підключення',
        header2: 'та користування сайтом',
        description: 'для фізичних та юридичних осіб платне.',
        img: {
            alt: 'money',
            src: moneyBaner
        }
    }
};

export const mockDataAboutConsultation = {
    header: 'Замовити онлайн консультацію',
    description:
        'З вами звяжуться наші адміністратори, або залиште ваше питання і ми надамо відповідь після його опрацювання шляхом направлення листа на вашу електронну скриньку.'
};
