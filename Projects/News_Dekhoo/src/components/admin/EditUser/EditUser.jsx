import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { editUsers } from '../../../services/actions/user.action';

function EditUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let {user} = useSelector(state => state.userReducer)
  let [input, setInput] = useState(user)
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(editUsers(input))
    navigate('/users')
  }
  return (
    <>
      <div>EditBlog</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" className='border' id="name" value={input.name} onChange={handleInput} name="name" /><br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" className='border' value={input.email} name="email" onChange={handleInput} /><br />
        <label htmlFor="imgUrl">ImgUrl: </label>
        <input type="text" id="imgUrl" className='border' name="imgUrl" value={input.imgUrl} onChange={handleInput} /><br />
        <button type="submit" className='m-2 px-2 py-1 bg-gray-500 text-white border rounded'>Submit</button>
      </form>
    </>
  )
}

export default EditUser