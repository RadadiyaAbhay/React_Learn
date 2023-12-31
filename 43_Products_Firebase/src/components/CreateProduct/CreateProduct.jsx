import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProducts } from '../../services/actions/product.action';
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        discount: '',
        thumbnail: '',
        category: '',
        rating: '',
        stock: ''
    })
    const handleInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const handleInput2 = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        const proThumb = document.getElementById('prothumb')
        proThumb.classList.remove('d-none')
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(createProducts(product))
        navigate('/')
    }
    console.log("CreateProduct",product);

    return (
        <>
            <Container className='pt-5'>
                <Row>
                    <Form onSubmit={handleClick}>
                        <div>
                            <FloatingLabel controlId="floatingInput1" label="Product name" className="mb-3">
                                <Form.Control type="text" placeholder="Enter Product name" name='name' value={product.name} onChange={handleInput} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput2" label="Product description" className="mb-3">
                                <Form.Control as="textarea" placeholder="Enter Product description" name='description' value={product.description} onChange={handleInput} />
                            </FloatingLabel>
                            <div className="d-flex">

                                <div className='col-6 pe-2'>
                                    <FloatingLabel controlId="floatingInput3" label="Product price" className="mb-3">
                                        <Form.Control type="number" min={0} placeholder="Enter Product price" value={product.price} name='price' onChange={handleInput} />
                                    </FloatingLabel>
                                </div>
                                <div className="col-6 ps-2">
                                    <FloatingLabel controlId="floatingInput4" label="Product discount" className="mb-3">
                                        <Form.Control type="number" min={0} placeholder="Enter Product Discount" value={product.discount} name='discount' onChange={handleInput} />
                                    </FloatingLabel>
                                </div>
                            </div>
                            <FloatingLabel controlId="floatingInput6" label="Product category" className="mb-3">
                                <Form.Control type="text" placeholder="Enter Product category" value={product.category} name='category' onChange={handleInput} />
                            </FloatingLabel>
                            <div className="d-flex">

                                <div className='col-6 pe-2'>
                                    <FloatingLabel controlId="floatingInput7" label="Product rating" className="mb-3">
                                        <Form.Control type="number" min={0} max={5} placeholder="Enter Product rating" value={product.rating} name='rating' onChange={handleInput} />
                                    </FloatingLabel>
                                </div>
                                <div className="col-6 ps-2">
                                    <FloatingLabel controlId="floatingInput8" label="Product stock" className="mb-3">
                                        <Form.Control type="number" min={0} placeholder="Enter Product stock" value={product.stock} name='stock' onChange={handleInput} />
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='col-6 pe-2'>

                                    <FloatingLabel controlId="floatingInput5" label="Product thumbnail" className="mb-3">
                                        <Form.Control type="text" placeholder="Enter Product thumbnail" value={product.thumbnail} name='thumbnail' onChange={handleInput2} />
                                    </FloatingLabel>
                                    <Button variant="dark" type='submit'>Submit</Button>{' '}
                                    <NavLink className='btn btn-dark' to={'/'}>Back</NavLink>
                                </div>
                                <div className="col-6 ps-2 d-none" id='prothumb'>
                                    <img src={product.thumbnail} alt="" className='img-thumbnail col-2' />
                                </div>
                            </div>
                        </div>
                    </Form>

                </Row>
            </Container>
        </>
    )
}

export default CreateProduct