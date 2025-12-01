import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./Courses/courses.jsx"
import Signup from './Components/Signup.jsx'
import ContectPage from './Components/ContectPage.jsx'
import About from './Components/About.jsx'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'

function App() {
   const [authUser , setAuthUser] = useAuth()
  return (
    <div >
      
       <Routes>
          <Route path='/'  element={<Home/>} / >
          <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/> } />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/contect' element={<ContectPage/>} />
          <Route path='/about' element={<About/>} />
       </Routes>
       <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default App
