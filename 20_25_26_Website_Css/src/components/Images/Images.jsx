import React from 'react'
import I57 from "../../assets/57.png";
import I51 from "../../assets/51.jpg";
import I52 from "../../assets/52.jpg";
import I53 from "../../assets/53.jpg";
import I54 from "../../assets/54.jpg";
import I55 from "../../assets/55.jpg";
import I56 from "../../assets/56.jpg";


function Images() {
    return (
        <>
            <section className="mt-lg-5 pt-lg-5">
                <div className="container pt-5 mt-lg-5">
                    <div className="row">
                        <div className="text-center im-con">
                            <h6 className="text-white pb-2"> FOLLOW ALONG</h6>
                            <div className="position-relative ">
                                <img src={I57} className="position-absolute top-50 spri d-none d-lg-block" alt="57"/>
                                    <h2 className="text-white fw-bolder  d-inline-block fss">@Wilma</h2>
                                    <img src={I57} className="position-absolute top-50 spri-2 d-none d-lg-block" alt="57"/>
                        </div>
                            </div>
                            <div className="col-12 d-flex flex-wrap photos  mt-md-5 mt-3 justify-content-center">
                                <div className="col-lg-4 col-11 col-md-12 col-sm-12 d-flex justify-content-center align-items-center photo"><div className="photo-in rounded"><img src={I51} className="rounded" alt="51"/></div></div>
                                <div className="col-lg-5 col-11 col-md-12 col-sm-12 d-flex justify-content-center align-items-center photo"><div className="photo-in rounded"><img src={I52} className="rounded" alt="52"/></div></div>
                                <div className="col-lg-3 col-11 col-md-12 col-sm-12 d-flex justify-content-center align-items-center photo"><div className="photo-in rounded"><img src={I53} className="rounded" alt="53"/></div></div>
                                <div className="col-lg-5 col-11 col-md-12 col-sm-12 d-flex justify-content-center align-items-center photo"><div className="photo-in rounded"><img src={I54} className="rounded" alt="54"/></div></div>
                                <div className="col-lg-3 col-11 col-md-5 col-sm-12 d-flex justify-content-center align-items-center photo"><div className="photo-in rounded"><img src={I55} className="rounded" alt="55"/></div></div>
                                <div className="col-lg-4 col-11 col-md-7 col-sm-12 d-flex justify-content-center align-items-center photo"><div className="photo-in rounded"><img src={I56} className="rounded" alt="56"/></div></div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Images
