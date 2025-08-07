import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';


const AdminDash = () => {
  const [product,setProducts] = useState([]);
  useEffect(()=>{
    try{
   async function getProducts() {
     const result = await axios.get('http://localhost:3000/admin/products',{withCredentials:true})
      console.log(result.data.products);
      const productVariable = result.data.products;
      setProducts(productVariable)
   }
   getProducts()
      
    }catch(err){

    }
  },[])
  return (
    <div>
      <Sidebar/>
      <h1>Admin Dash</h1>
      
      <table className='border-black'>
        <tr>
          <th className="border border-black px-4 py-2">Photo</th>
      <th className="border border-black px-4 py-2">Name</th>
      <th className="border border-black px-4 py-2">Price</th>
      <th className="border border-black px-4 py-2">Action</th>
        </tr>
    {
      product.map((item)=>{
        return( <tr>
           <td className="border border-black px-4 py-2">
        <img src={item.productImage} alt="" />
      </td>
      <td className="border border-black px-4 py-2">{item.productName}</td>
      <td className="border border-black px-4 py-2">{item.productPrice}</td>
      <td className="border border-black px-4 py-2 space-x-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
      </td>
        </tr>)
      })
    }
       
      </table>
    </div>
  )
}

export default AdminDash