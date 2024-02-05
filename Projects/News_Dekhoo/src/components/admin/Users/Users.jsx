import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, getUsers, singleGetUser } from '../../../services/actions/user.action'
import { useNavigate } from 'react-router'

function Users() {
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const { users } = useSelector(state => state.userReducer)
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const handleDelete = (id) =>{
    dispatch(deleteUsers(id))
  }

  const handleEdit = async (id) =>{
    await dispatch(singleGetUser(id))
    navigate('/edituser')
  }
  return (
    <>
      <div>Users</div>
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.email}</p>
              <button type="button" className='m-2 px-2 py-1 bg-gray-500 text-white border rounded' onClick={() =>{handleEdit(user.id)}}>Edit</button>
              <button type="button" className='m-2 px-2 py-1 bg-gray-500 text-white border rounded' onClick={() =>{handleDelete(user.id)}}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}

export default Users