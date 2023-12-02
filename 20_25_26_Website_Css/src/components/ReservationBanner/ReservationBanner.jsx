import React from 'react'
import I72 from '../../assets/72.png';
import I71 from '../../assets/71.png';


function ReservationBanner() {
    return (
        <>
            <section className="banner-2 d-flex align-items-center position-relative b1">
                <div className="position-absolute d-none d-lg-block col-lg-6 " style={{top:"76%", left:"-3%"}} >
                    <img src={I72} width="45%" alt="23" />
                </div>
                <div className="position-absolute col-lg-6 d-flex justify-content-end d-none d-lg-block d-lg-6  " style={{top:"65%", left:"81%"}}>
                    <img src={I71} width="45%" alt="24" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="banner-content text-center">
                            <span className="text-white pb-1 fw-normal more">
                                MORE FLAVOR FOR LESS
                            </span>
                            <h1 className="text-white w-50 mx-auto pb-1 fw-bolder taste">
                                Reservation
                            </h1>
                            <p className="text-white mx-auto pb-2 fw-normal when f-s-18 " >
                                When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReservationBanner
