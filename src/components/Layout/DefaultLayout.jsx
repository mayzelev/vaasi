import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegistrationPopup from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';

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
