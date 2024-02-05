
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './containers/user/HomePage/HomePage'
import AboutPage from './containers/user/AboutPage/AboutPage'
import BlogDetailsPage from './containers/user/BlogDetailsPage/BlogDetailsPage'
import BlogsPage from './containers/user/BlogsPage/BlogsPage'
import SignInPage from './containers/user/SignInPage/SignInPage'
import SignUpPage from './containers/user/SignUpPage/SignUpPage'
import Header from './components/user/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import LogInPage from './containers/admin/LoginPage/LogInPage'
import Dashboard from './containers/admin/Dashboard/Dashboard'
import AdminHeader from './components/admin/AdminHeader/AdminHeader'
import Sidebar from './components/admin/Sidebar/Sidebar'
import Blogs from './components/admin/Blogs/Blogs'
import AddBlog from './components/admin/AddBlog/AddBlog'
import EditBlog from './components/admin/EditBlog/EditBlog'
import Users from './components/admin/Users/Users'
import { useEffect } from 'react'
import { getBlogs } from './services/actions/blog.action'
import EditUser from './components/admin/EditUser/EditUser'
import NotFound from './components/NotFound/NotFound'
import SettingPage from './containers/admin/SettingPage/SettingPage'
import WebPage from './containers/admin/WebPage/WebPage'
import Comments from './components/admin/Comments/Comments'

function App() {
  const { isRole } = useSelector(state => state.userReducer)
  const { isLogin } = useSelector(state => state.adminReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogs())
  }, [])
  return (
    <>
      {
        isLogin ? (
          <>
            <div className='flex'>
              <div className="xl:w-2/12 lg:w-3/12 fixed lg:block  hidden">
                <Sidebar />
              </div>
              <div className='xl:w-2/12 lg:w-3/12 hidden lg:block'></div>
              <div className="xl:w-10/12 lg:w-9/12 w-full">
                <AdminHeader />
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/addblog" element={<AddBlog />} />
                  <Route path="/editblog" element={<EditBlog />} />
                  <Route path="/edituser" element={<EditUser />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/settingpage" element={<SettingPage />} />
                  <Route path="/webpage" element={<WebPage />} />
                  <Route path="/comments" element={<Comments />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutpage" element={<AboutPage />} />
              <Route path="/blogdetailspage" element={<BlogDetailsPage />} />
              <Route path="/blogspage" element={<BlogsPage />} />
              <Route path="/signuppage" element={<SignUpPage />} />
              <Route path="/signinpage" element={<SignInPage />} />
              {
                isRole ? (<Route path="/loginpage" element={<LogInPage />} />) : (<></>)
              }
            </Routes>
          </>
        )
      }
    </>
  )
}

export default App
