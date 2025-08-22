// import React from "react";
import { Link } from "react-router-dom";

const Items = (item: any) => {
  return (
    <div className="w-[90vw] px-auto mx-auto my-auto  hover:cursor-pointer ">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt="" onClick={()=>(window.scrollTo(0, 0))} className="w-[80vw]"/>
      </Link>
      <div className="">{item.name}</div>
      <div className="flex text-base font-semibold gap-1 mt-5 mb-5 overflow-hidden">
        <p>${item.new_price}</p>
        <p className="line-through text-gray-600">${item.old_price}</p>
      </div>
    </div>
  );
};

export default Items;
