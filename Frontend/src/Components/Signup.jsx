import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Signup() {


    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data)=> console.log(data)






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
{...register("PhoneNumber", { required: true ,  minLength:10})}
/>
{errors.phonenumber && <p className="text-sm text-pink-500">This field is required</p>}

<input
type="password"
placeholder="Password"
 className="w-full p-3 border-2 border-gray-300 rounded-lg placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500  outline-none text-black"
 {...register("Password", { required: true, minLength:8})}
/>
{errors.Password && <p className="text-sm text-pink-500">password length must be 8 digit</p>}

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



