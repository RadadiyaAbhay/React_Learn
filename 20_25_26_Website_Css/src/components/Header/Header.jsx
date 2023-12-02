import React from 'react';
import Logo from "../../assets/logo-white.png";
import I1 from "../../assets/1.jpg";
import I2 from "../../assets/2.jpg";
import I3 from "../../assets/3.jpg";
import I4 from "../../assets/4.jpg";
import I5 from "../../assets/5.jpg";
import I6 from "../../assets/6.jpg";
import I7 from "../../assets/7.jpg";
import I8 from "../../assets/8.jpg";
import I9 from "../../assets/9.jpg";
import I10 from "../../assets/10.jpg";
import I11 from "../../assets/11.jpg";
import I12 from "../../assets/12.jpg";
import I13 from "../../assets/13.jpg";
import I14 from "../../assets/14.jpg";
import I15 from "../../assets/15.jpg";
import I16 from "../../assets/16.jpg";
import I17 from "../../assets/17.jpg";
import I18 from "../../assets/18.jpg";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div id="topp"></div>
            <header className="position-absolute w-100 z-3 pb-2	" >
                <div className="container position-relative">
                    <div className="row align-items-center  pt-lg-3 pt-3 pt-sm-3 pt-md-3 pt-xl-4" >
                        <div className="logo col-5 justify-content-center d-flex col-sm-5 col-md-4 col-lg-3 col-xl-2" >
                            <img src={Logo} alt="logo" />
                        </div>
                        <nav className="col d-none col-lg-7 d-lg-block">
                            <ul className="d-flex justify-content-center m-0">
                                <li className="list-unstyled mega-drop ">
                                    <NavLink to={"/"} className="text-decoration-none text-primary mx-3 fw-semibold " >
                                        Home
                                        <i className="ps-1 bi bi-chevron-down"></i>
                                    </NavLink>
                                    <div className="mega-dropdown position-absolute d-flex flex-wrap rounded">
                                        <div className="d-flex flex-wrap col-12 justify-content-around px-5 pt-5 pb-3">
                                            <div className="menu-1 col-2 ">
                                                <img src={I1} className="rounded img-fluid" alt="h1" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I2} className="rounded img-fluid" alt="h2" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I3} className="rounded img-fluid" alt="h3" />
                                            </div>
                                            <div className="menu-1 col-2" >
                                                <img src={I4} className="rounded img-fluid" alt="h4" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I5} className="rounded img-fluid" alt="h5" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap col-12 justify-content-around px-5 pt-1 pb-3">
                                            <div className="menu-1 col-2">
                                                <img src={I6} className="rounded img-fluid" alt="h6" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I7} className="rounded img-fluid" alt="h1" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I8} className="rounded img-fluid" alt="h2" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I9} className="rounded img-fluid" alt="h3" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I10} className="rounded img-fluid" alt="h4" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap col-12 justify-content-around px-5 pt-1 pb-5">
                                            <div className="menu-1 col-2">
                                                <img src={I11} className="rounded img-fluid" alt="h6" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I12} className="rounded img-fluid" alt="h1" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I13} className="rounded img-fluid" alt="h2" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I14} className="rounded img-fluid" alt="h3" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I15} className="rounded img-fluid" alt="h4" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap col-12 justify-content-around px-5 pt-1 pb-5">
                                            <div className="menu-1 col-2">
                                                <img src={I16} className="rounded img-fluid" alt="h6" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I17} className="rounded img-fluid" alt="h1" />
                                            </div>
                                            <div className="menu-1 col-2">
                                                <img src={I18} className="rounded img-fluid" alt="h2" />
                                            </div>
                                            <div className="menu-1 col-2">

                                            </div>
                                            <div className="menu-1 col-2">

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-unstyled ">
                                    <NavLink to={"/about"} className="text-decoration-none text-white mx-3 fw-semibold">
                                        About
                                    </NavLink>
                                </li>
                                <li className="list-unstyled ">
                                    <NavLink to={"/ourMenus"} className="text-decoration-none text-white mx-3 fw-semibold">
                                        Our Menus
                                    </NavLink>
                                </li>
                                <li className="list-unstyled ">
                                    <NavLink to={"/reservation"} className="text-decoration-none text-white mx-3 fw-semibold">
                                        Reservation
                                    </NavLink>
                                </li>
                                <li className="list-unstyled ">
                                    <NavLink to={"/contact"} className="text-decoration-none text-white mx-3 fw-semibold">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="social-icon col-7 align-items-center justify-content-end d-flex col-sm-7 col-md-8 col-lg-2 col-xl-2">
                            <a href="https://www.facebook.com/" target="blank"><i className="bi bi-facebook px-3 text-white f-s-18"></i></a>
                            <a href="https://www.instagram.com/" target="blank"><i className="bi bi-instagram px-3 text-white f-s-18"></i></a>
                            <a href="https://www.tripadvisor.com/" target="blank"><i className="bi bi-sunglasses px-3 text-white f-s-18"></i></a>
                            <button className="btn fs-5 text-white d-lg-none" type="button" onClick={handleShow}>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <Offcanvas show={show} className="bg-dark" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled">
                        <li className="py-2 px-3">

                            <NavLink to={"/"} className="text-primary  text-decoration-none fw-semibold fs-4"> Home</NavLink>
                        </li>
                        <li className="py-2 px-3">
                            <NavLink to={"/about"} className="text-white  text-decoration-none fw-semibold fs-4">  About</NavLink>
                        </li>
                        <li className="py-1 px-3">
                            <NavLink to={"/contact"} className="text-white  text-decoration-none fw-semibold fs-4">Our Menus</NavLink>
                        </li>
                        <li className="py-2 px-3">
                            <NavLink to={"/reservation"} className="text-white  text-decoration-none fw-semibold fs-4"> Reservation</NavLink>
                        </li>
                        <li className="py-1 px-3">
                            <NavLink to={"/ourMenus"} className="text-white text-decoration-none fw-semibold fs-4"> Contact</NavLink>
                        </li>

                    </ul>
                    <div className="pt-5 px-3 res">
                        <a href="pages/reservation.html" type="button" className="text-white px-5 py-3 text-decoration-none fw-semibold border border-white border-2 rounded">
                            RESERVATION
                        </a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header;
