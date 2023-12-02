import React from 'react'
import I58 from '../../assets/58.png';

function Footer() {
    return (
        <>
            <footer className="foot">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-4 col-12 pb-md-5 d-flex justify-content-center align-items-center"><img src={I58} alt="58" className="foot-logo" /></div>
                        <div className="col-lg-4 col-12 foot-tog">
                            <ul className="list-unstyled text-center foot-mid" style={{ letterSpacing: "1.8px" }}>
                                <li className="py-1 px-3 pt-5">
                                    <a href="pages/our-menus.html" className="text-white  text-decoration-none fw-semibold fs-6 text-uppercase">Our Menus</a>
                                </li>
                                <li className="py-2 px-3">
                                    <a href="pages/reservation.html" className="text-white  text-decoration-none fw-semibold fs-6 text-uppercase"> Reservation</a>
                                </li>
                                <li className="py-2 px-3">
                                    <a href="pages/about.html" className="text-white  text-decoration-none fw-semibold fs-6 text-uppercase">  About</a>
                                </li>
                                <li className="py-1 px-3 pb-5">
                                    <a href="pages/contact.html" className="text-white text-decoration-none fw-semibold fs-6 text-uppercase"> Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 pt-5 ps-5 col-12 text-center text-lg-start">
                            <i className="bi bi-facebook px-2 text-primary fs-3 "></i>
                            <i className="bi bi-instagram px-3 text-primary fs-3 "></i>
                            <i className="bi bi-sunglasses px-2 text-primary fs-3 "></i>

                            <p className="text-white d-block pt-4 prim mb-1">
                                <span className="d-block pb-2">
                                    © Copyright ThemeGoods
                                </span>
                                <span className="d-block ">
                                    All Right Reserved.
                                </span>
                            </p>
                            <span className="d-block pri mb-1">
                                <a href="#" className="text-white text-decoration-none">
                                    Privacy Policy
                                </a>
                            </span>
                            <span className="d-block pri" >
                                <a href="#" className="text-white text-decoration-none">
                                    Terms of use
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
