import { Routes,Route } from "react-router-dom"
import Login from "./Admin/Login"
import AdminDash from "./Admin/AdminDash"
function App() {


  return (
    <>
      <Routes>
        <Route path="/admin" element={<Login/>}/>
        <Route path="/dash" element={<AdminDash/>}/>
         
      </Routes>
    </>
  )
}

export default App
