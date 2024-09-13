import PersonMainSection from '../../components/PersonMainSection';
import imgMain from '../../assets/img/moneyLegal.png';

import { mockDataAboutMain } from './mockData';

export default function AboutUsPage() {
    return (
        <>
            <PersonMainSection data={mockDataAboutMain} imgMain={imgMain} />
        </>
    );
}
