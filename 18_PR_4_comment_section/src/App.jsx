import { useState } from 'react'
import Post from './components/Post/Post';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Post/>
    </>
  )
}

export default App
