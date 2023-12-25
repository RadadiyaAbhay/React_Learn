import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createProducts } from '../../services/actions/products.action';
import { useNavigate } from 'react-router';

function CreateProduct(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productInput , setProductInput] = useState({
    title:"",
    description: "",
    price: "",
    image : "",
    category: "",
    rating: {
      rate: "",
      count: ""
    }


  });

  const handleInput = (e) => {
    const key = e.target.name;
    if(key == "rate" || key == "count"){
      setProductInput({...productInput , rating : {...productInput.rating ,[key] : e.target.value} });
    }else{
      setProductInput({...productInput , [key] : e.target.value});
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProducts(productInput))
    navigate('/showproducts')
  }
  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
        <h2 className='pb-2 font1 text-center'>Create Product</h2>

            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
                <Form.Control type="text" placeholder="Enter title" name='title' value={productInput.title} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3">
                <Form.Control type="text" placeholder="Enter description" name='description' value={productInput.description} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Price" className="mb-3">
                <Form.Control type="number" placeholder="Enter price" name='price' value={productInput.price} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput4" label="Image" className="mb-3">
                <Form.Control type="text" placeholder="Enter image" name='image' value={productInput.image} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput5" label="Category" className="mb-3">
                <Form.Control type="text" placeholder="Enter category" name='category' value={productInput.category} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput6" label="Rate" className="mb-3">
                <Form.Control type="text" placeholder="Enter rate" name='rate' value={productInput.rating.rate} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput7" label="Count" className="mb-3">
                <Form.Control type="number" placeholder="Enter count" name='count' value={productInput.rating.count} onChange={handleInput} required/>
              </FloatingLabel>
              <Button variant="dark" type='submit'>Submit</Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CreateProduct