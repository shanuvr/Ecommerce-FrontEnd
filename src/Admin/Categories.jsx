import React from 'react'
import Sidebar from './Sidebar'

function Categories() {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className=' ml-65 max-w-full py-6'>
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
        </div>
    </div>
  )
}

export default Categories