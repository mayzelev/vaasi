import AttentionSection from '../../components/attentionSection/AttentionSection';
import Header from '../../components/Header/Header';
import InfoSection from '../../components/InfroSection/InfoSection';
import MainSection from '../../components/MainSection/MainSection';

export default function MainPage() {
  return (
    <>
      <Header />
      <MainSection />
      <InfoSection />
      <AttentionSection/>
    </>
  )
}
