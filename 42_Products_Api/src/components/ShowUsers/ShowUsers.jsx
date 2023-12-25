import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import {PencilSquare, Trash } from 'react-bootstrap-icons';
import { Container, Row } from 'react-bootstrap';
import { deleteUsers, editUsers, showUsers } from '../../services/actions/users.action';
import { useNavigate } from 'react-router';

function ShowUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showUsers());
  },[])

  const { users , isLoading ,err} = useSelector(state => state.usersReducer);
  const handleEdit = (id) =>{
    dispatch(editUsers(id))
    setTimeout(() => {
      navigate("/edituser")
    }, 100);
  }


  const handleDelete = (id) =>{
    dispatch(deleteUsers(id))
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
  }else if(users.length == 0){
    return(
      <>
      <Container>
        <Row>
          <p className='pt-5 fw-bold'>No Users here</p>
        </Row>
      </Container>
      </>
    )

  }else{
    return (
      <>
      <Container className='pt-5 font2'>
        <Row>
        <h2 className='pb-2 font1 text-center'>Users</h2>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.mnumber}</td>
                    <td><button className='btn' onClick={() => {
                      handleEdit(user.id)
                    }}><PencilSquare className='fs-5'/></button>
                    <button className='btn' onClick={() => {
                      handleDelete(user.id)
                    }}><Trash className='fs-5'/></button>
                    </td>
                  </tr>
                )
              })
            }
  
          </tbody>
        </Table>
        </Row>
      </Container>

      </>
    )    

  }
}

export default ShowUsers