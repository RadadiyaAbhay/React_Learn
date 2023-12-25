import React, {useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doneEditAdmins } from '../../services/actions/admins.action';

function EditAdmin() {
  const dispatch = useDispatch();
  const { admin , isLoading ,err} = useSelector(state => state.adminsReducer);
  const navigate = useNavigate();

  const [adminInput , setAdminInput] = useState(admin);
  const handleInput = (e) => {
    const key = e.target.name;
      setAdminInput({...adminInput , [key] : e.target.value});
  }

  const updateAdmin = (e ,id) => {
    e.preventDefault();

    dispatch(doneEditAdmins(id , adminInput));
    navigate("/showadmins")
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
  }else if(adminInput != null){
  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
          <h2 className='pb-2 font1 text-center'>Update Admin</h2>

            <Form onSubmit={(e) => updateAdmin(e, adminInput.id)}>
            <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
                <Form.Control type="text" placeholder="Enter Name" name='name' value={adminInput.name} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
                <Form.Control type="text" placeholder="Enter email" name='email' value={adminInput.email} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput5" label="usernmae" className="mb-3">
                <Form.Control type="text" placeholder="Enter username" name='username' value={adminInput.username} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Enter password" name='password' value={adminInput.password} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput4" label="Security Key" className="mb-3">
                <Form.Control type="text" placeholder="Enter Security Key" name='skey' value={adminInput.skey} onChange={handleInput} required/>
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

export default EditAdmin