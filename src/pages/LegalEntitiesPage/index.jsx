import PersonInfoSection from '../../components/PersonInfoSection';
import PersonMainSection from '../../components/PersonMainSection';

import backgroundImage from '../../assets/img/bcgLegalInfo.png';
import backgroundImg from '../../assets/img/moneyLegal.png';

import { mockDataLegalMain, mockDataLegalInfo } from './mockData';

export default function LegalEntitiesPage() {
    return (
        <>
            <PersonMainSection data={mockDataLegalMain} backgroundImage={backgroundImg} />
            <PersonInfoSection data={mockDataLegalInfo} backgroundImage={backgroundImage} />
        </>
    );
}
