import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from './context/UserContext';
import Header from "./Components/Header/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Request from "./pages/Request";
import PrivateRoute from "./routes/PrivateRoute";
import Admin from "./pages/Admin";
import UserTable from "./Components/UserTable/UserTable";
import menu from "./pages/menu";

function App() {
  return (
    <Router>
      <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/requests"
            element={
              <PrivateRoute>
                <Request />
              </PrivateRoute>
            }
          />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/UserTable" element={<UserTable />} />
        <Route path="/menu" element={<menu />} />
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
