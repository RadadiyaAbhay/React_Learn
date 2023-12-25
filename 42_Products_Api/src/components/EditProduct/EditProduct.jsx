import React, {useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doneEditProducts } from '../../services/actions/products.action';

function EditProduct() {
  const dispatch = useDispatch();
  const { product , isLoading ,err} = useSelector(state => state.productsReducer);
  const navigate = useNavigate();

  const [productInput , setProductInput] = useState(product);
  const handleInput = (e) => {
    const key = e.target.name;
    if(key == "rate" || key == "count"){
      setProductInput({...productInput , rating : {...productInput.rating ,[key] : e.target.value} });
    }else{
      setProductInput({...productInput , [key] : e.target.value});
    }
  }

  const updateProduct = (e ,id) => {
    e.preventDefault();

    dispatch(doneEditProducts(id , productInput));
    navigate("/showproducts")
  }

  if(isLoading){
    return(
      <>
      <Container>
        <Row style={{height:"90vh"}}>
          <div className='justify-content-center d-flex align-items-center'>
            <div className="loader"></div>
          </div>
        </Row>
      </Container>
      </>
    )
  }else if(err != null){
    return(
      <>
      <Container>
        <Row>
          <p className='pt-5 fw-bold'>Server Not Found</p>
        </Row>
      </Container>
      </>
    )
  }else if(productInput != null){
  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
          <h2 className='pb-2 font1 text-center'>Update Product</h2>

            <Form onSubmit={(e) => updateProduct(e, productInput.id)}>
              <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
                <Form.Control type="text" placeholder="Enter title" name='title' value={productInput.title} onChange={handleInput}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3">
                <Form.Control type="text" placeholder="Enter description" name='description' value={productInput.description} onChange={handleInput}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Price" className="mb-3">
                <Form.Control type="number" placeholder="Enter price" name='price' value={productInput.price} onChange={handleInput}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput4" label="Image" className="mb-3">
                <Form.Control type="text" placeholder="Enter image" name='image' value={productInput.image} onChange={handleInput}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput5" label="Category" className="mb-3">
                <Form.Control type="text" placeholder="Enter category" name='category' value={productInput.category} onChange={handleInput}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput6" label="Rate" className="mb-3">
                <Form.Control type="text" placeholder="Enter rate" name='rate' value={productInput.rating.rate} onChange={handleInput}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput7" label="Count" className="mb-3">
                <Form.Control type="number" placeholder="Enter count" name='count' value={productInput.rating.count} onChange={handleInput}/>
              </FloatingLabel>
              <Button variant="dark" type='submit'>Update</Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  )
  }
}

export default EditProduct