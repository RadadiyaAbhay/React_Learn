import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { googleSignIn, signInAction } from '../../../services/actions/user.action';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(signInAction(input))
    navigate('/')
  }
  const handleGoogle = async () =>{
    await dispatch(googleSignIn())
    navigate('/')
  }
  return (
    <>
      <div className='pb-5'>SignInPage</div>
      <form onSubmit={handleSubmit}>

        <input className='border mx-5 p-2  block' type="email" autoComplete='username' onChange={handleInput} value={input.email} name='email' placeholder='enter your email' />
        <input className='border mx-5 p-2  block' type="password" name='password' autoComplete='current-password' onChange={handleInput} value={input.password} placeholder='enter your password' />
        <button className='rounded-md bg-gray-900 text-white p-2 mx-5' type='submit'>
          Signin
        </button>
        <button className='rounded-md bg-gray-900 text-white p-2 me-5' type='button' onClick={handleGoogle}>
          Google
        </button>
      </form>
    </>

  )
}

export default SignIn