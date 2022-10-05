import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './context/UserContext';
import Header from "./Components/Header/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Request from "./pages/Request";
import Admin from "./pages/Admin";
import UserTable from "./Components/UserTable/UserTable";

function App() {
  return (
    <Router>
      <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/request" element={<Request />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/UserTable" element={<UserTable />} />
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
