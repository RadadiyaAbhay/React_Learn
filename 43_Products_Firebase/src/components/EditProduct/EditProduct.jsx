import React, { useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { editProducts } from '../../services/actions/product.action';

function EditProduct() {
  const { product ,isLoading ,err} = useSelector(state => state.productReducer);
  const [productInput, setProductInput] = useState(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setProductInput(product)
  }, [product])
  const handleInput = (e) => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(editProducts(productInput));
    navigate('/')
  }
  console.log("EditProduct" , product);

  if(isLoading){
    return(
      <>
        <Container>
          <Row>
            <h1 className="text-center mt-5">IsLoading</h1>
          </Row>
        </Container>
      </>
    )
  }else if(err != null){
    return(
      <>
        <Container>
          <Row>
            <h1 className="text-center mt-5">Err</h1>
            <NavLink className='fw-bold text-danger text-center text-decoration-none fs-5' to={'/'}>Back To Home</NavLink>
          </Row>
        </Container>
      </>
    )
  }else if(productInput != null){
    return (
      <>
        <Container className='pt-5'>
          <Row>
            <Form onSubmit={handleClick}>
              <div>
                <FloatingLabel controlId="floatingInput1" label="Product name" className="mb-3">
                  <Form.Control type="text" placeholder="Enter Product name" name='name' value={productInput.name} onChange={handleInput} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput2" label="Product description" className="mb-3">
                  <Form.Control as="textarea" placeholder="Enter Product description" name='description' value={productInput.description} onChange={handleInput} />
                </FloatingLabel>
                <div className="d-flex">
  
                  <div className='col-6 pe-2'>
                    <FloatingLabel controlId="floatingInput3" label="Product price" className="mb-3">
                      <Form.Control type="number" min={0} placeholder="Enter Product price" value={productInput.price} name='price' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                  <div className="col-6 ps-2">
                    <FloatingLabel controlId="floatingInput4" label="Product discount" className="mb-3">
                      <Form.Control type="number" min={0} placeholder="Enter Product Discount" value={productInput.discount} name='discount' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                </div>
                <FloatingLabel controlId="floatingInput6" label="Product category" className="mb-3">
                  <Form.Control type="text" placeholder="Enter Product category" value={productInput.category} name='category' onChange={handleInput} />
                </FloatingLabel>
                <div className="d-flex">
  
                  <div className='col-6 pe-2'>
                    <FloatingLabel controlId="floatingInput7" label="Product rating" className="mb-3">
                      <Form.Control type="number" min={0} max={5} placeholder="Enter Product rating" value={productInput.rating} name='rating' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                  <div className="col-6 ps-2">
                    <FloatingLabel controlId="floatingInput8" label="Product stock" className="mb-3">
                      <Form.Control type="number" min={0} placeholder="Enter Product stock" value={productInput.stock} name='stock' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                </div>
                <div className="d-flex">
                  <div className='col-6 pe-2'>
  
                    <FloatingLabel controlId="floatingInput5" label="Product thumbnail" className="mb-3">
                      <Form.Control type="text" placeholder="Enter Product thumbnail" value={productInput.thumbnail} name='thumbnail' onChange={handleInput} />
                    </FloatingLabel>
                    <Button variant="dark" type='submit'>Update</Button>{' '}
                    <NavLink className='btn btn-dark' to={'/'}>Back</NavLink>
                  </div>
                  <div className="col-6 ps-2 " id='prothumb'>
                    <img src={productInput.thumbnail} alt="" className='img-thumbnail col-2' />
                  </div>
                </div>
              </div>
            </Form>
  
          </Row>
        </Container>
      </>
    )
  }
}

export default EditProduct