import React, { useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { editUsers } from '../../services/actions/user.action';

function EditUser() {
  const { user, isLoading, err } = useSelector(state => state.userReducer);
  const [userInput, setUserInput] = useState(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setUserInput(user)
  }, [user])
  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(editUsers(userInput));
    navigate('/users')
  }
  // console.log("EditUser", user);

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
      <>
        <div className="flex mt-4">
          <p className="py-2 border bg-secondary-subtle  px-3 col-12 d-flex justify-content-between rounded-3 fw-semibold border-2 border-danger text-danger align-items-center">{err.code}<span></span></p>
        </div>
      </>
    )
  } else if (userInput != null) {
    return (
      <>
        <Container className='pt-5'>
          <Row>
            <Form onSubmit={handleClick}>
              <div>
                <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3 bg-transparent text-black">
                  <Form.Control className='bg-transparent text-black' type="text" placeholder="Enter name" name='name' value={userInput.name} onChange={handleInput} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput2" label="Address" className="mb-3 bg-transparent text-black">
                  <Form.Control as="textarea" className='bg-transparent text-black' placeholder="Enter Address" name='address' value={userInput.address} onChange={handleInput} />
                </FloatingLabel>

                <div className="d-lg-flex">

                  <div className='col-lg-6 col-12 pe-lg-2'>
                    <FloatingLabel controlId="floatingInput7" label="Email" className="mb-3 bg-transparent text-black">
                      <Form.Control type="email" className='bg-transparent text-black' placeholder="Enter Email" value={userInput.email} name='email' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                  <div className="col-lg-6 col-12 ps-lg-2">
                    <FloatingLabel controlId="floatingInput8" label="Mobile Number" className="mb-3 bg-transparent text-black">
                      <Form.Control type="number" className='bg-transparent text-black' placeholder="Enter phone number" value={userInput.phoneNumber} name='phoneNumber' onChange={handleInput} />
                    </FloatingLabel>
                  </div>
                </div>
                <div className="d-flex">
                  <div className='col-6 pe-2'>

                    <FloatingLabel controlId="floatingInput5" label="Your Img Url" className="mb-3 bg-transparent text-black">
                      <Form.Control type="text" className='bg-transparent text-black' placeholder="Enter imgUrl" value={userInput.imgUrl} name='imgUrl' onChange={handleInput} />
                    </FloatingLabel>
                    <Button variant="dark" type='submit'>Update</Button>{' '}
                    <NavLink className='btn btn-dark' to={'/'}>Back</NavLink>
                  </div>
                  <div className="col-6 ps-2" id='prothumb'>
                    <img src={userInput.imgUrl} alt="" className='img-thumbnail col-lg-2 col-12 col-sm-6' />
                  </div>
                </div>
              </div>
            </Form>

          </Row>
        </Container>
      </>
    )
  }
}

export default EditUser