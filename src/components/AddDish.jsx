import React, { useEffect, useState } from 'react'

import AdminNavbar from './AdminNavbar'
import AllDish from './AllDish'
import { auth, db } from '../config/firebaseConfig'
import { addDoc, collection, getDoc, getDocs,query,setDoc, where } from 'firebase/firestore'
import {getStorage,ref,uploadBytes,updateMetadata,getDownloadURL} from "firebase/storage"
import { onAuthStateChanged } from 'firebase/auth'

function AddDish() {
  const [change,setChange]=useState(false)
  const [allColl,setAllColl]=useState([])
  const [allDishes,setAllDishes]=useState([])
  const [dishFlag,setDishFlag]=useState(false)
  const toggler = ()=>{
    setChange(!change)
  }
  const storage = getStorage();

useEffect(() => {
    
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
              try {
                const currentUserId = user.uid;
                const usersCollection = collection(db, 'categories');
                const userQuery = query(usersCollection, where('userId', '==','AR7raDNaWJW4S6ZpQUrfTgOygzG3'));
                const userQuerySnapshot = await getDocs(userQuery);
      
                // Extract the documents from the query snapshot
                const userDocuments = userQuerySnapshot.docs.map((doc) => doc.data());
      
                // Set the userDocs state with the retrieved documents
                setAllColl(userDocuments);
                setDishFlag(true)
                // console.log(userDocs);
              } catch (error) {
                // console.error('Error fetching user documents:', error.message);
              }
            }
          });
      
          // Cleanup the subscription when the component unmounts
          return () => unsubscribe();
 } , [auth, db , dishFlag])
useEffect(() => {
    
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
              try {
                const currentUserId = user.uid;
                const usersCollection = collection(db, 'dishes');
                const userQuery = query(usersCollection, where('userId', '==','AR7raDNaWJW4S6ZpQUrfTgOygzG3'));
                const userQuerySnapshot = await getDocs(userQuery);
      
                // Extract the documents from the query snapshot
                const userDocuments = userQuerySnapshot.docs.map((doc) => doc.data());
      
                // Set the userDocs state with the retrieved documents
                setAllDishes(userDocuments);
                // console.log(userDocs);
              } catch (error) {
                // console.error('Error fetching user documents:', error.message);
              }
            }
          });
      
          // Cleanup the subscription when the component unmounts
          return () => unsubscribe();
 } , [auth, db,dishFlag])
console.log(allColl);
const [dishName,setdishName] = useState('')
  const [dishDescription,setdishDescription] = useState('')
  const [dishPic,setdishPic] = useState('')
  const [category,setCategory]= useState('')
  const addCategory = async()=>{
    console.log(dishDescription,dishName,dishPic);
    const userId = auth?.currentUser?.uid;
    const usersCollection = collection(db, 'dishes');
    const imageRef = ref(storage, `/profile/${dishPic.name}`);

    await uploadBytes(imageRef, dishPic)
      .then(() => {
        return getDownloadURL(imageRef);
      })
      .then(async (url) => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        });
        await addDoc(usersCollection, {
          imageUrl: url,
          userId: userId,
          Date: formattedDate,
         dishName:dishName,
         Category:category,
          dishDescription:dishDescription
        });
        console.log("doc added");
        toggler()
        // navigate('/SetCode');
      })
      .catch((error) => {
        // console.error('Error:', error);
      });
  }
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <div className=''>
  <h1 className='pt-[8%] pl-[15%] text-2xl text-center' >Food Categories</h1>
  {/* <button onClick={toggler} className=' mt-[1%] ml-[25%] text-white rounded-md p-4 bg-orange-600 outline-none  ' type="button">Add Dish</button> */}
  <button onClick={toggler} className=' mt-[1%] ml-[25%] text-white rounded-md p-4 px-6 bg-orange-600 outline-none  ' type="button">Add Dish</button>
  
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
  {allDishes.map((title, index) => (
      <AllDish id={index} name={title.dishName} category={title.Category} price = {title.price} img = {title.imageUrl}/>
      
            ))}
</div>
<div id="crud-modal" tabindex="-1" aria-hidden="true" class={` ml-[40%] mt-[5%] ${change?'' :"hidden"}  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div class="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Dish
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" onClick={toggler} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
{/* - Modal body -->            <!- */}
            
                <div class="p-4 md:p-5 grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dish Name</label>
                        <input onChange={(e)=>{setdishName(e.target.value)}} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Dish name" required=""/>
                        <label for="underline_select" class="sr-only">Underline select</label>
                        <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            value={category}
            onChange={e => setCategory(e.target.value)}
        >
            <option value="" disabled>Select a document</option>
            {allColl.map((title, index) => (
                <option key={index} value={title.cateName}>{title.cateName}</option>
            ))}
        </select>
                    </div>
                    <div class="col-span-2 ">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload picture</label>
  <input onChange={(e)=>{const file = e.target.files[0];
    setdishPic(file);}} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
  <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A picture is useful to show user your Dish</div>
 </div>
                    
                    <div class="col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dish Description</label>
                        <textarea id="description" onChange={(e)=>{setdishDescription(e.target.value)}} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Dish description here"></textarea>                    
                    </div>
                </div>
                <button type="submit" onClick={addCategory} class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new dish
                </button>
            
        </div>
    </div>
</div> 



    </div>
  )
}

export default AddDish
