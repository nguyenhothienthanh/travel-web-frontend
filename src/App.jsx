import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import DetailsPage from './pages/DetailsPage';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App
