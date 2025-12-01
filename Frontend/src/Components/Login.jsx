import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:3000/user/login", userInfo)
  .then((res) => {
    if(res.data){
       toast.success("Login Successfully!");

       setTimeout(()=>{
         document.getElementById("my_modal_3").close();
    window.location.reload()
  localStorage.setItem("User", JSON.stringify(res.data.user));

       },2000)
   
  }
  })
  .catch((error) => {
    toast.error(error.response?.data?.message || "Something went wrong");
    document.getElementById("my_modal_3").close();
  });


  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* Login div Style  */}
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Login
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Welcome back! Please login to continue.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-sm text-pink-500">
                    This field is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password && (
                  <p className="text-sm text-pink-500">
                    enter password max 8 digit
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="text-pink-500 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-pink-600 duration-300"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-600 mt-5 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-pink-500 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
