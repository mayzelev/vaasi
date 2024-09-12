import PersonInfoSection from '../../components/PersonInfoSection';
import PersonMainSection from '../../components/PersonMainSection';

import backgroundImage from '../../assets/img/bcgLegalInfo.png';
import img from '../../assets/img/moneyLegal.png';

import { mockDataLegalMain, mockDataLegalInfo } from './mockData';

export default function LegalEntitiesPage() {
    return (
        <>
            <PersonMainSection data={mockDataLegalMain} img={img} tabIndex={0} />
            <PersonInfoSection data={mockDataLegalInfo} backgroundImage={backgroundImage} />
        </>
    );
}
