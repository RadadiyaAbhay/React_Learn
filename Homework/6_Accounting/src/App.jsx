import React from 'react'
import Header from './Header/Header'
import { Route, Routes } from 'react-router'
import  Payment  from './Payment/Payment';
import  Sale  from './Sale/Sale';
import Purchase from './Purchase/Purchase';
import Receipt from './Receipt/Receipt';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/purchase' element={<Purchase/>}/>
        <Route path='/receipt' element={<Receipt/>}/>
      </Routes>
    </>
  )
}

export default App