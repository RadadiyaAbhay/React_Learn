import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlogs, getBlogs, singleGetBlog } from '../../../services/actions/blog.action'
import { useNavigate } from 'react-router'

function Blogs() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { blogs } = useSelector(state => state.blogReducer)
  useEffect(() => {
    dispatch(getBlogs())
  }, [])

  const handleView = async (id) =>{
    await dispatch(singleGetBlog(id))
    navigate('/blogdetailspage')
  }
  return (
    <>
      <div>Blogs</div>
      {
        blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <p>{blog.title}</p>
              <button type="button" className='m-2 px-2 py-1 bg-gray-500 text-white border rounded' onClick={() => { handleView(blog.id) }}>view</button>
            </div>
          )
        })
      }
    </>
  )
}

export default Blogs