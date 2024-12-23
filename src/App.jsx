import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';


function App() {
  const location = useLocation();
  console.log(location)
  return (
    <>
      {location.pathname != '/login' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
      {location.pathname != '/login' && <Footer />}
    </>
  )
}

export default App
