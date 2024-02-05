import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOutAction } from '../../../services/actions/user.action'

function Header() {
  const { isSignIn, isRole } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignOut = async () => {
    await dispatch(signOutAction())
    navigate('/')
  }
  return (
    <div className='bg-gray-700 d-flex py-3'>
      <NavLink to={'/'} className="px-5 text-white font-bold">HomePage</NavLink>
      <NavLink to={'/blogspage'} className="px-5 text-white font-bold">BlogsPage</NavLink>
      {
        isSignIn ? (<>
          <p onClick={handleSignOut} className="px-5 text-white inline font-bold point">SignOut</p>
          {
            isRole ? (<>
              <NavLink to={'/loginpage'} className="px-5 text-white font-bold">Admin</NavLink>
            </>) : (<></>)
          }
        </>) : (
          <>
            <NavLink to={'/signuppage'} className="px-5 text-white font-bold">SignUp</NavLink>
            <NavLink to={'/signinpage'} className="px-5 text-white font-bold">SignIn</NavLink>
          </>
        )
      }
    </div>
  )
}

export default Header