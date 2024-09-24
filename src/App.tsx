import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import Adopta from './Pages/Adopta/Adopta';
import Contactenos from './Pages/Contactenos';
import Home from './Pages/Home/Home';
import Nosotros from './Pages/Nosotros';
import Servicios from './Pages/Servicios';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contactenos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/adopta" element={<Adopta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
