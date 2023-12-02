import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Getdata from '../../utilities/Getdata';
import { Container, Form, Row } from 'react-bootstrap';

function Update() {
  let {state} = useLocation();

  const [product, setProduct] = useState(state);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    let products = Getdata();
      let newProducts = products.map((pro) =>{
      if(pro.id == product.id){
        return pro = product;
      }
      return pro;
    })
    localStorage.setItem('products',JSON.stringify(newProducts));
    navigate('/admin');
  }
  const handleExit = ()=>{
    navigate('/admin')
  }
  const handleInput = (e) =>{
    setProduct({...product ,[e.target.name] : e.target.value});
  }



  return (
    <>
      <form action='' method='post' onSubmit={handleSubmit}>
        <Container className='pt-5'>
          <Row>
            <div className="col-12 pb-2">
              <h4 className='fw-bold'>Product Details</h4>
            </div>
            <div className='col-12'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom" required name="name" value={product.name} type="text" placeholder="product name" onChange={handleInput} />
                <label htmlFor="floatingInputCustom">Name</label>
              </Form.Floating>
            </div>
            <div className='col-12'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom3" name="description" value={product.description} type="text" placeholder="product disc" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom3">Description</label>
              </Form.Floating>
            </div>
            <div className='col-3'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom2" required name="price" value={product.price} type="number" placeholder="product price" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom2">Price</label>
              </Form.Floating>
            </div>
            <div className='col-3'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom4" required min={0} max={99} name="discount" value={product.discount} type="number" placeholder="product name" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom4">Discount</label>
              </Form.Floating>
            </div>
            <div className='col-6'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom7" required name="thumbnail" value={product.thumbnail} type="text" placeholder="product thumbnail" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom7">Thumbnail</label>
              </Form.Floating>
            </div>
            <div className='col-3'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom5" name="colour" value={product.colour} type="text" placeholder="product colour" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom5">Colour</label>
              </Form.Floating>
            </div>
            <div className='col-3'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom6" name="brand" value={product.brand} type="text" placeholder="product brand" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom6">Brand</label>
              </Form.Floating>
            </div>
            <div className='col-3'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom9" name="offers" value={product.offers} type="text" placeholder="product Offers" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom9">Offers</label>
              </Form.Floating>
            </div>
            <div className='col-3'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom8" name="category" value={product.category} type="text" placeholder="product category" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom8">Category</label>
              </Form.Floating>
            </div>
            <div className='col-12 pt-2'>
              <button type='submit' className='me-2 btn btn-outline-success border-2 fw-bolder'>Update</button>
              <button type='button' className='btn btn-outline-danger border-2 fw-bolder' onClick={handleExit}>Exit</button>
            </div>
          </Row>
        </Container>
      </form>
    </>
  )
}

export default Update
