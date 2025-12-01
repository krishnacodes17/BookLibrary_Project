import React, { useState } from 'react'
import toast from "react-hot-toast"

function Logout() {
    const [authUser , setAuthUser]=useState()
    const handelLogOut = ()=>{
      try {
        setAuthUser({
          ...authUser,
          user:null
        })
        localStorage.removeItem("User")
        toast.success("Logout successFully")
        window.location.reload();
      } catch (error) {
        console.log(error)
        toast.error("Error : ", error.message)
      }
    }

  return (
    <div>
      <button onClick={handelLogOut} className=' bg-red-500 px-3 p-2 rounded-md cursor-pointer hover:bg-slate-800 duration-300 text-white '>Logout</button>
    </div>
  )
}

export default Logout
