import girlImg from '../../assets/naturalPageImg/girl.png';
import backgroundImg from '../../assets/naturalPageImg/moneyTop.png';
import PersonMainSection from '../PersonMainSection';

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
                maxWidth: '221px'
            }}
            backgroundImage={backgroundImg}
        />
    );
}
