import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createUsers } from '../../services/actions/users.action';
import { useNavigate } from 'react-router';

function CreateUser(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput , setUserInput] = useState(
    {
      name:"",
      email: "",
      password: "",
      mnumber : "",
      username: "",
  });

  const handleInput = (e) => {
    const key = e.target.name;
    
      setUserInput({...userInput , [key] : e.target.value});
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUsers(userInput))
    navigate('/showusers')
  }
  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
        <h2 className='pb-2 font1 text-center'>Create User</h2>

            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
                <Form.Control type="text" placeholder="Enter Name" name='name' value={userInput.name} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
                <Form.Control type="text" placeholder="Enter email" name='email' value={userInput.email} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput5" label="username" className="mb-3">
                <Form.Control type="text" placeholder="Enter username" name='username' value={userInput.username} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Enter password" name='password' value={userInput.password} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput4" label="Mobile Number" className="mb-3">
                <Form.Control type="text" placeholder="Enter Mobile Number" name='mnumber' value={userInput.mnumber} onChange={handleInput} required/>
              </FloatingLabel>
              <Button variant="dark" type='submit'>Submit</Button>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CreateUser