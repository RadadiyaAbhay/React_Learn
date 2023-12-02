import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Getdata from '../../utilities/Getdata';
import { useNavigate } from 'react-router';

function Create() {
  const[product , setProduct] = useState({
    name : '',
    description : '',
    price : '',
    discount : '',
    thumbnail : '',
    colour : '',
    brand : '',
    offers : '',
    category : ''
  })
  const[products , setProducts] = useState(Getdata);
  let [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const handleInput = (e) =>{
    setProduct({...product ,[e.target.name] : e.target.value});
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    let id = Math.floor(Math.random()*100000);
    let newProduct = {...product , id : id};
    setProducts([...products, newProduct]);
    setIsSubmit(true)
    setProduct({
      name : '',
      description : '',
      price : '',
      discount : '',
      thumbnail : '',
      colour : '',
      brand : '',
      offers : '',
      category : ''
    })
  }

  const handleExit = ()=>{
    navigate('/admin')
  }
  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products));
    if (isSubmit) {
      navigate('/admin');
      setIsSubmit(false)
  }
  },[products])

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
                <Form.Control id="floatingInputCustom" name="name" required value={product.name} type="text" placeholder="product name" onChange={handleInput} />
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
                <Form.Control id="floatingInputCustom2" name="price" required value={product.price} type="number" placeholder="product price" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom2">Price</label>
              </Form.Floating>
            </div>
            <div className='col-3'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom4" min={0} max={99} name="discount" required value={product.discount} type="number" placeholder="product name" onChange={handleInput}/>
                <label htmlFor="floatingInputCustom4">Discount</label>
              </Form.Floating>
            </div>
            <div className='col-6'>
              <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom7" name="thumbnail" required value={product.thumbnail} type="text" placeholder="product thumbnail" onChange={handleInput}/>
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
              <button type='submit' className='me-2 btn btn-outline-success border-2 fw-bolder'>Save</button>
              <button type='button' className='btn btn-outline-danger border-2 fw-bolder' onClick={handleExit}>Exit</button>
            </div>
          </Row>
        </Container>
      </form>
    </>
  )
}

export default Create
