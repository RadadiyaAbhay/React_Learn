import I23 from "../../assets/23.png"
import I24 from "../../assets/24.png"
import React from 'react'

function Banner() {
    return (
        <>
            <section className="banner d-flex align-items-center position-relative b1">
                <div className="position-absolute col-6 left-leaf" >
                    <img src={I23} width="45%" alt="23" />
                </div>
                <div className="position-absolute col-6 d-flex justify-content-end right-leaf" style={{top:"65%",left:"55%"}}>
                    <img src={I24} width="49%" alt="24" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="banner-content text-center">
                            <span className="text-white pb-1 fw-normal more">
                                MORE FLAVOR FOR LESS
                            </span>
                            <h1 className="text-white w-50 mx-auto pb-1 fw-bolder taste">
                                Taste The Difference
                            </h1>
                            <p className="text-white mx-auto pb-2 fw-normal when f-s-18 " >
                                When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat
                            </p>
                            <div className="button">
                                <a href="pages/our-menus.html" className="text-white text-decoration-none px-4 py-3 d-inline-block border-bottom border-top our-menus f-s-18 fw-medium" >
                                    OUR MENUS
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
