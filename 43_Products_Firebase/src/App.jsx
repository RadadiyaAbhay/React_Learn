import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Products from './components/Products/Products';
import { Route, Routes } from 'react-router';
import EditProduct from './components/EditProduct/EditProduct';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'


function App() {

  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="col-2">
          <div className="col-2 position-fixed" style={{ height: '93vh' }}>
            <Sidebar/>
          </div>

        </div>
        <div className="col-10">
          <div className="col-12 px-3">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/createproduct" element={<CreateProduct />} />
              <Route path="/editproduct" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App