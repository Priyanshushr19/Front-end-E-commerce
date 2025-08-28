import React from 'react'
import men from "../assets/men.webp"
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow_icon.png"
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <div className='bg-gradient-to-b from-green-400 to-white flex justify-between p-25'>
                <div className=''>
                    <h2 className='font-bold text-3xl'>Best Deals !  Best Prices !</h2>
                    <div className='flex'>
                        <p className='font-bold text-7xl'>New</p>
                        <img className='w-20 mx-5 py-2' src={hand_icon} alt="" />
                    </div>
                    <p className='font-bold text-7xl'>Collections</p>
                    <p className='font-bold text-7xl'>For Everyone</p>
                    <div className='flex bg-red-600 rounded-full my-10 justify-center items-center h-16'>
                        <Link to="/kids" className='flex bg-red-600 rounded-full my-10 justify-center items-center h-16'><div className='font-medium text-2xl text-white px-3 '>Latest Collection</div>
                        <img className='w-12 ' src={arrow_icon} alt="" /></Link>
                    </div>
                </div>
                <div>
                    <img src={men} alt="" className='w-100' />
                </div>
            </div>
        </>
    )
}

export default Hero