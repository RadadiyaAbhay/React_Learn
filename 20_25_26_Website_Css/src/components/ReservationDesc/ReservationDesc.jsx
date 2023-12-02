import React from 'react'

function ReservationDesc() {
    return (
        <>


            <section className="my-5 py-5 ">
            <div className="modal fade reser " id="exampleModal12" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog">
            <div className="modal-content bg-dblack border-white ">
              <div className="modal-header d-flex flex-wrap border-0">
        	  <div className="col-12 d-flex justify-content-end "> <button type="button" className="btn-close btn-close-white " data-bs-dismiss="modal" aria-label="Close" ></button></div>
        	  <div className="col-12  d-flex justify-content-center "><h2 className="modal-title fs-5 text-white w-25  " id="exampleModalLabel" style={{lineHeight:"2em"}}><i className="text-primary f-s-70 fw-bolder ps-5" >Table</i><span className="text-white f-s-60 fw-bolder" style={{letterSpacing:"-8px"}}> BOOKING</span></h2></div>
              </div>
              <div className="modal-body py-4 ">
                <form className="">
        		<div className="d-flex flex-warp justify-content-around">
        		 <div className="mb-3 col-3">
                      <label   className="form-label text-white fw-semibold">Name*</label>
                      <input type="text" className="form-control bg-transparent border-white border-0 border-bottom rounded-0 text-white " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   </div>
        		   <div className="mb-3 col-3">
                      <label   className="form-label text-white fw-semibold">Email*</label>
                      <input type="email" className="form-control bg-transparent border-white border-0 border-bottom rounded-0 text-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                   </div>
        		   <div className="mb-3 col-3">
                      <label   className="form-label text-white fw-semibold">phone*</label>
                      <input type="number" className="form-control bg-transparent border-white border-0 border-bottom rounded-0 text-white " id="exampleInputEmail1" aria-describedby="emailHelp"/>

                   </div>
        		   </div>
        		   		<div className="d-flex flex-warp justify-content-around pt-2">
        		 <div className="mb-3 col-3 ">
                      <label   className="form-label text-white fw-semibold">Date*</label>
                      <input type="date" className="form-control bg-transparent border-white border-0 border-bottom rounded-0 text-white " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   </div>
        		   <div className="mb-3 col-3">
                      <label   className="form-label text-white fw-semibold">Time*</label>
                      <input type="time" className="form-control bg-transparent border-white border-0 border-bottom rounded-0 text-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                   </div>
        		   <div className="mb-3 col-3">
                      <label   className="form-label text-white fw-semibold">Seats*</label>
                      <input type="number" className="form-control bg-transparent border-white border-0 border-bottom rounded-0 text-white " id="exampleInputEmail1" aria-describedby="emailHelp"/>

                   </div>
        		   </div>
        		   		<div className="d-flex flex-warp justify-content-around pt-2">
        		 <div className="mb-3 col-11">
                      <label   className="form-label text-white fw-semibold">Special Requests</label>
                      <textarea className="form-control bg-transparent border-white border-0 border-bottom rounded-0 text-white" id="exampleFormControlTextarea1 " rows="3"></textarea>
        		   </div>
        		   </div>
        		</form>
              </div>
              <div className="modal-footer justify-content-center d-flex border-0 mb-3">
                <button type="button" className="btn btn-primary bg-primary border-primary fw-bolder px-3 py-2">Book Now</button>
              </div>
            </div>
          </div>
        </div>
                <div className="container pt-lg-5 ">
                    <div className="row ">
                        <div className="col-lg-8 col-12 col-sm-12  p-0 " >
                            <div className="col-12  ps-lg-5 pb-5">
                                <h2 className="fonts fw-bolder text-primary w-100 px-lg-5">
                                    "Until I discovered cooking I was never really interested in anything"
                                </h2>
                            </div>
                            <div className="col-12 d-flex ps-lg-5 pb-5 flex-column flex-sm-column flex-md-row">
                                <div className="col-md-6 col-12 col-sm-12 px-lg-5">
                                    <h4 className="fw-bolder text-white">Reserve by Phone</h4>
                                    <p className="text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                    <p className="text-white">Please call us at
                                        <a href="#" className="text-primary text-decoration-none"> 1.800.456.6756 </a>
                                        between 10am-6pm, Monday to Friday.
                                    </p>
                                </div>
                                <div className="col-md-6 col-12 col-sm-12 px-md-5 ">
                                    <h4 className="text-white fw-bolder">
                                        Event & Group Booking
                                    </h4>
                                    <p className="text-white">Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" border p-1 col-lg-4 col-12 col-sm-12 rounded">
                            <div className="col-12 border p-0 rounded" >
                                <div className="col-12 d-flex pt-5">
                                    <div className="col-6 ps-4">
                                        <h5 className="text-white fw-bolder">Lunch Time</h5>
                                        <p className="text-white">Monday to Sunday<br />
                                            10.30am - 3:00pm
                                        </p>
                                    </div>
                                    <div className="col-6 ps-4">
                                        <h5 className="text-white fw-bolder">Dinner Time</h5>
                                        <p className="text-white">Monday to Sunday<br />
                                            5.30pm - 11:00pm
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 pt-3 ps-4">
                                    <h5 className="text-white fw-bolder">Location</h5>
                                    <p className="text-white">732/21 Second Street, Manchester Kingston United Kingdom
                                    </p>
                                </div>
                                <div className="col-12 pt-4 d-flex justify-content-center pb-5">
                                    <button type="button" className="btn btn-primary bg-primary border text-white fw-bolder" data-bs-toggle="modal" data-bs-target="#exampleModal12">
                                        Make an Online Reservation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReservationDesc;
