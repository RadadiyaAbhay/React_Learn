import React, { useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { editProducts } from '../../services/actions/product.action';

function EditProduct() {
  const { product, isLoading, err } = useSelector(state => state.productReducer);
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
    navigate('/products')
  }
  // console.log("EditProduct", product);

  if (isLoading) {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="loader"></div>
        </div >

      </>
    )
  } else if (err != null) {
    return (
      <>
        <div className="flex mt-4">
          <p className="py-2 border bg-secondary-subtle  px-3 col-12 d-flex justify-content-between rounded-3 fw-semibold border-2 border-danger text-danger align-items-center">{err.code}<span></span></p>
        </div>
      </>
    )
  } else if (productInput != null) {
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
                <div className="d-lg-flex">

                  <div className='col-lg-6 col-12 pe-lg-2'>
                    <FloatingLabel controlId="floatingInput3" label="Product price" className="mb-3">
                      <Form.Control type="number" min={0} placeholder="Enter Product price" value={productInput.price} name='price' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                  <div className="col-lg-6 col-12 ps-lg-2">
                    <FloatingLabel controlId="floatingInput4" label="Product discount" className="mb-3">
                      <Form.Control type="number" min={0} placeholder="Enter Product Discount" value={productInput.discount} name='discount' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                </div>
                <FloatingLabel controlId="floatingInput6" label="Product category" className="mb-3">
                  <Form.Control type="text" placeholder="Enter Product category" value={productInput.category} name='category' onChange={handleInput} />
                </FloatingLabel>
                <div className="d-lg-flex">

                  <div className='col-lg-4 col-12 pe-lg-2'>
                    <FloatingLabel controlId="floatingInput7" label="Product rating" className="mb-3">
                      <Form.Control type="number" min={0} max={5} placeholder="Enter Product rating" value={productInput.rating} name='rating' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                  <div className="col-lg-4 col-12 px-lg-2">
                    <FloatingLabel controlId="floatingInput8" label="Product stock" className="mb-3">
                      <Form.Control type="number" min={0} placeholder="Enter Product stock" value={productInput.stock} name='stock' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                  <div className="col-lg-4 col-12 ps-lg-2">
                    <FloatingLabel controlId="floatingInput10" label="Product color" className="mb-3 bg-transparent text-black">
                      <Form.Control type="text" className='bg-transparent text-black' placeholder="Enter Product Color" value={productInput.color} name='color' onChange={handleInput} />
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
                    <img src={productInput.thumbnail} alt="" className='img-thumbnail  col-lg-2 col-12 col-sm-6' />
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