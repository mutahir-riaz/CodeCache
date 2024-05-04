import React, { useState } from 'react'
// useNavigate
import a from '../icons/a.jpg'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebaseConfig'
import { addDoc, collection, getDoc, getDocs,setDoc } from 'firebase/firestore'
import {getStorage,ref,uploadBytes,updateMetadata,getDownloadURL} from "firebase/storage"
import { createUserWithEmailAndPassword } from 'firebase/auth'
function Signup() {
    const navigate = useNavigate('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    
    const signUpUser = async()=>{
      const userId = auth?.currentUser?.uid;
    const usersCollection = collection(db, 'foodusers');
      await createUserWithEmailAndPassword(auth,email,password)
      localStorage.setItem("email",email)
    const usid = auth?.currentUser?.uid 
    localStorage.setItem("user id",usid)
console.log("Email :",email,"\n","Password :",password ,"is registered");
const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          
        });
        console.log({
          Email: auth?.currentUser?.email,
          userId: userId,
          Date: formattedDate,
          name: name,
          Type:"User"
        });
await addDoc(usersCollection, {
  Email: auth?.currentUser?.email,
  userId: userId,
  Date: formattedDate,
  name: name,
  Type:"User"
});
console.log("doc also added");
setEmail('')
setName('')
setPassword('')
navigate('/user/main')
    }
    return (
    
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden flex">
      <div className="flex-1 p-1">
        <img src={a} alt="Image" className="w-full h-[100%]" />
      </div>
      <div className="flex-1 p-8 bg-gray-200">
        <h2 className="text-2xl mb-4 text-center font-sans text-pretty">Sign up Tasty Grill</h2>
        <div >
          <input type="text" value={name} placeholder="Username" className="mb-4 px-4 py-2 outline-none border rounded-lg w-full" onChange={(e)=>{setName(e.target.value)}} required />
          <input type="email" value={email} placeholder="Email" className="mb-4 px-4 py-2 outline-none border rounded-lg w-full" onChange={(e)=>{setEmail(e.target.value)}} required />
          <input type="password" value={password} placeholder="Password" className="mb-4 px-4 outline-none py-2 border rounded-lg w-full" onChange={(e)=>{setPassword(e.target.value)}} required />
          <p className='text-sm ml-[300px] mb-2 hover:text-gray-600'>forget password</p>
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg w-full" onClick={signUpUser}>Sign up</button>
        </div>
        <p className='text-sm ml-24 mt-2'>Already have an account? <a className='text-blue-600 hover:text-blue-500' onClick={()=>{
    navigate('/')}}>Log in</a></p>
      </div>
    </div>
 

    </div>
  )
}

export default Signup
