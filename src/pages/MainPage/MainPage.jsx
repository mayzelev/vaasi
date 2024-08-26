import AttentionSection from '../../components/AttentionSection/AttentionSection';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import InfoSection from '../../components/InfroSection/InfoSection';
import MainSection from '../../components/MainSection/MainSection';

export default function MainPage() {
    return (
        <>
            <Header />
            <MainSection />
            <InfoSection />
            <AttentionSection />
            <Footer />
        </>
    );
}
