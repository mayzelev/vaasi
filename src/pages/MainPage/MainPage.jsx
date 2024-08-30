import Header from '../../components/Header/Header.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import InfoSection from './components/InfoSection/InfoSection.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import AttentionSection from './components/AttentionSection/AttentionSection.jsx';
import RegistrationPopup from './components/RegistrationForm/RegistrationForm.jsx';

export default function MainPage() {
    return (
        <>
            <Header />
            <MainSection />
            <InfoSection />
            <AttentionSection />
            <Footer />
            <RegistrationPopup />
        </>
    );
}
