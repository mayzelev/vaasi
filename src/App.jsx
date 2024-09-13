import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes.jsx';

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default App;
