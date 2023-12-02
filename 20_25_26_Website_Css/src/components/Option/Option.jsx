import React from 'react'
import OffCanvasRight from '../OffCanvasRight/OffCanvasRight'

import I6 from "../../assets/6.jpg";
import I7 from "../../assets/7.jpg";
import I8 from "../../assets/8.jpg";
import I9 from "../../assets/9.jpg";
import I10 from "../../assets/10.jpg";
import I11 from "../../assets/11.jpg";
import I12 from "../../assets/12.jpg";
import I13 from "../../assets/13.jpg";
import I14 from "../../assets/14.jpg";
import I15 from "../../assets/15.jpg";
import I16 from "../../assets/16.jpg";
import I17 from "../../assets/17.jpg";
import I19 from "../../assets/19.jpg";

function Option() {
    return (
        <>
            
            <div className="topto position-fixed "><a href="#topp" className="text-white fw-bolder"><i className="bi bi-chevron-up"></i></a></div>
            
            <div className="position-fixed border-primary bg-light .bg-gradient d-flex flex-wrap  rounded-start side-togg d-none d-lg-block" style={{zIndex:"9998",top:"25%",right:"0px",width:"47px",height:"160px",transition:"all 0.4s"}}>
                <OffCanvasRight/>
                <div className="btn " type="button">
                    <a href="https://themes.themegoods.com/grandrestaurantv6/landing/showcase" target="blank" className="text-dark">
                        <i className="bi bi-heart"></i>
                    </a>
                </div>
                <div className="btn " type="button">
                    <a href="https://docs.themegoods.com/docs/grand-restaurant/" target="blank" className="text-dark">
                        <i className="bi bi-book"></i>
                    </a>
                </div>
                <div className="btn " type="button">
                    <a className="text-dark" href="https://themeforest.net/item/grand-restaurant-restaurant-cafe-theme/11812117?ref=ThemeGoods&license=regular&open_purchase_for_item_id=11812117&purchasable=source&irgwc=1&clickid=UM92eyWLwxyNWZUSoD03aUaoUkAUUY13EzMuys0&iradid=275988&irpid=1240803&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1240803&utm_medium=affiliate&utm_source=impact_radius" target="blank">
                        <i className="bi bi-cart3"></i>
                    </a>
                </div>


            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight4" aria-labelledby="offcanvasRightLabel" data-bs-backdrop="static" >
                <div className="offcanvas-body">
                    <button type="button" className="btn btn-primary col-12 py-3 fw-bolder bg-success border-0">Purchase Theme $64 (1-Time)</button>
                    <h6 className="fw-bolder fw-5 pt-5 text-center pb-2">Ready to use Demos</h6>
                    <p className="text-center">Here are example of predefined demo sites that can be imported within one click.</p>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I16} alt="16" className="img-fluid rounded" /></div><div className="col-5"><img src={I17} alt="17" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I19} alt="19" className="img-fluid rounded" /></div><div className="col-5"><img src={I15} alt="15" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I14} alt="14" className="img-fluid rounded" /></div><div className="col-5"><img src={I13} alt="13" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I12} alt="12" className="img-fluid rounded" /></div><div className="col-5"><img src={I11} alt="11" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I10} alt="10" className="img-fluid rounded" /></div><div className="col-5"><img src={I9} alt="9" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I8} alt="8" className="img-fluid rounded" /></div><div className="col-5"><img src={I7} alt="7" className="img-fluid rounded" /></div></div>
                    <div className="col-12 d-flex justify-content-around py-3"><div className="col-5"><img src={I6} alt="6" className="img-fluid rounded" /></div><div className="col-5"></div></div>
                </div>
            </div>
        </>
    )
}

export default Option
