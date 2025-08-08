import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'

function Categories() {
  const [category,setCategory] = useState([])
    useEffect(() => {
  console.log("useEffect running...");

  async function fetchCategories() {
    try {
      console.log("Fetching categories...");
      const result = await axios.get('http://localhost:3000/admin/categories',{withCredentials:true});
      const categories = result.data.allCategories
      setCategory(categories)
      console.log(categories);
      
    } catch (error) {
      console.error('Error fetching :', error);
    }
  }

  fetchCategories();
},[]);
  return (
    <div className="flex">
          <Sidebar />
        
          <div className="ml-64 p-6 w-full">
            

<table class="min-w-full divide-y divide-gray-200">
    <thead>
        <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DESCRIPTION</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {
        category.map((item,index)=>{
           return(  <tr key={index}>
            <td class="px-6 py-4 whitespace-nowrap">{item._id}</td>
            <td class="px-6 py-4 whitespace-nowrap">{item.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">{item.description}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
            </td>
        </tr>)
        })
      }
       
       
    </tbody>
</table>


          </div>
        </div>
  )
}

export default Categories