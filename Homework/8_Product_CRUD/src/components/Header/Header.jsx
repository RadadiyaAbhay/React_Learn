import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='bg-dark'>
        <Container>
          <Row className='align-items-center'>
            <h3 className='text-white col-2 fw-bold py-3 mb-0'>
              Vendee
            </h3>
            <nav className='col-10 align-items-center d-flex'>
              <ul className='align-items-center d-flex list-unstyled mb-0 gap-3'>
                <li>
                  <NavLink to="/" className='text-decoration-none text-white'>
                    Read
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/create" className='text-decoration-none text-white'>
                    Create
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin" className='text-decoration-none text-white'>
                    Admin
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
