import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { GiHamburger, } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';



const Header = () => {
  const user = localStorage.getItem('user');
  const logout = () => {
    localStorage.clear();
  }
  return (
    <Navbar className='bg-yellow' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='logo-text navbar-height'><GiHamburger className='bg-yellow text-darkred logo-height' />  BURGERCODE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-light bg-yellow text-darkred'>
          <FaHamburger className='bg-darkred logo-toggle' />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {
              user?
            <>
            <Link to="/" className='text-darkred pagina-text nav-link'>Home</Link>
            <Link to="/" onClick={logout} className='text-darkred pagina-text nav-link'>Cerrar Sesión</Link>
            </>
                :
                <Link to="/login" className='text-darkred pagina-text nav-link'>Ingresar</Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;