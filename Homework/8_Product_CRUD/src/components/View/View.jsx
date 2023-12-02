import React from 'react';
import { useLocation, useNavigate } from 'react-router';

function View() {
  let { state } = useLocation();

  return (
    <>
      <section className='pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-4 pe-5">
              <div className='position-sticky top-0 col-12'>
                <img src={state.thumbnail} className="img-fluid" />
              </div>
            </div>
            <div className="col-8">
             <h3>{state.name}</h3>
             <span className='fw-semibold fs-5 pe-2'>-{state.discount}%</span>
             <span className='fw-bold fs-4 text-danger'>Rs.{state.price - ((state.price * state.discount) / 100)}</span>
             <p className='fs-6 text-decoration-line-through'>Rs. {state.price}</p>
             <p className='mb-1'><b>Colour :</b> {state.colour}</p>
             <p className='mb-1'><b>Brand :</b> {state.brand}</p>
             <p className='mb-1'><b>Category :</b> {state.category}</p>
             <h6 className='fw-bold pt-3 mb-0'>About :</h6>
             <p className='mb-0'>{state.description}</p>
             <h6 className='fw-bold pt-3 mb-0'>Offers :</h6>
             <p>{state.offers}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default View;