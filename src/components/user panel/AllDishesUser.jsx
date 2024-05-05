import React, { useEffect, useState } from 'react'
import FoodCart from './FoodCart'
import { addDoc, collection, getDoc, getDocs,query,setDoc, where } from 'firebase/firestore'
import {getStorage,ref,uploadBytes,updateMetadata,getDownloadURL} from "firebase/storage"
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../config/firebaseConfig'
function AllDishesUser() {
  
  const [allDishes,setAllDishes]=useState([])
  const [dishFlag,setDishFlag]=useState(false)
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
return (
    <div className='ml-[20%] mt-[1%] flex flex-wrap'>
      <FoodCart className='w-1/3' title={'Beef pulao'} price={'Rs 300'} img={'https://sohainthekitchen.com/wp-content/uploads/2020/12/Thumb-Beef-Yakhni-Pulao-Soha-in-the-Kitchen.jpg'}></FoodCart>
      <FoodCart className='w-1/3' title={'Seekh kabab'} price={'Rs 400'} img={'https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg'}></FoodCart>
      <FoodCart className='w-1/3' title={'Halwa puri'} price={'Rs 40/puri'} img={'https://miro.medium.com/v2/resize:fit:736/1*FdDNqnc_xSVxiOC3TlBYfA.jpeg'}></FoodCart>
      <FoodCart className='w-1/3' title={'Famous Haleem'} price={'Rs 200'} img={'https://www.licious.in/blog/wp-content/uploads/2022/04/Chicken-Haleem-Cooked-min-compressed-scaled.jpg'}></FoodCart>
      <FoodCart className='w-1/3' title={'Rasmalai'} price={'Rs 230'} img={'https://www.alicaspepperpot.com/wp-content/uploads/2018/11/DSC_0070-2-scaled-720x720.jpg'}></FoodCart>
      <FoodCart className='w-1/3' title={'Beef karhai'} price={'Rs 1200'} img={'https://shopcrescentfoods.com/cdn/shop/articles/Beef_Karahi_4608x.jpg?v=1617759329'}></FoodCart>
      
     {allDishes.map((title, index) => (
      <FoodCart className='w-1/3' title={title.dishName} price={title.price} img={title.imageUrl}></FoodCart>

     ))}



    </div>
  )
}

export default AllDishesUser
