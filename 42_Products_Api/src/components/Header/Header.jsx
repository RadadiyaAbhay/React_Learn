import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { JustifyLeft, Search } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        const sidebar = document.getElementById('sidebar');
        const header = document.getElementById('header');
        const elogo = document.getElementById('elogo');

        if (show == true) {
            sidebar.classList.remove('d-none')
            header.classList.remove('col-12')
            elogo.classList.add('d-none')
            setShow(false);
        } else {
            sidebar.classList.add('d-none')
            header.classList.add('col-12')
            elogo.classList.remove('d-none')

            setShow(true);
        }
    }
    return (
        <>
            <header className='bg-warning bg-gradient py-1 d-flex align-items-center justify-content-between px-4'>
                <h3 className='py-2 h-10 mb-0 d-flex align-items-center'>
                    <a className='text-black fw-bold text-decoration-none' onClick={handleToggle} to={"/"}><JustifyLeft /></a>
                    <NavLink className='text-black fw-bold ps-3 d-none text-decoration-none' id='elogo' to={"/"}>I...Admin</NavLink>
                </h3>
                <div>
                <InputGroup>
                    <Form.Control
                        placeholder="Search here..."
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-dark" id="button-addon2">
                        <Search/>
                    </Button>
                </InputGroup>
                </div>
            </header>
        </>
    )
}

export default Header