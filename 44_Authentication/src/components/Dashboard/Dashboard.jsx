import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AddUser } from '../../services/actions/users.action';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.authenticationReducer)
  const navigate = useNavigate();
  const data ={
    name: "John Doe",
    email:"john@gmail.com"
  }
  const handleData = () => {
    dispatch(AddUser(data));
  }

  useEffect(() =>{

    if(!isLogin){
      navigate('/signin');
    }

  })
  

    return (
      <>
        <Container className='pt-5'>
          <Row>
            <Button variant='dark' onClick={handleData}>Add Click</Button>
          </Row>
        </Container>
      </>
    )
  }

export default Dashboard