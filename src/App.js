// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Services/About';
import Contact from './components/Services/Contact';
import Footer from './components/Services/Footer';
import Navbar from './components/Services/Navbar';
import Services from './components/Services/Service';
import Feature from './components/Services/Feature';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Services/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/feature" element={<Feature/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
