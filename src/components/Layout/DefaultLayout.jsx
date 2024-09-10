import Header from '../Header';
import RegistrationPopup from '../RegistrationForm';
import LoginForm from '../LoginForm';
import Footer from '../Footer';

export default function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <RegistrationPopup />
            <LoginForm />
        </>
    );
}
