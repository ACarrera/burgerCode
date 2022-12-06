import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Header from "./Components/Header/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Request from "./pages/Request";
// import PrivateRoute from "./routes/PrivateRoute";
import Admin from "./pages/Admin";
import AdminRequest from "./pages/AdminRequest";
import UserTable from "./Components/UserTable/UserTable";
import Menu from "./pages/Menu";
// import { GiHamburger } from "react-icons/gi";

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/request" element={<Request />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/UserTable" element={<UserTable />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/addorders" element={<AdminRequest />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
