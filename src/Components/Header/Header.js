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
        <Navbar.Brand href="#" onClick={backToStart} className="p-0 m-0 d-flex align-items-center">
          <GiHamburger className="bg-yellow text-darkred logo-height p-0 m-0" />
          <div className="ps-1 d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg>
</div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
