import React, { useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { googleSignIn, signInAction } from '../../services/actions/authentication.action';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const {isLogin} = useSelector(state => state.authenticationReducer)

  const [user, setuser] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    await dispatch(googleSignIn())
    navigate('/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signInAction(user))
    if(isLogin){
      navigate('/dashboard')
    }

  }



    return (
      <>
        <Container className='pt-5'>
          <Row>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" value={user.email} name='email' autoComplete="current-email" onChange={handleInput} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={handleInput} autoComplete="current-password"/>
              </FloatingLabel>
              <Button variant='dark' type='submit' className='mt-2 me-2'>Sign In</Button>
              <Button variant='dark' className='mt-2' onClick={handleGoogleSignIn}>Google With Sign In</Button>
            </Form>
          </Row>
        </Container>
      </>
    )
  
}

export default SignIn