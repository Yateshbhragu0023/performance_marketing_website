import React from 'react'
import HeroB from "../../assets/IMG/heroImg.jpg"

export default function Hero() {
    return (
        <div className=' py-16 '>
            <div className='w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className="md:w-1/2 text-center md:text-left pr-6 space-y-3">
                    <h1 className='bg-orange-400/60  py-1  px-5 w-28 text-black/80 font-semibold rounded-lg border border-orange-700/50 '>Business</h1>
                    <div className="text-4xl md:text-5xl  font-bold ">
                        <h1 className="text-orange-500">Performance Marketing </h1>
                        <h1 className="text-black pt-4">Let's 10X Your Business</h1>
                    </div>
                    <p className="text-gray-700 max-w-md">
                        Now digital and performance Marketing services in you city dholpur for boost your business
                    </p>
                    <a href="#contact">
                        <button className="bg-orange-500 mt-6 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition">
                            Book A Call
                        </button>
                    </a>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img
                        src={HeroB}
                        alt="Digital Marketing"
                        className="w-full md:rounded-0 sm:rounded-lg rounded-2xl md:rounded-tl-[100px] sm:rounded-tl-[50px] sm:rounded-br-[50px] md:rounded-br-[100px] "
                    />
                </div>
            </div>

        </div>
    )
}
