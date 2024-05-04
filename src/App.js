import React from 'react'
import AdminDash from './components/AdminDash'
import Login from './components/login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCategory from './components/AddCategory';
import AddDish from './components/AddDish';
import MainPage from './components/user panel/MainPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminDashboard" element={<AdminDash />} />
          <Route path="/adminCategory" element={<AddCategory/>} />
          <Route path="/adminDishes" element={<AddDish/>} />
          <Route path="/user/main" element={<MainPage/>} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
