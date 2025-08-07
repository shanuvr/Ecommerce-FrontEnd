import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';


const AdminDash = () => {
  
  return(
     <div className="flex">
      <Sidebar />
    
      <div className="ml-64 p-6 w-full">
        <h2 className="text-xl font-bold">User Data</h2>
        <p>
          Admin Dash
        </p>
      </div>
    </div>
  )
}

export default AdminDash