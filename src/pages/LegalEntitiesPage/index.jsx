import PersonInfoSection from '../../components/PersonInfoSection';
import PersonMainSection from '../../components/PersonMainSection';
import PersonAttentionSection from '../../components/PersonAttentionSection';
import PersonOnlineConsultation from '../../components/PersonOnlineConsultation';

import backgroundImage from '../../assets/img/bcgLegalInfo.png';
import imgMain from '../../assets/img/moneyLegal.png';
import imgAttention from '../../assets/img/moneyLegalAttention.png';

import { mockDataLegalMain, mockDataLegalInfo, mockDataAttention, mockDataConsultation } from './mockData';

export default function LegalEntitiesPage() {
    return (
        <>
            <PersonMainSection data={mockDataLegalMain} imgMain={imgMain} tabIndex={0} />
            <PersonInfoSection data={mockDataLegalInfo} backgroundImage={backgroundImage} />
            <PersonAttentionSection data={mockDataAttention} imgAttention={imgAttention} />
            <PersonOnlineConsultation data={mockDataConsultation} />
        </>
    );
}
