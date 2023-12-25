import { Route, Routes } from 'react-router'
import './App.css'
import ShowProducts from './components/ShowProducts/ShowProducts'
import Dashboard from './components/Dashboard/Dashboard'
import CreateAdmin from './components/CreateAdmin/CreateAdmin'
import EditAdmin from './components/EditAdmin/EditAdmin'
import ShowAdmins from './components/ShowAdmins/ShowAdmins'
import CreateProduct from './components/CreateProduct/CreateProduct'
import CreateUser from './components/CreateUser/CreateUser'
import EditProduct from './components/EditProduct/EditProduct'
import EditUser from './components/EditUser/EditUser'
import ShowUsers from './components/ShowUsers/ShowUsers'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { showAdmins } from './services/actions/admins.action'
import { showUsers } from './services/actions/users.action'
import { showProducts } from './services/actions/products.action'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAdmins())
    dispatch(showUsers())
    dispatch(showProducts())
  }, [])
  return (
    <>
      <div className="d-flex font1">
        <div className='col-2' id='sidebar'>
          <div className="d-block col-2 bg-warning-subtle position-fixed" style={{ height: "100vh" }}>
            <Sidebar />
          </div>
        </div>
        <div className="col-10" id='header'>
          <div className="col-12 position-sticky top-0 z-3">
            <Header />
          </div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/createadmin' element={<CreateAdmin />} />
            <Route path='/editadmin' element={<EditAdmin />} />
            <Route path='/showadmins' element={<ShowAdmins />} />
            <Route path='/createproduct' element={<CreateProduct />} />
            <Route path='/createuser' element={<CreateUser />} />
            <Route path='/editproduct' element={<EditProduct />} />
            <Route path='/showproducts' element={<ShowProducts />} />
            <Route path='/edituser' element={<EditUser />} />
            <Route path='/showusers' element={<ShowUsers />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
