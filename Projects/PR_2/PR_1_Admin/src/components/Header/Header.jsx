import React, { useState } from 'react'
import { Button, Dropdown, Form, InputGroup, Offcanvas } from 'react-bootstrap'
import { PersonCircle, Search } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOutAction } from '../../services/actions/admin.action'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaChartPie, FaShoppingCart, FaSitemap } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { MdOutlineSocialDistance } from "react-icons/md";
import { CaretRightFill } from 'react-bootstrap-icons'


function Header() {
    const menu = [{
        listname: 'Home',
        listicon: <FaChartPie className="me-2 fs-18 " />,
        listarr: [{ sublistname: 'Ecommerce', to: '/dashboard', sublistarr: [] },
        { sublistname: 'CRM', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Reports', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Social Feed', to: '/dashboard', sublistarr: [] }]
    },
    {
        listname: 'Ecommerce',
        listicon: <FaShoppingCart className="me-2 fs-18 fw-bold" />,
        listarr: [{ sublistname: 'Admin', sublistarr: [{ linkname: 'Add Product', linkpath: '/createproduct' }, { linkname: 'Products', linkpath: '/products' }] },
        { sublistname: 'User', sublistarr: [{ linkname: 'Users', linkpath: '/users' }, { linkname: 'Subscribe', linkpath: '/users' }] },
        { sublistname: 'Order', sublistarr: [{ linkname: 'Orders', linkpath: '/dashboard' }, { linkname: 'Orders details', linkpath: '/dashboard' }, { linkname: 'Refund', linkpath: '/dashboard' }] }]
    },
    {
        listname: 'CRM',
        listicon: <BsTelephoneFill className="me-2 fs-18 fw-bold" />,
        listarr: [{ sublistname: 'Analytics', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Deals', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Deal Details', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Leads', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Lead Details', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Reports', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Report Details', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Add Contact', to: '/dashboard', sublistarr: [] }]
    },
    {
        listname: 'Reports',
        listicon: <FaSquarePollHorizontal className="me-2 fs-18 " />,
        listarr: [{ sublistname: 'Revenue', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Return', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Profit', to: '/dashboard', sublistarr: [] }]
    },
    {
        listname: 'Social Feed',
        listicon: <MdOutlineSocialDistance className="me-2 fs-18 " />,
        listarr: [{ sublistname: 'Instagram', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Facebook', to: '/dashboard', sublistarr: [] },
        { sublistname: 'Tiktok', to: '/dashboard', sublistarr: [] }]
    },
    {
        listname: 'Site Management',
        listicon: <FaSitemap className="me-2 fs-18 fw-bold" />,
        listarr: [{ sublistname: 'HomePage', to: '/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
        { sublistname: 'Product Detail', to: '/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
        { sublistname: 'Cart', to: '/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
        { sublistname: 'Checkout', to: '/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
        { sublistname: 'Profile', to: '/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
        { sublistname: 'Order Tracking', to: '/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] },
        { sublistname: 'Invoice', to: '/dashboard', sublistarr: [{ linkname: 'Site 1', linkpath: '/dashboard' }, { linkname: 'Site 2', linkpath: '/dashboard' }] }]
    }]
    let nextid = ' ';
    const handleDrop = (i) => {
        const showDrop = document.getElementById(`showDrop${i}`);
        const rot = document.getElementById(`rot${i}`);
        const oldid = nextid
        if (nextid == ' ') {
            showDrop.classList.remove('d-none')
            rot.classList.remove('rot1')
            rot.classList.add('rot2')
            nextid = i
        } else if (nextid == i) {
            showDrop.classList.add('d-none')
            rot.classList.add('rot1')
            rot.classList.remove('rot2')
            nextid = ' '
        } else if (nextid != i) {
            showDrop.classList.remove('d-none')
            rot.classList.remove('rot1')
            rot.classList.add('rot2')
            nextid = i
        }

        if (oldid != ' ' && oldid != i) {
            const showDrop = document.getElementById(`showDrop${oldid}`);
            const rot = document.getElementById(`rot${oldid}`);
            showDrop.classList.add('d-none')
            rot.classList.add('rot1')
            rot.classList.remove('rot2')
        }

    }
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () =>{
        console.log(show);
        if(show){
            setShow(false)
        }else{
            setShow(true)
        }
    };

    const dispatch = useDispatch()
    const handleSignOut = async () => {
        await dispatch(signOutAction())
        navigate('/dashboard');
    }
    return (
        <>
            <header className='bg-dark py-2 d-flex align-items-center position-sticky top-0 border-bottom border-secondary border-2'>
                <div className="col-1 d-lg-none">

                    <Button variant="primary" className="d-lg-none btn btn-dark" onClick={handleShow}>
                        <HiOutlineBars3BottomLeft className='text-white fw-bold fs-3 pe-1' />
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} responsive="lg" className="d-lg-none zin">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='pt-0'>
                            <div className="col-12 bg-white overflow-auto scroll-line font1 ps-3 ">
                                <ul className='list-unstyled'>
                                    {menu.map((a, i) => {
                                        return (
                                            <div key={i} className='pt-4'>
                                                <li className='text-black d-flex align-items-center'>{a.listicon} {a.listname}</li>
                                                {
                                                    a.listarr.map((b, k) => {
                                                        return (
                                                            <ul className='list-unstyled pt-1' key={k}>

                                                                {
                                                                    b.sublistarr.length != 0 ? (<li className='text-black ps-4 ms-2 pt-1 d-flex align-items-center point' onClick={() => { handleDrop(i + "0" + '' + k) }}><CaretRightFill className='fs-12 fw-bold me-2' id={'rot' + i + '0'+ k} />{b.sublistname}</li>) : (<li className='text-black ps-4 ms-2 pt-1 d-flex align-items-center point'><NavLink to={b.to} className='text-black text-decoration-none'>{b.sublistname}</NavLink> </li>)
                                                                }

                                                                <ul className='list-unstyled pt-1 d-none' id={'showDrop' + i + '0' + k}>
                                                                    {
                                                                        b.sublistarr.map((c, m) => {
                                                                            return (
                                                                                <li className='text-black ps-5 ms-3 pt-1 d-flex align-items-center' key={m}><NavLink to={c.linkpath}
                                                                                onClick={handleClose} className='text-black text-decoration-none'>{c.linkname}</NavLink></li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <h2 className='text-white fw-bold m-0 col-9 col-lg-2 ps-4'>
                    <NavLink to={'/dashboard'} className='text-white fw-bold text-decoration-none'>
                        Admin
                    </NavLink>
                </h2>
                <div className="col-lg-8 d-none d-lg-flex justify-content-center">
                    <div className='col-5'>
                        <InputGroup>
                            <Form.Control
                                placeholder="Search"
                                aria-label="Enter Search here"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2"><Search /></InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center text-end pe-4">
                    <Dropdown>
                        <Dropdown.Toggle variant='dark' className='bg-transparent d-flex align-items-center justify-content-center border-0 p-0'>
                            <PersonCircle className='text-white pe-1 fs-3 point' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant='dark' className='z-1'>
                            <Dropdown.Item href="#" className='btn-dark btn'>Your Profile</Dropdown.Item>
                            <Dropdown.Item onClick={() => { handleEdit(product.id) }} className='pb-2 btn-dark btn'>Settings</Dropdown.Item>
                            <Dropdown.Item onClick={handleSignOut} className='border-top text-danger border-danger btn-dark btn'>Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </header>
        </>
    )
}

export default Header