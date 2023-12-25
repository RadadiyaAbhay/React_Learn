import React, {useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doneEditUsers } from '../../services/actions/users.action';

function EditUser() {
  const dispatch = useDispatch();
  const { user , isLoading ,err} = useSelector(state => state.usersReducer);
  const navigate = useNavigate();

  const [userInput , setUserInput] = useState(user);
  const handleInput = (e) => {
    const key = e.target.name;
      setUserInput({...userInput , [key] : e.target.value});
  }

  const updateUser = (e ,id) => {
    e.preventDefault();

    dispatch(doneEditUsers(id , userInput));
    navigate("/showusers")
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
  }else if(userInput != null){
  return (
    <>
      <section className='pt-5'>
        <Container>
          <Row>
          <h2 className='pb-2 font1 text-center'>Update User</h2>

            <Form onSubmit={(e) => updateUser(e, userInput.id)}>
            <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
                <Form.Control type="text" placeholder="Enter Name" name='name' value={userInput.name} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput2" label="Email" className="mb-3">
                <Form.Control type="text" placeholder="Enter email" name='email' value={userInput.email} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput5" label="usernmae" className="mb-3">
                <Form.Control type="text" placeholder="Enter username" name='username' value={userInput.username} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Enter password" name='password' value={userInput.password} onChange={handleInput} required/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput4" label="Mobile Number" className="mb-3">
                <Form.Control type="text" placeholder="Enter Mobile Number" name='mnumber' value={userInput.mnumber} onChange={handleInput} required/>
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

export default EditUser