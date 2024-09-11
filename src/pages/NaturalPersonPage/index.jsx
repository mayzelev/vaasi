import PersonInfoSection from '../../components/PersonInfoSection';
import PersonMainSection from '../../components/PersonMainSection';

import img from '../../assets/img/moneyTop.png';
import backgroundImage from '../../assets/img/bcgIndividualInfo.png';

import { mockDataNaturalInfo, mockDataNaturalMain } from './mockData';

export default function NaturalPersonPage() {
    return (
        <>
            <PersonMainSection data={mockDataNaturalMain} img={img} tabIndex={1} />
            <PersonInfoSection data={mockDataNaturalInfo} backgroundImage={backgroundImage} />
        </>
    );
}
