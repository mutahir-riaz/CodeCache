import React, { useState } from 'react'
import a from '../icons/a.jpg'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebaseConfig'
function Login() {
    const navigate = useNavigate('')
    const [email,SetEmail]= useState('')
    const [password,SetPassword]= useState('')
  const loginUser = async()=>{
    // await createUserWithEmailAndPassword(auth,email,password)
    await signInWithEmailAndPassword(auth,email,password)
    localStorage.setItem("email",email)
    const usid = auth?.currentUser?.uid 
    localStorage.setItem("user id",usid)
console.log("Email :",email,"\n","Password :",password ,"is Login");
SetEmail('')
SetPassword('')
if(auth?.currentUser?.email=="admin11@gmail.com"){
  navigate('adminDashboard')
}

}
// console.log(email);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden flex">
      <div className="flex-1 p-1">
        <img src={a} alt="Image" className="w-full h-[100%]" />
      </div>
      <div className="flex-1 p-8 bg-gray-200">
        <h2 className="text-2xl mb-4 text-center font-sans text-pretty">Login Tasty Grill</h2>
        
          <input type="text" value={email} placeholder="Username" className="mb-4 px-4 py-2 outline-none border rounded-lg w-full" onChange={(e)=>{SetEmail(e.target.value)}} required />
          <input type="password" value={password} placeholder="Password" className="mb-4 px-4 outline-none py-2 border rounded-lg w-full" onChange={(e)=>{SetPassword(e.target.value)}} required />
          <p className='text-sm ml-[300px] mb-2 hover:text-gray-600'>forget password</p>
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg w-full" onClick={loginUser}>Login</button>
        
        <p className='text-sm ml-24 mt-2'>Don't have an account? <a className='text-blue-600 hover:text-blue-500' onClick={()=>{
    navigate('/signup')}} >Sign up</a></p>
      </div>
    </div>
  </div>
  )
}

export default Login
