import { useState } from 'react';
import UnControlled from './components/UnControlled/UnControlled'
import Controlled from './components/Controlled/Controlled'
import HandlingForm from './components/HandlingForm/HandlingForm'
import DynamicForm from './components/DynamicForm/DynamicForm'
import Form from './components/Form/Form'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Form/> 
    <Controlled/>
    <UnControlled/>      */}
    {/* <HandlingForm/>      */}
    <DynamicForm/>
        
    </>
  )
}

export default App
