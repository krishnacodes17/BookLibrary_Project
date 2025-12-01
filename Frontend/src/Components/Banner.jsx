import React from "react";
import BannerBook from "../assets/bannerBook.jpg";



function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-15 px-4 flex flex-col md:flex-row  dark:bg-slate-900 dark:text-white">
        <div className="w-full md:w-1/2 mt-12 md:mt-28 order-2 md:order-1">
          <div className="space-y-11 ">
            <h1 className="text-3xl font-bold">
              {" "}
              "Hello, welcome here to learn something
              <span className="text-pink-500 ">New EveryDay!!!</span>
            </h1>
            <p className="text-xl ">
              “Boost your knowledge, imagination & confidence. One book a day
              can change your life — let’s read together!”
            </p>

            <label className="input validator dark:text-black" >
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required className="placeholder-black dark:text-black" />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn font-extralight tracking-wider letter btn-secondary ">Get Start >>> </button>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
            <img src={BannerBook} className=" w-105 h-105 md:pl-7  " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
