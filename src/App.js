import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './context/UserContext';
import Header from "./Components/Header/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginPage";
import Request from "./pages/Request";
import Admin from "./pages/Admin";
import UserTable from "./Components/UserTable/UserTable";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/request" element={<Request />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/UserTable" element={<UserTable />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
