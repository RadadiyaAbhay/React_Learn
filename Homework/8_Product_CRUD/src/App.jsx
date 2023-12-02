import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Read from './components/Read/Read'
import View from './components/View/View'
import Update from './components/Update/Update'
import Create from './components/Create/Create'
import Admin from './components/Admin/Admin'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route element={<Read/>} path="/"/>
        <Route element={<View/>} path="/view"/>
        <Route element={<Update/>} path="/update"/>
        <Route element={<Create/>} path="/create"/>
        <Route element={<Admin/>} path="/admin"/>
      </Routes>
    </>
  )
}

export default App
