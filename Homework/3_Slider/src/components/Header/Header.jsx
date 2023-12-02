import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='bg-dark px-5 py-3'>
        <Container >
            <Row>
                <div className="col-2">
                    <h3 className='text-white m-0'>
                        Slider
                    </h3>
                </div>
                <div className="col-8 align-items-center d-flex">
                    <ul className='m-0'>
                        <li className="align-items-center d-flex">

                            <NavLink to="/" className="text-white text-decoration-none px-3">
                                Home
                            </NavLink>
                            <NavLink to="/slider2" className="text-white text-decoration-none px-3">
                                Slider
                            </NavLink>
                            <NavLink to="/slick" className="text-white text-decoration-none px-3">
                                Slick
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-2">
                    icon
                </div>
            </Row>
        </Container>
      </header>
    </>
  )
}

export default Header;
