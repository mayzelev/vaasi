import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/Layout/DefaultLayout';
import NaturalPersonPage from './pages/NaturalPersonPage';
import LegalEntitiesPage from './pages/LegalEntitiesPage/index.jsx';
import MainPage from './pages/MainPage/index.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <MainPage />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/natural-persons"
                    element={
                        <DefaultLayout>
                            <NaturalPersonPage />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/legal-entities"
                    element={
                        <DefaultLayout>
                            <LegalEntitiesPage />
                        </DefaultLayout>
                    }
                />
                <Route path="*" element={<div>Element not found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
