import React from 'react'
import I81 from '../../assets/81.png';
import I82 from '../../assets/82.png';


function ContactBanner() {
    return (
        <>
            <section className="banner-3 d-flex align-items-center position-relative b1">
                <div className="position-absolute col-lg-6 d-none d-lg-block" style={{top:"55%", left:"-30%"}} >
                    <img src={I81} width="100%" alt="23" />
                </div>
                <div className="position-absolute col-lg-6 d-flex d-none d-lg-block justify-content-end " style={{top:"65%", left:"83%"}}>
                    <img src={I82} width="45%" alt="24" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="banner-content text-center">
                            <span className="text-white pb-1 fw-normal more">
                                FIND US
                            </span>
                            <h1 className="text-white w-50 mx-auto pb-1 fw-bolder taste">
                                Contact
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactBanner
