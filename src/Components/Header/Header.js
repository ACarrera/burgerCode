import "./Header.css";
import { Navbar, Container } from "react-bootstrap";
import { GiHamburger } from "react-icons/gi";

const Header = () => {
  const backToStart = () => {
    if (window.confirm('¿Estás seguro que querés volver a la página principal?')) {
      window.location.href = "/"
    }
  }

  return (
    <Navbar className="bg-yellow header-height" expand="lg">
      <Container>
        <Navbar.Brand href="#" onClick={backToStart}>
          <GiHamburger className="bg-yellow text-darkred logo-height" />
          BURGERCODE
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
