import Header from '../Header';
import RegistrationPopup from '../RegistrationForm';
import Footer from '../Footer';
import useAuthStore from '../../store/useAuthStore.js';
import AccountHeader from '../AccountHeader';
import LoginForm from '../Modals/LoginForm/index.jsx';

export default function DefaultLayout({ children }) {
    const { isAuthorized } = useAuthStore();

    return (
        <>
            {isAuthorized && <AccountHeader />}
            {!isAuthorized && <Header />}
            {children}
            <Footer />
            <RegistrationPopup />
            <LoginForm />
        </>
    );
}
