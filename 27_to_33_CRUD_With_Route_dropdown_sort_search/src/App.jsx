import React from 'react'
import Header from './assets/components/Header/Header'
import { Route, Routes } from 'react-router'
import Create from './assets/components/Create/Create'
import Read from './assets/components/Read/Read'
import Update from './assets/components/Update/Update'
import View from './assets/components/View/View'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route element={<Read/>} path='/'/>
          <Route element={<Create/>} path='/create'/>
          <Route element={<Update/>} path='/update'/>
          <Route element={<View/>} path='/view'/>
        </Routes>
      </main>
    </>
  )
}

export default App
