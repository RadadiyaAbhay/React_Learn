import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bor'>
        <div className='maa bor'>
          <p><span className='lab'>Name :</span> Radadiya Abhay</p>
          <p><span className='lab'>Occupation :</span> MERN Stack Developer</p>
          <p><span className='lab'>Email :</span> abhi5924@gmail.com</p>
          <p><span className='lab'>Contact No. :</span> 6355236745</p>
          <p><span className='lab'>Age :</span> 19 Years</p>
        </div>
      </div>
    </>
  )
}

export default App
