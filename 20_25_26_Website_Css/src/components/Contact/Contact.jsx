import React from 'react'

function Contact() {
    return (
        <>
            <section>
                <div className="container  py-5">
                    <div className="row text-white p-5">
                        <div className="col-12 col-sm-12 col-lg-5  p-5">
                            <h2 className="fw-bolder">Contact</h2>
                            <p className="w-75 pt-2"> 732/21 Second street ,Manchester Kingston United Kingdom</p>
                            <h2 className="fw-bolder pt-5">Follow Us</h2>
                            <p className="pt-3">Facebook<br />
                                Instagram<br />
                                TripAdvisor</p>
                        </div>
                        <div className="col-12 col-lg-7 col-sm-12  p-5"><h2 className="fw-bolder">T: +65 (0) 76-890-214</h2><h2 className="fw-bolder">E: bookings@wilma.co.uk</h2>
                            <h2 className="fw-bolder pt-5 mt-3">Opening Hours</h2>
                            <div className="col-12 d-flex">
                                <div className="col-6">
                                    <h5 className="text-white fw-bolder pt-4 pb-1">Lunch Time</h5>
                                    <p className="text-white">Monday to Sunday<br />
                                        10.30am - 3:00pm
                                    </p>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-white fw-bolder pt-4 pb-1">Dinner Time</h5>
                                    <p className="text-white">Monday to Sunday<br />
                                        5.30pm - 11:00pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
