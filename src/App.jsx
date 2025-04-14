import React, {useRef} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar/Navbar'
import WelcomeHeader from './components/WelcomeHeader/WelcomeHeader'
import WelcomeBody from './components/WelcomeBody/WelcomeBody'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'


const App = () => {
  const headerRef = useRef(null);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </Router>
    
  )
}

export default App