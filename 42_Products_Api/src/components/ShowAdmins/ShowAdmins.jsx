import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import {PencilSquare, Trash } from 'react-bootstrap-icons';
import { Container, Row } from 'react-bootstrap';
import { deleteAdmins, editAdmins, showAdmins } from '../../services/actions/admins.action';
import { useNavigate } from 'react-router';

function ShowAdmins() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showAdmins());
  },[])

  const { admins , isLoading ,err} = useSelector(state => state.adminsReducer);
  const handleEdit = (id) =>{
    dispatch(editAdmins(id))
    setTimeout(() => {
      navigate("/editadmin")
    }, 100);
  }


  const handleDelete = (id) =>{
    dispatch(deleteAdmins(id))
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
  }else if(admins.length == 0){
    return(
      <>
      <Container>
        <Row>
          <p className='pt-5 fw-bold'>No Admins here</p>
        </Row>
      </Container>
      </>
    )

  }else{
    return (
      <>
      <Container className='pt-5 font2'>
        <Row>
        <h2 className='pb-2 font1 text-center'>Admins</h2>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Security Key</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              admins.map((admin, index) => {
                return (
                  <tr key={admin.id}>
                    <td>{index + 1}</td>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>{admin.username}</td>
                    <td>{admin.password}</td>
                    <td>{admin.skey}</td>
                    <td><button className='btn' onClick={() => {
                      handleEdit(admin.id)
                    }}><PencilSquare className='fs-5'/></button>
                    <button className='btn' onClick={() => {
                      handleDelete(admin.id)
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

export default ShowAdmins