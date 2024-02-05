import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { googleSignIn, signUpAction } from '../../../services/actions/user.action'
import { useNavigate } from 'react-router'

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name:'',
    email: '',
    password: '',
    imgUrl : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  })
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(signUpAction(input))
    navigate('/')
    
  }
  const handleGoogle = async () =>{
    await dispatch(googleSignIn())
    navigate('/')
  }
  return (
    <>
      <div className='pb-5'>SignUpPage</div>
      <form onSubmit={handleSubmit}>

        <input className='border mx-5 p-2 block' type="text" onChange={handleInput} value={input.name} name='name' placeholder='enter your name' />
        <input className='border mx-5 p-2 block' type="email" autoComplete='username' onChange={handleInput} value={input.email} name='email' placeholder='enter your email' />
        <input className='border mx-5 p-2 block' type="password" name='password' autoComplete='current-password' onChange={handleInput} value={input.password} placeholder='enter your password' />
        <button className='rounded-md bg-gray-900 text-white p-2 mx-5' type='submit'>
          Signup
        </button>
        <button className='rounded-md bg-gray-900 text-white p-2 me-5' onClick={handleGoogle} type='button'>
          Google
        </button>
      </form>
    </>

  )
}

export default SignUp