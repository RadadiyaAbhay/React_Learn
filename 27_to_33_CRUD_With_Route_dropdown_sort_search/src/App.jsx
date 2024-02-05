import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Create from './components/Create/Create'
import Read from './components/Read/Read'
import Update from './components/Update/Update'
import View from './components/View/View'
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
