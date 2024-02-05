import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProducts, getProducts } from '../../services/actions/product.action';
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getProducts());
    }, [])
    let { products, isLoading, err } = useSelector(state => state.productReducer)
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        discount: '',
        thumbnail: '',
        category: '',
        rating: '',
        stock: '',
        color: '',
        uin: products.length + 1
    })
    // console.log(product.uin);
    
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
        navigate('/products')
    }
    // console.log("CreateProduct",product);
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
            <div className="flex mt-4">
                <p className="py-2 border bg-secondary-subtle  px-3 col-12 d-flex justify-content-between rounded-3 fw-semibold border-2 border-danger text-danger align-items-center">{err.code}<span></span></p>
            </div>
        )
    } else {
        return (
            <>
                <Container className='pt-5'>
                    <Row>
                        <Form onSubmit={handleClick}>
                            <div>
                                <FloatingLabel controlId="floatingInput1" label="Product name" className="mb-3 bg-transparent text-black">
                                    <Form.Control className='bg-transparent text-black' type="text" placeholder="Enter Product name" name='name' value={product.name} onChange={handleInput} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput2" label="Product description" className="mb-3 bg-transparent text-black">
                                    <Form.Control as="textarea" className='bg-transparent text-black' placeholder="Enter Product description" name='description' value={product.description} onChange={handleInput} />
                                </FloatingLabel>
                                <div className="d-lg-flex">

                                    <div className='col-lg-6 col-12 pe-lg-2'>
                                        <FloatingLabel controlId="floatingInput3" label="Product price" className="mb-3 bg-transparent text-black">
                                            <Form.Control type="number" className='bg-transparent text-black' min={0} placeholder="Enter Product price" value={product.price} name='price' onChange={handleInput} />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-lg-6 col-12 ps-lg-2">
                                        <FloatingLabel controlId="floatingInput4" label="Product discount" className="mb-3 bg-transparent text-black">
                                            <Form.Control type="number" className='bg-transparent text-black' min={0} placeholder="Enter Product Discount" value={product.discount} name='discount' onChange={handleInput} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <FloatingLabel controlId="floatingInput6" label="Product category" className="mb-3 bg-transparent text-black">
                                    <Form.Control type="text" className='bg-transparent text-black' placeholder="Enter Product category" value={product.category} name='category' onChange={handleInput} />
                                </FloatingLabel>
                                <div className="d-lg-flex">

                                    <div className='col-lg-4 col-12 pe-lg-2'>
                                        <FloatingLabel controlId="floatingInput7" label="Product rating" className="mb-3 bg-transparent text-black">
                                            <Form.Control type="number" className='bg-transparent text-black' min={0} max={5} placeholder="Enter Product rating" value={product.rating} name='rating' onChange={handleInput} />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-lg-4 col-12 px-lg-2">
                                        <FloatingLabel controlId="floatingInput8" label="Product stock" className="mb-3 bg-transparent text-black">
                                            <Form.Control type="number" className='bg-transparent text-black' min={0} placeholder="Enter Product stock" value={product.stock} name='stock' onChange={handleInput} />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-lg-4 col-12 ps-lg-2">
                                        <FloatingLabel controlId="floatingInput10" label="Product color" className="mb-3 bg-transparent text-black">
                                            <Form.Control type="text" className='bg-transparent text-black' placeholder="Enter Product Color" value={product.color} name='color' onChange={handleInput} />
                                        </FloatingLabel>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className='col-6 pe-2'>

                                        <FloatingLabel controlId="floatingInput5" label="Product thumbnail" className="mb-3 bg-transparent text-black">
                                            <Form.Control type="text" className='bg-transparent text-black' placeholder="Enter Product thumbnail" value={product.thumbnail} name='thumbnail' onChange={handleInput2} />
                                        </FloatingLabel>
                                        <Button variant="dark" type='submit'>Submit</Button>{' '}
                                        <NavLink className='btn btn-dark' to={'/'}>Back</NavLink>
                                    </div>
                                    <div className="col-6 ps-2 d-none" id='prothumb'>
                                        <img src={product.thumbnail} alt="" className='img-thumbnail col-lg-2 col-12 col-sm-6' />
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

export default CreateProduct