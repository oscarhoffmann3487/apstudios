import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GDPRPolicy from "./pages/GDPRPolicy";
import Foto from "./pages/services/Foto";
import Film from "./pages/services/Film";
import Ytmodeller from "./pages/services/Ytmodeller";
import Modeller3D from "./pages/services/Modeller3D";
import Volymberakningar from "./pages/services/Volymberakningar";
import Inspektioner from "./pages/services/Inspektioner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gdpr" element={<GDPRPolicy />} />
        <Route path="/tjanster/foto" element={<Foto />} />
        <Route path="/tjanster/film" element={<Film />} />
        <Route path="/tjanster/ytmodeller" element={<Ytmodeller />} />
        <Route path="/tjanster/3d-modeller" element={<Modeller3D />} />
        <Route path="/tjanster/volymberakningar" element={<Volymberakningar />} />
        <Route path="/tjanster/inspektioner" element={<Inspektioner />} />
      </Routes>
    </Router>
  );
}

export default App;