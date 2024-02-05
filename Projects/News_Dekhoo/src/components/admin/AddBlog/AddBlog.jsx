import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createBlogs, getBlogs } from '../../../services/actions/blog.action';

function AddBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getBlogs())
  },[])
  let {blogs} = useSelector(state => state.blogReducer)
  if(blogs[0] == null){
    blogs = [{uin : 0 }]
  }

  let [input, setInput] = useState({
    title: '',
    author: '',
    url: '',
    uin : blogs[0].uin +1
  })
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  input.uin = blogs[0].uin +1
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(input.uin);
    await dispatch(createBlogs(input))
    navigate('/blogs')
  }
  return (
    <>
      <div>AddBlog</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" className='border' id="title" value={input.title} onChange={handleInput} name="title" /><br/>
        <label htmlFor="author">Author: </label>
        <input type="text" id="author" className='border' value={input.author} name="author" onChange={handleInput}/><br/>
        <label htmlFor="url">URL: </label>
        <input type="text" id="url" className='border' value={input.url} name="url" onChange={handleInput}/><br/>
        <button type="submit" className='m-2 px-2 py-1 bg-gray-500 text-white border rounded'>Submit</button>
      </form>
    </>
  )
}

export default AddBlog