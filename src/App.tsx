import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import cat from './assets/cat.webp';
import dog from './assets/dog.webp';
import { Navbar } from './components/navbar';
import Nosotros from './Pages/Nosotros';
import Contactenos from './Pages/Contactenos';
import Adopta from './Pages/Adopta/Adopta';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1 className="h1">¡Bienvenido!</h1>
                <div className="columns-2">
                  <img src={dog} alt="Dog" className="h-80" />
                  <p className="text-balance">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <h1 className="h1">Adopta con nosotros</h1>
                <div className="columns-2">
                  <img src={cat} alt="Cat" className="h-80" />
                  <div>
                    <p className="text-balance">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <button
                      type="button"
                      className="mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      ¡Adopta ya!
                    </button>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contactenos />} />
          <Route path="/adopta" element={<Adopta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
