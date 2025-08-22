import { all_product } from "@/assets/all_product";
import Items from "@/components/Items";
// import React from 'react'

const Kids = (props: { category: string; banner: string }) => {
    
  return (
    <div>
      <div className=" flex content-center h-1/6 w-[100vw] mx-auto">
        <img src={props.banner} alt="banner" className="" />
      </div>
      <div className="flex justify-between m-[2%] w-[80vw] mx-auto ">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="flex items-center gap-2 hover:cursor-pointer">
          <p>Sort by </p>
          <img src="." alt="" className="" />
        </div>
      </div>
      {/* <div className='flex justify-center items-center'> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center w-[80vw]  mx-auto gap-6 ">
        {all_product.map((item: any) =>
          item.category === props.category ? (
            <div className="overflow-hidden  flex justify-center text-clip text-lg font-medium">
              <Items
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Kids;
