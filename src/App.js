
import Gear from './components/Gear';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Weapons from "./components/Weapons";
function App() {
  return (
      <BrowserRouter>
          <header>
              <Link to="/">Monster Gear</Link>
              <nav>
                  <Link to="/gear">Gear</Link>
                  <Link to="/Weapon">Weapons</Link>
              </nav>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gear" element={<Gear />} />
                  <Route path="/weapons" element={<Weapons />} />
              </Routes>
          </header>
      </BrowserRouter>
  );
}

export default App;
