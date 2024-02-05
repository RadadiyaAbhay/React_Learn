import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, getUsers, singleGetUser } from '../../services/actions/user.action';
import { Container, Dropdown, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Users() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users, isLoading, err } = useSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    const handleEdit = (id) => {
        dispatch(singleGetUser(id))
        navigate('/edituser')
    }

    const handleDelete = (id) => {
        dispatch(deleteUsers(id))
    }
    // console.log("users", users);
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
                        <h2 className='text-center text-black fw-bold pb-1'>Users</h2>
                        <Table striped hover className='shadow' responsive variant='light'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Mo. Number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr key={user.id} className='col-12'>
                                            <td>{index + 1}</td>
                                            <td className='col-1'><img src={user.imgUrl} className='img-width img-thumbnail rounded-circle'/></td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address}</td>
                                            <td className='text-center'>{user.phoneNumber}</td>
                                            <td className='ps-4 pe-3'>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='light' className='bg-transparent border-0'>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu variant='light' className='z-1'>
                                                        {/* <Dropdown.Item href="#" className='btn-light btn'>View</Dropdown.Item> */}
                                                        <Dropdown.Item onClick={() => { handleEdit(user.id) }} className='pb-2 btn-light btn'>Edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => { handleDelete(user.id) }} className='border-top pt-2 text-danger border-danger btn-light btn'>Delete</Dropdown.Item>
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

export default Users