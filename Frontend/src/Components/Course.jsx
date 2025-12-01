import React from "react";
// import list from "../Data/list.json";
import Cards from "../Components/Cards"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

function Course() {

  const [book,setBook]= useState([])
  useEffect(()=>{
    const getbook = async ()=>{
      try {
       const res =await axios.get("http://localhost:3000/book")
       console.log(res.data);
       setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getbook();
  },[])



    const finalList = book.filter((item)=> item.price !== "free")
  return (
    <>
      <div className="mt-27 max-w-screen-2xl container mx-auto md:px-15 px-4 dark:bg-slate-900 dark:text-white">
        <div className="text-2xl font-semibold md:text-4xl text-center">
          <h1>
            We're delighted to have you 
            <span className="text-pink-500">Here!</span> :)
          </h1>
          <p className="text-gray-600 text-sm md:text-base mt-3">
            In a world full of endless possibilities, knowledge is the key that
            opens every locked door. Books have the power to shape our thoughts,
            sharpen our skills, and inspire us to dream bigger. Here, we bring
            you a collection of carefully chosen premium books—each crafted to
            expand your perspective and fuel your passion. Whether you're
            seeking personal growth, skill development, or pure inspiration, our
            curated selection is here to guide you on your journey. Start
            exploring today and discover the book that could change your life
            forever.
          </p>
          <Link to="/">
            <button className=" mt-6 text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>

       <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">
           {finalList.map((item)=>{
         return <Cards  key={item.id} item={item} />
        })}
       </div>

      </div>
    </>
  );
}

export default Course;
