import React from 'react'
import Slider from './components/Slider/Slider'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Slider2 from './components/Slider2/Slider2'
import Slick from './components/Slick/Slick'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Slider/>} path='/'/>
      <Route element={<Slider2/>} path='/slider2'/>
      <Route element={<Slick/>} path='/slick'/>
    </Routes>
    </>
  )
}

export default App
