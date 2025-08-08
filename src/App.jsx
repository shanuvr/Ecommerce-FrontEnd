import { Routes,Route } from "react-router-dom"
import Login from "./Admin/Login"
import AdminDash from "./Admin/AdminDash"
import Products from "./Admin/products"
import Categories from "./Admin/Categories"
import User from "./Admin/User"
import EditProduct from "./Admin/EditProduct"
function App() {


  return (
    <>
      <Routes>
        <Route path="/admin" element={<Login/>}/>
        <Route path="/dash" element={<AdminDash/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/home" element={<User/>}/>
        <Route path="/edit-product/:id" element={<EditProduct/>}/>
         
      </Routes>
    </>
  )
}

export default App
