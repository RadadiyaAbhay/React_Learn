import React, { useDebugValue, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './components/Sidebar/Sidebar'
import Products from './components/Products/Products'
import EditProduct from './components/EditProduct/EditProduct'
import CreateProduct from './components/CreateProduct/CreateProduct'
import Users from './components/Users/Users'
import EditUser from './components/EditUser/EditUser'
import { getProducts } from './services/actions/product.action'


function App() {
  let { isLogin } = useSelector(state => state.adminReducer);
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <>
      {
        isLogin ?
          (
            <>
              <Header />
              <div className="d-flex">
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="col-2 position-fixed" style={{ height: '93vh' }}>
                    <Sidebar />
                  </div>

                </div>
                <div className="col-12 col-lg-10">
                  <div className="col-12 px-3">
                    <Routes>
                      <Route path='/' element={<Login />} />
                      <Route path='/dashboard' className="bg-white" element={<Dashboard />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/createproduct" element={<CreateProduct />} />
                      <Route path="/editproduct" element={<EditProduct />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/edituser" element={<EditUser />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </>
          )
          :
          (<>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </>)
      }
    </>
  )
}

export default App