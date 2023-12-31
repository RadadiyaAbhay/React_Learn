import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createPro } from '../../services/actions/productAction';

function CreateProduct() {
    let [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        discount: ''
    })
    let dispatch = useDispatch();
    let handleInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    let handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPro(product));
    }
    return (
        <>
            <section className='pt-5'>

                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <div className='d-flex gap-2'>
                                <FloatingLabel controlId="floatingInput1" label="Product Name" className="mb-3 col-6">
                                    <Form.Control type="text" placeholder="Enter Name" name='name' value={product.name} onChange={handleInput} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput2" label="Product Description" className="mb-3 col-6">
                                    <Form.Control type="text" placeholder="Enter Description" name='description' value={product.description} onChange={handleInput} />
                                </FloatingLabel>
                            </div>
                        </Row>
                        <Row>
                            <div className='d-flex gap-2'>
                                <FloatingLabel controlId="floatingInput3" label="Product Price" className="mb-3 col-6">
                                    <Form.Control type="number" placeholder="Enter Price" name='price' value={product.price} onChange={handleInput} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput4" label="Product Discount" className="mb-3 col-6">
                                    <Form.Control type="number" placeholder="Enter Discount" name='discount' value={product.discount} onChange={handleInput} />
                                </FloatingLabel>
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <Button variant="outline-success" type='submit' className='me-2 fw-bold'>Save</Button>
                                <Button className='fw-bold' variant="outline-danger">Exit</Button>
                            </div>
                        </Row>
                    </Form>
                </Container>
            </section>
        </>
    )
}

export default CreateProduct