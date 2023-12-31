import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className=" bg-dark">
      <Container>
        <Navbar.Brand>
            <NavLink to={"/"} className="text-white    text-decoration-none fw-bold">
                I...Attendance
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent : 'end'}}>
          <Nav>
            <NavLink className=" fw-semibold btn btn-outline-light text-decoration-none fw-normal px-2" to={'/create'}>Create Employee</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;