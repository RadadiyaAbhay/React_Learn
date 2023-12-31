import { Route, Routes } from 'react-router'
import './App.css'
import CreateEmp from './components/CreateEmp/CreateEmp'
import Header from './components/Header/Header'
import ViewEmp from './components/ViewEmp/ViewEmp'
import EditEmp from './components/EditEmp/EditEmp'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ViewEmp />} />
        <Route path="/create" element={<CreateEmp />} />
        <Route path="/edit" element={<EditEmp/>} />
      </Routes>
    </>
  )
}

export default App
