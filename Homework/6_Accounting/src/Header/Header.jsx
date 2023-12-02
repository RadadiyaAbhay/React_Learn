import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='bg-dark'>
        <Container>
            <Row>
                <div className="col-12 d-flex justify-content-center py-2">
                  <ul className='col-12 d-flex justify-content-center list-unstyled m-0'>
                    <li><NavLink to={"/purchase"} className='text-white text-decoration-none px-2'>Purchase</NavLink></li>
                    <li><NavLink to={"/sale"} className='text-white text-decoration-none px-2'>Sale</NavLink></li>
                    <li><NavLink to={"/payment"} className='text-white text-decoration-none px-2'>Payment</NavLink></li>
                    <li><NavLink to={"/receipt"} className='text-white text-decoration-none px-2'>Receipt</NavLink></li>
                  </ul>
                </div>
            </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
