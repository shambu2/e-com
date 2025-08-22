import {  ArrowRightIcon } from 'lucide-react'
// import React from 'react'
import heroImage from "../assets/hero_image.png"

const HeroPage = () => {
  return (
    <div className='flex items-center pl-40 w-full h-[100vh] justify-between bg-gradient-to-br from-pink-200 to-transparent'>
        <div >
            <p className='text-2xl font-bold'>
                NEW ARRIVALS ONLY
            </p>
            <div className='text-8xl font-bold '>
                <div className='flex items-center gap-5'>
                    <p>new</p>
                    {/* <img src={HandIcon} alt="" className='h-32 '/> */}
                    {/* <HandIcon size={32} color='yellow'/> */}
                </div>
                <p>
                    collections
                </p>
                <p>for everyone</p>
            </div>
            <div className='mt-10 font-bold text-white flex justify-center  items-center rounded-full gap-2 w-48 h-14 bg-gradient-to-b from-orange-500 to-red-500'>
                <p >Latest Collection</p>
                {/* <img src={ArrowLeftIcon} alt="" className='w-8 h-6' /> */}
                <ArrowRightIcon size={16} />
            </div>
            
        </div>
        <div>
            <img src={heroImage} alt="" />
            
        </div>
    </div>
  )
}

export default HeroPage