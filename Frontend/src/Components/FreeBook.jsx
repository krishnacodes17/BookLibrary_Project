import React from "react";
// import List from "../Data/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function FreeBook() {

  const [book,setbook]= useState([])

   useEffect(()=>{
    const getData = async()=>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        // console.log(res.data)
        setbook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
   },[])




  const filterData = book.filter((data) => data.price === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 513,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-15 px-4 dark:bg-slate-900 dark:text-white">
        <div>
          <h1 className=" font-bold text-xl pt-4 ">Free offered Books </h1>
          <p>
            Discover high-quality books available completely free. Start
            learning, growing and exploring new ideas without spending a single
            rupee
          </p>
        </div>
      
      <div className="slider-container">
        <Slider {...settings}>
          {filterData.map((data)=>{
            return (                
                     <Cards item={data} key={data.id}/>
            )
          })}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default FreeBook;
