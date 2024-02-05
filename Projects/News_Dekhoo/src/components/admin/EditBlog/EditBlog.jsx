import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { editBlogs } from '../../../services/actions/blog.action';

function EditBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let {blog} = useSelector(state => state.blogReducer)
  let [input, setInput] = useState(blog)
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await dispatch(editBlogs(input))
    navigate('/blogs')
  }
  return (
    <>
      <div>EditBlog</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" className='border' id="title" value={input.title} onChange={handleInput} name="title" /><br />
        <label htmlFor="author">Author: </label>
        <input type="text" id="author" className='border' value={input.author} name="author" onChange={handleInput} /><br />
        <label htmlFor="url">URL: </label>
        <input type="text" id="url" className='border' name="url" value={input.url} onChange={handleInput} /><br />
        <button type="submit" className='m-2 px-2 py-1 bg-gray-500 text-white border rounded'>Submit</button>
      </form>
    </>
  )
}

export default EditBlog