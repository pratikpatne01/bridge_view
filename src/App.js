import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Services";
import Pagenotfound from "./pages/Pagenotfound";
import Shipmanagement from "./pages/Shipmanagement";
import Shipowning from "./pages/Shipowning";
import Shipchantering from "./pages/Shipchantering";
import Crewmanagement from "./pages/Crewmanagement";
import Visionmission from "./pages/Visionmission";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visionmission" element={<Visionmission />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shipmanagement" element={<Shipmanagement/>} />
          <Route path="/shipowning" element={<Shipowning/>} />
          <Route path="/shipchantering" element={<Shipchantering/>} />
          <Route path="/Crewmanagement" element={< Crewmanagement/>} />


          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
