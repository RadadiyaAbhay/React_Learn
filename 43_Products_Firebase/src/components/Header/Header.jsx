import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { PersonCircle, Search } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='bg-dark py-2 d-flex align-items-center position-sticky top-0 z-2 border-bottom border-secondary border-2'>
                <h2 className='text-white fw-bold m-0 col-2 ps-4'>
                    <NavLink to={'/'} className='text-white fw-bold text-decoration-none'>
                        Admin
                    </NavLink>
                </h2>
                <div className="col-8 d-flex justify-content-center">
                    <div className='col-5'>
                    <InputGroup>
                        <Form.Control
                            placeholder="Search"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2"><Search/></InputGroup.Text>
                    </InputGroup>
                    </div>
                </div>
                <div className="col-2 text-end pe-4">
                    <PersonCircle className='text-white pe-1 fs-3 point'/>
                </div>
            </header>
        </>
    )
}

export default Header