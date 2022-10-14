import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GiHamburger } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { logout, user } = useContext(UserContext);
  // const user = localStorage.getItem("user");
  // const logout = () => {
  //   localStorage.clear();
  // };
  return (
    <Navbar className="bg-yellow header-height" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="">
          <GiHamburger className="bg-yellow text-darkred logo-height" />{" "}
          BURGERCODE
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-light bg-yellow text-darkred"
        >
          <FaHamburger className="bg-darkred logo-toggle" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex text-right">
            {user ? (
              <>
                {user.role === "ADMIN" ? (
                  <Link
                    to="/admin"
                    className="text-darkred pagina-text nav-link"
                  >
                    Administración
                  </Link>
                ) : null}
                <Link
                  to="/request"
                  className="text-darkred pagina-text nav-link"
                >
                  Pedidos
                </Link>
                <Link
                  to="/"
                  onClick={logout}
                  className="text-darkred pagina-text nav-link"
                >
                  Cerrar Sesión
                </Link>
              </>
            ) : (
              <Link to="/login" className="text-darkred pagina-text nav-link">
                Quiero mi burger
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
