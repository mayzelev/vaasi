import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage/MainPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                {/* <Route path="/path" element={<Some element />} /> */}
                <Route path="*" element={<div>Element not found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
