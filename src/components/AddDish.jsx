import React from 'react'
import AdminNavbar from './AdminNavbar'
import AllDish from './AllDish'

function AddDish() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className=''>
  <h1 className='pt-[8%] pl-[15%] text-2xl text-center'>Food Categories</h1>
  {/* <button onClick={toggler} className=' mt-[1%] ml-[25%] text-white rounded-md p-4 bg-orange-600 outline-none  ' type="button">Add Dish</button> */}
  
</div> <br />
<div className=''>
<hr />
<div className="flex ml-[26%] f space-x-5 t font-medium text-lg font-sans">
  <p>#</p>
  <p>Dish Image</p>
  <p>Dish Name</p>
  <p className=''>Category Name</p>
  <p className='pl-[5%]'>Dish price</p>
  <p className='pl-[10%]'>Status</p>
  <p className='pl-[15%]'>Action</p>
</div>
<hr />
</div>
<div>
<AllDish id="1" name='Gola Kabab' category="Chinese Food" price = {100} img = {"https://i.ytimg.com/vi/SyK18f--nKQ/maxresdefault.jpg"}/>
  <AllDish id="2" name='Mendhi' category="Arabic Food" price = {400} img={'https://i.ytimg.com/vi/XoIy4WhwdE4/maxresdefault.jpg'}/>
  <AllDish id="3" name='Beef Pulao' category="Pakistani Food" price = {200 } img={'https://i.ytimg.com/vi/PDrgirpc6wI/maxresdefault.jpg'}/>
  <AllDish id="4" name='Fajita Pizza' category="Fast Food" price = {900} img = {'https://pizzrella.com/cdn/shop/files/Fajita.png?v=1690390630&width=1445'}/>
  
</div>

    </div>
  )
}

export default AddDish
