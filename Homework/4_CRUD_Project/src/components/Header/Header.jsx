import React from 'react'
import { Container,  Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='bg-dark'>
            <Container className='py-3'>
                <Row>
                    <div className="col-2">
                        <h3 className='text-white m-0 fw-semibold' style={{fontFamily:'cursive'}}>
                            CRUD
                        </h3>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                        <ul className='m-0 d-flex list-unstyled gap-3'>
                            <li>
                                <NavLink to="/" className='text-white text-decoration-none'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/view" className='text-white text-decoration-none'>View</NavLink>
                            </li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
