import img from '../icons/dashboard.png'
import info from '../icons/info.png'
import star from '../icons/star.png'
import googledoc from '../icons/google-docs.png'
import bag from '../icons/shopping-bag.png'
import logo from "../icons/logo.svg"
import user from "../icons/user.png"
import phone from "../icons/phone.png"
import cart from "../icons/cart.png"
import AdminNavbar from './AdminNavbar'

export default function AdminDash() {
  return (
    <div >
     <nav className=" p-3 fixed w-full mt-5 mb-4"> 
     
     <input type="text" id="search-navbar" class=" outline-none ml-[430px] w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type to search.."/>
     



  
  </nav>
   
{/* <div> */}
{/* <div className="bg-gray-800 text-white h-screen w-72 fixed  left-0 overflow-hidden transition-all duration-300">
<hr className="border-t border-gray-700" />
<ul className="mt-4">
    {/* First List Item */}
    {/* <li className="flex items-center mt-4 ml-4 w-[80px] text-gray-400 p-3  hover:text-white cursor-pointer mb-2">
     <img className="w-[50px] h-[50px] ml-1 " src={logo} alt="" />
      <p className='text-white text-xl pl-8 font-sans'>TastyGrill</p>
    </li>
    <li className="flex items-center mt-9 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={img} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Dashboard</p>
    </li>

    
    <li className="flex items-center my-8 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={info} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Dishes</p>
    </li>

    
    <li className="flex items-center my-6 ml-4 w-[120px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={star} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Most ordered</p>
    </li>

   
    <li className="flex items-center my-8 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={bag} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Orders</p>
    </li>
    <li className="flex items-center my-6 ml-4 w-[80px] text-gray-400 p-3 hover:bg-orange-500 hover:text-white cursor-pointer mb-2">
     <img className="w-[40px] h-[40px] ml-2 hover:bg-orange-500" src={googledoc} alt="" />
     <p className='text-white text-xl pl-8 font-sans'>Progress</p>
    </li>
  </ul> 
</div> */}
<AdminNavbar></AdminNavbar>
 <br />
<div class="flex space-x-5 ml-[27%] mt-[8%] ">
        <div class="bg-blue-500 text-white  text-2xl p-2  w-72 h-48 rounded-md"><p className='pl-3 pt-3 font-sans'>Sign Ups</p><br />  <p className='text-3xl text-right pr-3 pt-3'>112</p>
        <div className='flex '><i className=' mt-[6px] ml-3'><img src={user} alt="" /></i> <p className='text-gray-200 text-sm mt-[10px]'><span className='text-white text-[18px] ml-10 font-bold'>+25% </span> from the last month</p></div>
        </div>
        <div class="bg-green-500  text-white  text-2xl p-2 w-72 h-48 rounded-md"><p className='pl-3 pt-3 font-sans'>Revenue</p><br /> <p className='text-3xl text-right pr-3 pt-3'>$29,283</p>
        <div className='flex '><i className=' mt-[6px] ml-3'><img src={cart} alt="" /></i> <p className='text-gray-200 text-sm mt-[10px]'><span className='text-white text-[18px] ml-10 font-bold'>+17.5% </span> from the last month</p></div>
        </div>
        <div class="bg-red-500  text-white  text-2xl p-2 w-72 h-48 rounded-md">
        <p className='pl-3 pt-3 font-sans'>Open Orders</p><br /> <br /> 
        <div className='flex '><i className=' mt-[27px] ml-3'><img src={phone} alt="" /></i> <p className='text-gray-200 text-sm mt-[27px]'><span className='text-white text-[23px] ml-48 font-bold'>83 </span></p></div>
  
        </div>
    </div>
    <div class="flex space-x-[140px] ml-[27%] mt-[3%]">
        <div class="bg-gray-300 flex items-center justify-center w-96 h-48 rounded-md">
          Bar chart
        </div>
        <div class="bg-orange-300 flex items-center justify-center w-96 h-48 rounded-md">Notification</div>
    </div>
    </div>
  )
}