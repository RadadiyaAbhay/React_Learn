import Todos from "./components/Todos/Todos";
import './App.css'

function App() {

  const todoArr = [{ id : 1, name:"Home"} ,
  { id : 2, name:"Share"} ,
   { id : 3, name:"fews"} ,
    { id : 5, name:"Menu"},
    { id : 6, name:"About"},
    { id : 7, name:"Contact"}]

  return (
    <>
      <Todos  menu={todoArr} />
    </>
  )
}

export default App
