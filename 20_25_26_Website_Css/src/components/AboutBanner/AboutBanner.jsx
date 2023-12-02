import React from 'react'
import I61 from '../../assets/61.png';
import I62 from '../../assets/62.png';

function AboutBanner() {
    return (
        <>
            <section className=" d-flex align-items-center position-relative b1 b22">
                <div className="position-absolute col-6 " style={{ top: "5%", left: "0%" }} >
                    <img src={I61} width="45%" alt="61" />
                </div>
                <div className="position-absolute col-6 d-flex justify-content-end" style={{ top: "5%", left: "75%" }}>
                    <img src={I62} width="100%" alt="62" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="banner-content text-center">
                            <span className="text-white pb-1 fw-normal more">
                                MORE FLAVOR FOR LESS
                            </span>
                            <h1 className="text-white w-50 mx-auto pb-1 fw-bolder taste">
                                Good food and Great vibes
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBanner
