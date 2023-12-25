import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createAdmins } from '../../services/actions/admins.action';
import { useNavigate } from 'react-router';

function CreateAdmin(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [adminInput , setAdminInput] = useState(
    {
      name:"",
      email: "",
      password: "",
      skey : "",
      username: "",
  });

  const handleInput = (e) => {
    const key = e.target.name;
    
      setAdminInput({...adminInput , [key] : e.target.value});
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAdmins(adminInput))
    navigate('/showadmins')
  }
  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
        <h2 className='pb-2 font1 text-center'>Create Admin</h2>

            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
                <Form.Control type="text" placeholder="Enter Name" name='name' value={adminInput.name} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
                <Form.Control type="text" placeholder="Enter email" name='email' value={adminInput.email} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput5" label="username" className="mb-3">
                <Form.Control type="text" placeholder="Enter username" name='username' value={adminInput.username} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Enter password" name='password' value={adminInput.password} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput4" label="Security Key" className="mb-3">
                <Form.Control type="text" placeholder="Enter Security Key" name='skey' value={adminInput.skey} onChange={handleInput} required/>
              </FloatingLabel>
              <Button variant="dark" type='submit'>Submit</Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CreateAdmin