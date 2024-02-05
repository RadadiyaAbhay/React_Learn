import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='bg-dark py-3'>
                <Container>
                    <Row>
                        <div className="col-2 d-flex align-items-center">
                            <h4 className='text-white m-0 fw-bold'>
                                <NavLink to={'/'} className="text-white text-decoration-none">
                                    CRUD
                                </NavLink>
                            </h4>
                        </div>
                        <div className="col-8">
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                                    <NavLink to="/create" className='px-2 text-decoration-none'>
                                        <Button variant='outline-light'>
                                            Create Student
                                        </Button>
                                    </NavLink>
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header
