import PersonMainSection from '../../components/PersonMainSection';
import imgMain from '../../assets/img/moneyLegal.png';
import backgroundImage from '../../assets/img/bcgAboutInfo.png';

import { mockDataAboutMain, mockDataAboutConsultation, mockDataAboutAttention, mockDataAboutInfo } from './mockData';
import PersonOnlineConsultation from '../../components/PersonOnlineConsultation';
import PersonInfoSection from '../../components/PersonInfoSection';
import AboutUsAttentionSection from './AboutUsAttentionSection';

export default function AboutUsPage() {
    return (
        <>
            <PersonMainSection data={mockDataAboutMain} imgMain={imgMain} showButton={false} />
            <PersonInfoSection data={mockDataAboutInfo} backgroundImage={backgroundImage} />
            <AboutUsAttentionSection data={mockDataAboutAttention} />
            <PersonOnlineConsultation data={mockDataAboutConsultation} />
        </>
    );
}
