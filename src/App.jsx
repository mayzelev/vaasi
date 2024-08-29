import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import NaturalPersonPage from './pages/NaturalPersonPage/NaturalPersonPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/natural-persons" element={<NaturalPersonPage />} />
                <Route path="/legal-entities" element={<NaturalPersonPage />} />
                <Route path="*" element={<div>Element not found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
