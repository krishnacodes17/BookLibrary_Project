import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Signup() {

   const navigate = useNavigate();

    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = async (data)=> {
    const userInfo= {
      fullName:data.fullName,
      email:data.email,
      password:data.password,
      PhoneNumber:data.PhoneNumber

    }
   await axios.post("http://localhost:3000/user/signup",userInfo)
    .then((res)=>{
      if(res.data){
         toast.success(' signup Successfully!');
            localStorage.setItem("User",JSON.stringify(res.data.user))

         setTimeout(()=>{
          navigate("/")
    window.location.reload()

         },1500)
      }
    

    })
    .catch((error)=>{
  console.log(error.response.data);
  toast.error('This is an error!',error.response.data.message);
})
  }
 


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
<div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
<h1 className="text-3xl font-bold text-center mb-6">
Create <span className="text-pink-500">Account</span>
</h1>


<form className="space-y-4"  onSubmit={handleSubmit(onSubmit)}  >
<input
type="text"
placeholder="Full Name"
 className="w-full p-3 border-2 border-gray-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500    outline-none text-black"
{...register("fullName", { required: true})}
/>
{errors.fullName && <p className="text-sm text-pink-500">This field is required</p>}


<input
type="email"
placeholder="Email Address"
 className="w-full p-3 border-2 border-gray-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500  outline-none text-black"
{...register("email", { required: true})}
/>
{errors.email && <p className="text-sm text-pink-500">This field is required</p>}

<input
type="number"
placeholder="Phone Number"
 className="w-full p-3 border-2 border-gray-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500  outline-none text-black"
{...register("Phonenumber", { required: true ,  minLength:10})}
/>
{errors.phonenumber && <p className="text-sm text-pink-500">This field is required</p>}

<input 
type="text"
placeholder="Password"
 className="w-full p-3 border-2 border-gray-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500  outline-none text-black"
 {...register("password", { required: true, minLength:8})}
/>
{errors.password && <p className="text-sm text-pink-500">password length must be 8 digit</p>}

<button
type="submit"
className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition duration-300"
>
Sign Up
</button>
</form>


<p className="text-center text-gray-600 text-sm mt-4">
Already have an account?
 <Link to="/" className="text-pink-500 cursor-pointer hover:underline">
    Login
  </Link>
</p>
</div>
</div>
  );
}

export default Signup;



