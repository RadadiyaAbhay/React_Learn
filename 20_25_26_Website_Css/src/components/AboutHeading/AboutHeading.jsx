import React from 'react'
import I32 from '../../assets/32.png';

function AboutHeading() {
    return (
        <>
            <section className="ba2">
                <div className="container">
                    <div className="row">
                        <div className=" col-12 col-sm-11 col-md-10 col-lg-7 col-xl-5  img-322 mx-auto" >
                            <img src={I32} className="w-25 pt-5 ps-5 img-32-1 img-32-5" alt="32" />
                        </div>
                    </div>
                    <div className="banner-content text-center col-12 img-32-con img-32-con-1 img-32-con-11" >
                        <span className="text-white pb-1 " >
                            DELIGHT IN EVERY BITE
                        </span>
                        <h2 className="text-white w-100  mx-auto pb-1 pt-2 chef" >
                            Our Chef Recommend
                        </h2>
                        <p className="text-white mx-auto pb-2 pt-3 " >
                            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutHeading
