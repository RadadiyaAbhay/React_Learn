import Button from 'react-bootstrap/Button';

function Greetings() {

    return (
        <>
            <section className="greeback">
                <div className="container h-100">
                    <div className="row justify-content-end h-100">
                        <div className="col-lg-5 col-9 bodyColor align-items-center d-flex">
                            <div className="d-flex flex-column fam px-5 text-center">
                                <div className="d-flex justify-content-center">

                                    <div className="bg-white rounded-5 cir d-flex justify-content-center align-items-center"><i className="bi bi-broadcast fs-3 fw-bolder"></i>
                                    </div>
                                </div>
                                <h2 className="text-white pt-2">Happy Hours</h2>
                                <a href="#" className="fs-5 mt-2">Starts at 3pm</a>
                                <p className="text-secondary mt-3">The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>
                                <a href="#" className="fs-5 mt-3">+152 534-468-854</a>
                                <Button variant="primary font1 fw-bolder px-3 py-2 col-lg-4 col-md-6 col-7 mt-4 mx-auto">Book Now</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Greetings;