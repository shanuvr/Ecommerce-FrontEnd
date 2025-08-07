import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

function Products() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await axios.get('http://localhost:3000/admin/products', {
          withCredentials: true,
        });
        console.log(result.data);
        setProducts(result.data.products);
      } catch (err) {
        console.error(err);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <table className="border-collapse border border-black w-full">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Photo</th>
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Price</th>
              <th className="border border-black px-4 py-2">Stock</th>
              <th className="border border-black px-4 py-2">Description</th>
              <th className="border border-black px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">
                  <img
                    src={`http://localhost:3000/${item.productImage}`} 
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border border-black px-4 py-2">{item.productName}</td>
                <td className="border border-black px-4 py-2">₹{item.productPrice}</td>
                <td className="border border-black px-4 py-2">{item.productStock}</td>
                <td className="border border-black px-4 py-2">{item.productDescription}</td>
                <td className="border border-black px-4 py-2 space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
