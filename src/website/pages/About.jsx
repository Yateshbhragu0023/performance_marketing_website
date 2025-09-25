import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { GiArcheryTarget, GiTargeting } from "react-icons/gi";

export default function About() {
  return (
    <>
      <div className=' py-16 bg-gray-100'>
        <div className='w-[85%] mx-auto '>
          <div className=' grid md:grid-cols-2 md:gap-24 sm:gap-20 gap-8 items-center'>
            {/* Left Content */}
            <div>
              <p className="uppercase text-xl text-orange-500 font-semibold">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
                <span className="text-black">
                  Disappointed in Your
                  <span className="text-orange-500"> Business Development?</span>
                </span>
                <br />
                <span className="text-black">
                  It’s Time to Create Online Strategy You can <span className="font-bold">Trust On.</span>
                </span>
              </h2>
            </div>
            {/* right 1 card */}
            <div>
              <div className="bg-white hover:bg-orange-500 transition-all group shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <div className="group-hover:text-white text-orange-500 text-4xl mb-3"><GiArcheryTarget /></div>
                <h3 className="group-hover:text-white text-lg font-semibold mb-2">Our Mission</h3>
                <p className="group-hover:text-white text-gray-600 text-sm">
                  Our mission is to craft data-driven marketing strategies that go beyond clicks and impressions.
                  We aim to deliver campaigns that maximize ROI, strengthen brand presence, and drive real business growth.
                  Every decision we make is focused on measurable results and sustainable success for our clients.
                </p>
              </div>

            </div>
          </div>
          {/* Right Cards */}
          <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 md:gap-24 sm:gap-14 gap-8 mt-8">
            {/* Vision */}
            <div className="bg-white hover:bg-orange-500 transition-all group shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="group-hover:text-white text-orange-500 text-4xl mb-3"><FaRegEye /></div>
              <h3 className=" group-hover:text-white text-lg font-semibold mb-2">Our Vision</h3>
              <p className="group-hover:text-white text-gray-600 text-sm">
                We envision becoming the most reliable performance marketing partner for businesses worldwide.
                Our goal is to create a future where brands can scale with clarity, confidence, and measurable impact.
                By blending creativity with analytics, we aspire to set new benchmarks in digital growth.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-white hover:bg-orange-500 transition-all group shadow-md rounded-lg p-6 hover:shadow-lg transition ">
              <div className="group-hover:text-white text-orange-500 text-4xl mb-3"><GiTargeting /></div>
              <h3 className="group-hover:text-white text-lg font-semibold mb-2">Our Purpose</h3>
              <p className="group-hover:text-white text-gray-600 text-sm">
                Our purpose is to simplify the complexity of digital marketing for businesses.
                We exist to deliver transparent, impactful, and result-oriented solutions that fuel business outcomes.
                At the core, we strive to be a growth engine that helps brands achieve their true potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
