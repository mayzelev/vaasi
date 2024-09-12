import PersonInfoSection from '../../components/PersonInfoSection';
import PersonMainSection from '../../components/PersonMainSection';
import PersonAttentionSection from '../../components/PersonAttentionSection';
import PersonOnlineConsultation from '../../components/PersonOnlineConsultation';

import imgMain from '../../assets/img/moneyTop.png';
import backgroundImage from '../../assets/img/bcgIndividualInfo.png';
import imgAttention from '../../assets/img/moneyNaturalAttention.png';

import { mockDataNaturalInfo, mockDataNaturalMain, mockDataAttention, mockDataConsultation } from './mockData';

export default function NaturalPersonPage() {
    return (
        <>
            <PersonMainSection data={mockDataNaturalMain} imgMain={imgMain} tabIndex={1} />
            <PersonInfoSection data={mockDataNaturalInfo} backgroundImage={backgroundImage} />
            <PersonAttentionSection data={mockDataAttention} imgAttention={imgAttention} />
            <PersonOnlineConsultation data={mockDataConsultation} />
        </>
    );
}
