import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import PedidosPage from "./pages/PedidosPage";
import AdministracionUsuarios from "./pages/AdministracionUsuarios";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/usuarios" element={<AdministracionUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
