import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducts, getProducts, singleGetProduct } from '../../services/actions/product.action';
import { Container, Dropdown, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, isLoading, err } = useSelector(state => state.productReducer)
    useEffect(() => {
        dispatch(getProducts());
    }, [])

    const handleEdit = (id) => {
        dispatch(singleGetProduct(id))
        navigate('/editproduct')
    }

    const handleDelete = (id) => {
        dispatch(deleteProducts(id))
    }
    // console.log("products", products);
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
                <Container className='pt-4'>
                    <Row>
                        <h2 className='text-center text-black fw-bold pb-1'>Products</h2>
                        <Table striped hover className='shadow'  responsive variant='light'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody >
                                {products.map((product, index) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{index + 1}</td>
                                            <td className='col-1'><img src={product.thumbnail} className='img-width img-thumbnail' /></td>
                                            <td><p style={{height:'100px'}} className='overflow-hidden'>{product.name}</p></td>
                                            <td><p style={{height:'100px'}} className='overflow-hidden'>{product.description}</p></td>
                                            <td>{product.price}</td>
                                            <td className='text-center'>{product.discount}</td>
                                            <td className='ps-4 pe-3'>
                                                <Dropdown style={{ zIndex: '10!important' }}>
                                                    <Dropdown.Toggle variant='light' className='bg-transparent border-0'>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu variant='light'>
                                                        {/* <Dropdown.Item href="#" className='btn-light btn'>View</Dropdown.Item> */}
                                                        <Dropdown.Item onClick={() => { handleEdit(product.id) }} className='pb-2 btn-light btn'>Edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => { handleDelete(product.id) }} className='border-top pt-2 text-danger border-danger btn-light btn'>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Products