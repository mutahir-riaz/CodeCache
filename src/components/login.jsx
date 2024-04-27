import React from 'react'
import a from '../icons/a.jpg'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate('')
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden flex">
      <div className="flex-1 p-1">
        <img src={a} alt="Image" className="w-full h-[100%]" />
      </div>
      <div className="flex-1 p-8 bg-gray-200">
        <h2 className="text-2xl mb-4 text-center font-sans text-pretty">Login Tasty Grill</h2>
        <form action="#" method="post">
          <input type="text" placeholder="Username" className="mb-4 px-4 py-2 outline-none border rounded-lg w-full" required />
          <input type="password" placeholder="Password" className="mb-4 px-4 outline-none py-2 border rounded-lg w-full" required />
          <p className='text-sm ml-[300px] mb-2 hover:text-gray-600'>forget password</p>
          <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg w-full">Login</button>
        </form>
        <p className='text-sm ml-24 mt-2'>Don't have an account? <a className='text-blue-600 hover:text-blue-500' onClick={()=>{
    navigate('/signup')}} >Sign up</a></p>
      </div>
    </div>
  </div>
  )
}

export default Login
