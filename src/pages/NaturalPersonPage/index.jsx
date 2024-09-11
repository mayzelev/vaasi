import PersonInfoSection from '../../components/PersonInfoSection';
import PersonMainSection from '../../components/PersonMainSection';

import backgroundImg from '../../assets/img/moneyTop.png';
import backgroundImage from '../../assets/img/bcgIndividualInfo.png';

import { mockDataNaturalInfo, mockDataNaturalMain } from './mockData';

export default function NaturalPersonPage() {
    return (
        <>
            <PersonMainSection data={mockDataNaturalMain} backgroundImage={backgroundImg} />
            <PersonInfoSection data={mockDataNaturalInfo} backgroundImage={backgroundImage} />
        </>
    );
}
