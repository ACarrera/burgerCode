import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Header from "./Components/Header/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Request from "./pages/Request";
import Error from "./pages/error";
import Admin from "./pages/Admin";
import AdminRequest from "./pages/AdminRequest";
import AdminMenu from "./pages/AdminMenu";
import AdminUsers from "./pages/AdminUsers";

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
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/menus" element={<AdminMenu />} />
          <Route path="/orders" element={<AdminRequest />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
