import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function EditProduct() {
    const {id} = useParams()
  
  return (
    
    <div>
        <h1>{id}</h1>
        <div className='flex flex-col gap-0 bg-gray-50 '>
            <input type="text" name="productName" id="" placeholder='product name' />
            <input type="text" name="productPrice" id="" placeholder='product price' />
            <input type="text" name="productStock" id="" placeholder='product stock'/>
            <input type="text" name="productDescription" id="" placeholder='product Description' />
            <input type="text" name="product Category" id="" placeholder='product category' />
            <button>Update</button>
        </div>
    </div>
  )
}

export default EditProduct