import React from 'react'
import I38 from '../../assets/38.png';
import I27 from '../../assets/27.png';


function Discover() {
    return (
        <>
            <section className="b44 position-relative mt-5 	">
                <div className="container">
                    <div className="row justify-content-lg-start justify-content-center">
                        <div className="banner-content text-center col-12 col-lg-7 img-32-con img-32-con-2" >
                            <span className="text-white pb-1 " >
                                WE SAVED YOU A SEAT
                            </span>
                            <h2 className="text-white mx-auto pb-1 pt-2 " >
                                Discover <br /> About Us
                            </h2>
                            <p className="text-white mx-auto pb-2 pt-3" >
                                When the going gets tough, the tough get grilling. Bringing<br /> heat to your meat. No one can compete with our meat
                            </p>
                            <div className="button pt-2 ">
                                <a href="javascript:;" className="text-white text-decoration-none px-4 py-3 d-inline-block border-bottom border-top" >
                                    LEARN MORE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute col-6" style={{top:"65%", left:"-10%" }} >
                    <img src={I38} width="55%" alt="23" />
                </div>
                <div className="position-absolute col-6 d-flex justify-content-end" style={{top:"65%", left:"50%"}}>
                    <img src={I27} width="35%" alt="24" />
                </div>
            </section>
        </>
    )
}

export default Discover
