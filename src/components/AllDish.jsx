import React from 'react'
import pic from "../icons/pic.jpg"
import edit from "../icons/edit.png"
import bin from "../icons/bin.png"
function AllDish(props) {
  return (
    <div>
       <div>
      <div className="flex ml-[26%] mt-10 space space-x-[40px]">
        <p className='text-xl pt-3'>{props.id}</p>
        <img src={props.img} alt="" className='w-40 ml-8 mr-8 h-20 rounded-full  outline-none' />
        <p className='text-xl pt-3'>{props.name}</p>
        <p className='text-xl pt-3'>{props.category}</p>
        <p className='text-xl pt-3'>Rs = {props.price}</p>
        
<label class="ml-[25%] inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Available</span>
</label>
<button className="ml-32 mt-6 border-black border-2 rounded-full h-8 w-10">
    <img src={edit} className='pl-1' alt="" />
</button>    
<button className="ml-4 mt-6 border-orange-400 border-2 rounded-full h-8 w-10">
    <img src={bin} className='pl-1.5' alt="" />
</button>    
</div>

    </div>
    </div>
  )
}

export default AllDish
