import Button from 'react-bootstrap/Button';

function Banner() {
    
    return(
        <>
            <section className="back">
                <div className="container h-100">
                    <div className="row h-100 overhidd">
                        <div className="d-flex justify-content-center align-items-center h-100  flex-column  backfont ">
                        <p className="text-light font2 h5">Since 1993</p>
                        <h1 className="text-white font2 mb-5 font bannfont">Great Coffee <br/>Good Vibes</h1>
                        <Button variant="primary font1 fw-bolder px-3 py-2">Explore More <i className="bi bi-arrow-right"></i></Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;