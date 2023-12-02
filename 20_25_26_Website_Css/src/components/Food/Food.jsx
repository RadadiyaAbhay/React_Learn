import React from 'react'
import I32 from "../../assets/32.png";
import I33 from "../../assets/33.png";
import I34 from "../../assets/34.png";


function Food() {
    return (
        <>
            <section className="position-relative b3">
                <div className="container mb-3 " >
                    <div className="row">
                        <div className="banner-content text-center col-xl-7 col-12 col-sm-12 col-md-12 col-lg-6 img-32-con img-32-con-1 img-32-con-4" >
                            <span className="text-white pb-1 " >
                                DELIGHT IN EVERY BITE
                            </span>
                            <h2 className="text-white w-100  mx-auto pb-1 pt-2 chef" >
                                Our Chef Recommend
                            </h2>
                            <p className="text-white mx-auto pb-2 pt-3 " >
                                Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation.
                            </p>
                            <div className="button pt-2">
                                <a href="pages/our-menus.html" className="text-white text-decoration-none px-4 py-3 d-inline-block border-bottom border-top" >
                                    VIEW MENUS
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-12 col-sm-12 img-32 col-lg-6 col-md-12" >
                            <img src={I32} className="w-100 pt-5 ps-5 img-32-1" alt="32" />
                        </div>
                    </div>
                </div>
                <div className="position-absolute col-6 pan" ><img src={I34} alt="34" /></div>
                <div className="position-absolute col-6 pan-up d-none d-lg-block" ><img src={I33} width="55%" alt="33" /></div>
            </section>
        </>
    )
}

export default Food
