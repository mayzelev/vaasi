import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes.jsx';
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { SessionExpiredModal } from './components/Modals/SessionExpiredModal/index.jsx';

const App = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <SessionExpiredModal />
                <AppRoutes />
            </Router>
        </I18nextProvider>
    );
};

export default App;
