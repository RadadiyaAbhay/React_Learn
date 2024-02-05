import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { adminLogin } from '../../../services/actions/admin.action';

function LogIn() {
  const { isLogin } = useSelector(state => state.adminReducer)

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
    await dispatch(adminLogin(input))
    navigate('/')
  }

  useEffect(()=>{
    if(isLogin){
      navigate('/')
    }
  },[isLogin])

  return (
    <>
      <div className='pb-5'>admin</div>
      <form onSubmit={handleSubmit}>

        <input className='border mx-5 p-2  block' type="email" autoComplete='username' onChange={handleInput} value={input.email} name='email' placeholder='enter your email' />
        <input className='border mx-5 p-2  block' type="password" name='password' autoComplete='current-password' onChange={handleInput} value={input.password} placeholder='enter your password' />
        <button className='rounded-md bg-gray-900 text-white p-2 mx-5' type='submit'>
          Login
        </button>
      </form>
    </>

  )
}

export default LogIn