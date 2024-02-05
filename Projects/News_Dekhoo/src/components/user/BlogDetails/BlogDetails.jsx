import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function BlogDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let {blog} = useSelector(state => state.blogReducer)
  let [input, setInput] = useState(blog)

  return (
    <>
      <div>Blog Details</div>
        <p>{input.title}</p>      
        <p>{input.author}</p>      
        <p>{input.url}</p>      
    </>
  )
}

export default BlogDetails