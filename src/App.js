import img from './icons/dashboard.png'
import info from './icons/info.png'
import star from './icons/star.png'
import googledoc from './icons/google-docs.png'
import bag from './icons/shopping-bag.png'
import logo from "./icons/logo.svg"
export default function App() {
  return (
    <div >
     <nav className="bg-gray-800 p-3 fixed w-full mb-4">
  <div className="container mx-auto flex items-center justify-between">
    
    <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-10 h-10 rounded-full mr-2" />
      <span className="text-white font-bold font-sans text-2xl ml-12">Dashboard</span>
    </div>

    <div className="flex items-center">
      <input type="text" className='mr-96 bg-gray-700 py-1 px-3 text-white' placeholder='Search here' />

      <a href="#" className="text-white">
        <svg className="w-6 h-6 profile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Your profile icon path */}
        </svg>
      </a>
    </div>
  </div>
</nav>

<div className="bg-gray-800 text-white h-screen w-28 fixed top-16 left-0 overflow-hidden transition-all duration-300">
<hr className="border-t border-gray-700" />
<ul className="mt-4">
    {/* First List Item */}
    <li className="flex items-center mt-9 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={img} alt="" />
      
    </li>

    {/* Second List Item */}
    <li className="flex items-center my-8 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={info} alt="" />
      
    </li>

    {/* Third List Item */}
    <li className="flex items-center my-6 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={star} alt="" />
      
    </li>

    {/* Fourth List Item */}
    <li className="flex items-center my-8 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={bag} alt="" />
      
    </li>
    <li className="flex items-center my-6 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={googledoc} alt="" />
      
    </li>
  </ul>
</div>

    </div>
  )
}