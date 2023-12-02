function Footer() {
    return (
        <>
            <footer>
                <div>
                    <div className=" border-top border-secondary container pt-5">
                        <div className="row">
                            <div className="d-flex flex-column flex-lg-row col-12">


                                <div className="col-lg-4 py-4 py-lg-1 col-12 text-white text-center">
                                    <h5 className="pb-3">Open Hours</h5>
                                    <p>Monday - Friday: 10 AM - 11 PM</p>
                                    <p>Saturday - Sunday: 9 AM - 1 PM</p>
                                </div>
                                <div className="col-lg-4 py-4 py-lg-1 col-12 text-white text-center">
                                    <h5 className="pb-3">Reservation</h5>
                                    <p>+152 534-468-854</p>
                                    <p>contact@example.com</p>
                                </div>
                                <div className="col-lg-4 py-4 py-lg-1 col-12 text-white text-center">
                                    <h5 className="pb-3">Address</h5>
                                    <p>Techwind Cafe & Restro</p>
                                    <p>C/54 Northwest Freeway, Suite 558, USA 485</p>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src="https://techwind-next.vercel.app/_next/image?url=%2Fimages%2Flogo-icon-80.png&w=96&q=75" alt="" />


                            </div>
                            <div className="col-12 d-flex justify-content-center pt-3 text-white mt-3">
                                <p className="col-lg-6 text-center">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top border-secondary d-flex text-white justify-content-center py-4">
                © 2023 Techwind. Design & Develop by Vendee Technology.
                </div>
            </footer>
        </>
    )
}

export default Footer;