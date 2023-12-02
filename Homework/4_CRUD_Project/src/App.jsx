import React from 'react'
import Create from './components/Create/Create'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import View from './components/View/View'
import Edit from './components/Edit/Edit'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
      
    </>
  )
}

export default App
