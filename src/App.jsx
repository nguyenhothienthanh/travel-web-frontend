import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import DetailsPage from './pages/DetailsPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserProfile from './pages/UserProfilePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App
