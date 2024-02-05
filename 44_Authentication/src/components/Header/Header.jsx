import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOutAction } from '../../services/actions/authentication.action';

function Header() {
  const { isLogin } = useSelector(state => state.authenticationReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSignOut = () => {
    dispatch(signOutAction())
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className="fs-4 fw-bold text-decoration-none pe-5 text-black" to={"/dashboard"}>Authentication</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLogin ?
             (
            <>
              <NavLink className="text-black text-decoration-none p-2" to={"/signup"}>Sign Up</NavLink>
              <NavLink className="text-black text-decoration-none p-2" to={"/signin"}>Sign In</NavLink>
            </>
            )
            :
             (
            <NavLink className="text-black text-decoration-none p-2" onClick={handleSignOut}>Sign Out</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header