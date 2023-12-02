import React from 'react'
import I61 from '../../assets/61.png';
import I62 from '../../assets/62.png';
import I92 from '../../assets/92.png';
import I91 from '../../assets/91.png';
import I94 from '../../assets/94.png';
import I93 from '../../assets/93.png';

function MenuBanner() {
  return (
    <>
              <section className=" d-flex align-items-center position-relative b1 b22 ">
	      <div className="position-absolute col-lg-6 d-none d-lg-block" style={{top:"0%", left:"0%"}} >
		     <img src={I61} width="45%"  alt="61"/>
		    </div>
	      <div className="position-absolute col-lg-6 d-none d-lg-block d-flex justify-content-end" style={{top:"-7%", left:"80%"}}>
		    <img src={I62}  width="110%"  alt="62"/>
		  </div>
		   <div className="position-absolute col-lg-6 d-none d-lg-block " style={{top:"70%", left:"-5%"}} >
		     <img src={I92} width="50%"  alt="61"/>
		    </div>
	      <div className="position-absolute col-lg-6 d-none d-lg-block d-flex justify-content-end" style={{top:"5%", left:"81%"}}>
		    <img src={I91}  width="40%"  alt="62"/>
		  </div>
		   <div className="position-absolute col-lg-6 d-none d-lg-block " style={{top:"110%", left:"70%"}} >
		     <img src={I94} width="70%"  alt="61"/>
		    </div>
	      <div className="position-absolute col-lg-6 d-none d-lg-block d-flex justify-content-end" style={{top:"100%", left:"78%"}}>
		    <img src={I93}  width="48%"  alt="62"/>
		  </div>
	      <div className="container">
		       <div className="row">
		         <div className="banner-content text-center pt-5 mt-5">
                    <span className="text-white pb-1 fw-normal more">
                      DELICIOUS AND NUTRITIOUS
                    </span>
                    <h1 className="text-white w-50 mx-auto pb-1 fw-bolder taste">
                       Refill Your Tank
                    </h1>
					<p className="text-white mx-auto pb-2 fw-normal when f-s-18 pt-4 " >
                      When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat
                    </p>
                 </div>
		       </div>
        </div>
	    </section>
    </>
  )
}

export default MenuBanner
