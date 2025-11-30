import React from "react";

function Cards({item}) {
    const {name ,title , price , category ,image} = item
  return (
    <>
      <div className="mt-5 dark:bg-slate-900 dark:text-white ">
        <div className="dark:border dark:rounded pb-.5 card h-85 rounded bg-base-100 overflow-hidden w-60 shadow-sm hover:scale-100 duration-200">
          <figure className=" overflow-hidden  dark:bg-slate-900 dark:text-white ">
            <img
              src={image}
              alt="Shoes"
               className="rounded-2xl w-full h-full object-cover dark:bg-slate-900 dark:text-white"
            />
          </figure>
          <div className="card-body dark:bg-slate-900 dark:text-white">
            <h2 className="card-title dark:bg-slate-900 dark:text-white ">
              {name}
              <div className="badge  font-extralight badge-secondary dark:bg-slate-900 dark:text-white">{category}</div>
            </h2>
            <p className="dark:bg-slate-900 dark:text-white">
              {title}
            </p>
            <div className="card-actions justify-between ">
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white">{`$ ${price}`}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
