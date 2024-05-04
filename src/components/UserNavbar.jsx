import React from 'react'
import img from '../icons/dashboard.png'
import info from '../icons/info.png'
import star from '../icons/star.png'
import googledoc from '../icons/google-docs.png'
import bag from '../icons/shopping-bag.png'
import logo from "../icons/logo.svg"
function UserNavbar() {
  return (
    <div>
              <nav className="fixed top-4 left-0 z-10 w-full p-3"> 
     
     <input type="text" id="search-navbar" class=" outline-none ml-[430px] w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type to search.."/>
     



  
  </nav>
   
{/* <div> */}
<div className="bg-gray-800 text-white h-screen w-64 fixed  left-0 overflow-hidden transition-all duration-300">
<hr className="border-t border-gray-700" />
<ul className="mt-4">
    {/* First List Item */}
    <li className="flex items-center mt-4 ml-2 w-[80px] text-gray-400 p-3  hover:text-white cursor-pointer mb-2">
     <img className="w-[50px] h-[50px] ml-1 " src={logo} alt="" />
      <p className='text-white text-xl pl-8 font-sans'>TastyGrill</p>
    </li>
    <li className="flex items-center mt-9 ml-2 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={img} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Main</p>
    </li>

    {/* Second List Item */}
    <li className="flex items-center my-8 ml-2 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={info} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Dishes</p>
    </li>

    {/* Third List Item */}
    <li className="flex items-center my-6 ml-2 w-[120px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={star} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Most ordered</p>
    </li>

    {/* Fourth List Item */}
    <li className="flex items-center my-8 ml-2 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={bag} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Orders</p>
    </li>
    
  </ul>
</div>
    </div>
  )
}

export default UserNavbar
