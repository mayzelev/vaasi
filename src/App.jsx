import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import NaturalPersonPage from './pages/NaturalPersonPage/NaturalPersonPage';
import DefaultLayout from './components/Layout/DefaultLayout';

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
                            <NaturalPersonPage />
                        </DefaultLayout>
                    }
                />
                <Route path="*" element={<div>Element not found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
