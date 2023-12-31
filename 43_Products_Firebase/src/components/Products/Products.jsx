import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducts, getProducts, singleGetProduct } from '../../services/actions/product.action';
import { Container, Dropdown, Row, Table } from 'react-bootstrap';
import { PencilSquare, ThreeDots, TrashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';

function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector(state => state.productReducer)
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
    console.log("products", products);
    return (
        <>
            <Container className='pt-4'>
                <Row>
                    <h2 className='text-center text-white fw-bold pb-1'>Products</h2>
                    <Table striped hover responsive variant='dark'>
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
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={product.id}>
                                        <td>{index + 1}</td>
                                        <td className='col-1'><img src={product.thumbnail} className='img-thumbnail' /></td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td className='text-center'>{product.discount}</td>
                                        {/* <td className='col-1'>
                                            <button className='btn fw-bold fs-4 ps-0' ><PencilSquare className='text-success'/></button>
                                            <button className='btn fw-bold fs-4 ps-1' ><TrashFill className='text-danger'/></button>
                                        </td> */}
                                        <td className='ps-4 pe-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='dark' className='bg-transparent border-0'>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu variant='dark' className='z-1'>
                                                    <Dropdown.Item href="#" className='btn-dark btn'>View</Dropdown.Item>
                                                    <Dropdown.Item onClick={() =>{handleEdit(product.id)}} className='pb-2 btn-dark btn'>Edit</Dropdown.Item>
                                                    <Dropdown.Item onClick={() =>{handleDelete(product.id)}} className='border-top text-danger border-danger btn-dark btn'>Delete</Dropdown.Item>
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

export default Products