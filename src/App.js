import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Request from "./pages/Request";
import Admin from "./pages/Admin";
import UserTable from "./Components/UserTable/UserTable";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<Request />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/UserTable" element={<UserTable />} />
      </Routes>
    </Router>
  );
}

export default App;
