import React from 'react'
import I32 from '../../assets/32.png';
import I62 from '../../assets/62.png';


function MenuDesc() {
  return (
    <>
             <section className="py-5 my-5 position-relative">
		<div className="position-absolute col-lg-6 d-none d-lg-block " style={{top:"25%", left:"-5%", zIndex:"2"}} >
		     <img src={I32} width="50%"  alt="61"/>
		    </div>
		<div className="position-absolute col-lg-6 d-none d-lg-block" style={{top:"40%", left:"70%", zIndex:"2"}} >
		     <img src={I62} width="85%"  alt="61"/>
		    </div>
		   <div className="container">
		     <div className="row text-center img-46-con">
                 <h2 className="text-primary pb-5 fw-semibold mx-auto high">
                   The Wilma is a premium taste that yearns to be <i>savored</i>, ground beef between your<i> teeth</i>
                 </h2>
				 <h5 className="text-primary pb-2 fw-normal">
                   DELIGHT IN EVERY BITE
                 </h5>
			 </div>
		   </div>
		</section>	 
    </>
  )
}

export default MenuDesc
