import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './components/Dashboard/Dashboard'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </>
  )
}

export default App