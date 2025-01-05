import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GDPRPolicy from "./pages/GDPRPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gdpr" element={<GDPRPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
