import React from 'react'
import I25 from "../../assets/25.jpg";
import I26 from "../../assets/26.png";


function Destination() {
    return (
        <>  
            <section>
                <div className="container mb-3 " >
                    <div className="row g-0">
                        <div className="col-12 col-xl-5 col-lg-6 img-25" >
                            <img src={I25} className="img-fluid" alt="25"/>
                        </div>
                        <div className="col-12 col-xl-7 col-lg-6 img-25-con" >
                            <h5 className="text-white pb-2 fw-normal">
                                YOUR SPECIAL OCCASION DESTINATION
                            </h5>
                            <h2 className="text-primary pb-5 fw-semibold">
                                The Wilma is a premium taste that yearns to be <i>savored</i>, ground beef between your<i> teeth</i>
                            </h2>
                            <img src={I26} className=" pt-5" alt="26"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination
