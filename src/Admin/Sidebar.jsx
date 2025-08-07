import React from 'react'

import box from '../assets/Sidebar-Photos/box.png';
import house from '../assets/Sidebar-Photos/house.png';
import list from '../assets/Sidebar-Photos/list.png';
import user from '../assets/Sidebar-Photos/user.png'
import log from '../assets/Sidebar-Photos/turn-off.png'

function Sidebar() {
  return (
    <div className="w-18 hover:w-64 h-[100vh] bg-gray-200 transition-all duration-500 flex flex-col justify-between overflow-auto">
    
      <div className="flex flex-col gap-8 p-4">
        <div className="flex items-center gap-4">
          <img src={box} alt="Products" className="max-w-[40px]" />
          <p className="text-lg font-medium">Products</p>
        </div>
        <div className="flex items-center gap-4">
          <img src={user} alt="Users" className="max-w-[40px]" />
          <p className="text-lg font-medium">Users</p>
        </div>
        <div className="flex items-center gap-4">
          <img src={list} alt="Categories" className="max-w-[40px]" />
          <p className="text-lg font-medium">Categories</p>
        </div>
      </div>

      
      <div className="p-4">
        <div className="flex items-center gap-4">
          <img src={log} alt="Categories" className="max-w-[40px]" />
          <p className="text-lg font-medium">Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar