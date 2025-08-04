import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SearchBar from './components/home/SearchBar'
import TopCategory from './components/home/TopCategory'
import TravelCard from './components/home/TravelCard/TravelCard'
import Footer from './components/layout/Footer'
import Header from './components/layout/header'
import DetailsPage from './pages/DetailsPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import UserProfile from './pages/UserProfilePage'

// Trang chủ
function HomePage() {
  return (
    <>
      <Header />
      <SearchBar />
      <TopCategory />
      <TravelCard />
      <Footer />
    </>
  )
}

function App() {
  return (
    // <DetailsPage />
    <Router>
      <Routes>
        <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:destinationName" element={<DetailsPage />} />
        <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
    </Router>
  )
}

export default App
