import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from "./Courses/courses.jsx"
import Signup from './Components/Signup.jsx'
import ContectPage from './Components/ContectPage.jsx'
import About from './Components/About.jsx'

function App() {
  return (
    <div >
       
       <Routes>
          <Route path='/'  element={<Home/>} / >
          <Route path='/course' element={<Courses/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/contect' element={<ContectPage/>} />
          <Route path='/about' element={<About/>} />



       </Routes>
    </div>
  )
}

export default App
