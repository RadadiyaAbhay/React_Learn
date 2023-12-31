import React from 'react'
import { useDispatch } from 'react-redux'
import { mainAction } from './services/actions/studentAction'

function App() {
  let stuData = {
    id : 25,
    name : "Radadiya Abhay",
    age: 19,
    gender : "Male",
    address : "Surat"
  }
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(mainAction(stuData));
  }
  return (
    <>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App