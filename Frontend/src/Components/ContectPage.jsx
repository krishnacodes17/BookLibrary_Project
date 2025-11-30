import React from 'react'
import { useNavigate } from "react-router-dom";

function ContectPage() {

     const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // page refresh stop
    alert("Your request is submitted!");
    navigate("/");  // redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Feel free to reach out anytime. We’d love to hear from you!
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 border rounded-md outline-none text-black placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md outline-none text-black placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here"
              className="w-full p-2 border rounded-md outline-none text-black placeholder-gray-500"
            ></textarea>
          </div>

          <button onClick={handleSubmit} className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition-all">
           submit
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Need faster support?
          <span className="text-pink-500 cursor-pointer font-semibold">
            {" "}Call us
          </span>
        </p>
      </div>
    </div>
  )
}

export default ContectPage
