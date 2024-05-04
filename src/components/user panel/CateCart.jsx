import React, { useState } from 'react'

function CateCart({ className ,title , img }) {
    
  return (
    <div className={`w-1/3 p-2  ${className}`}>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-2 ml-1 w-96 h-64 rounded-t-lg" src={img} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
         </div>
        <div class="flex items-center justify-between">
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See more Dishes</a>
        </div>
    </div>
</div>
    </div>
  )
}

export default CateCart
