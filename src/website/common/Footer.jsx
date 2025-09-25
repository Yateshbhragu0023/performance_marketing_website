import React from 'react'
import { FaPhoneAlt, FaGlobe, FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

export default function Footer() {

  const menubar = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "About"
    },
    {
      id: 3,
      name: "Service"
    },
    {
      id: 4,
      name: "Contact"
    },
    {
      id: 5,
      name: "Blog"
    }

  ]
   const services = [
    {
      id: 1,
      name: "Digital Marketing"
    },
    {
      id: 2,
      name: "Performance Marketing"
    },
    {
      id: 3,
      name: "Social Media marketing"
    },
    {
      id: 4,
      name: "Software Development"
    }

  ]

  return (
    <>
      <footer className=" bg-orange-500 text-white py-12">
        <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10 ">

          {/* About Hotel */}
          <div>
            <div className='flex place-items-center'>
              <h1 className='bg-white text-orange-500 rounded-md px-1 py-2 text-2xl font-semibold' >
                D.B
              </h1>
              <div className='font-bold pl-2 flex flex-col leading-tight'>
                <span>Dholpur</span>
                <span className='text-sm text-white font-normal'>Business</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed my-6">
              Welcome to the best four-star deluxe hotel in Dholpur. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              <a href="https://www.instagram.com/" target="_blank"  > <FaInstagram className="hover:text-yellow-500 cursor-pointer" /></a>
              <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
              <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
              <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
              <FaPinterestP className="hover:text-yellow-500 cursor-pointer" />
            </div>
          </div>

          {/* Explore */}
          <div className='ml-5'>
            <h3 className="text-2xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2 text-md">
              {
                menubar.map(
                  (d) => {
                    return (
                      <li className='hover:text-black/60 transition-all cursor-pointer'>
                        {d.name}
                      </li>
                    )
                  }
                )
              }
            </ul>
          </div>

          {/* our service */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Our Services</h3>
            <ul className="space-y-2 text-md">
              {
                services.map(
                  (d) => {
                    return (
                      <li className='hover:text-black/60 transition-all cursor-pointer'>
                        {d.name}
                      </li>
                    )
                  }
                )
              }
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-2xl font-serif mb-4">Contact</h3>
            <p className="text-sm">Dholpur,gwalior Road 328001</p>
            <p className="text-sm mb-4">Rajasthan India</p>
            <div className="flex items-center gap-2 text-lg mb-2">
              <FaPhoneAlt className="text-white" />
              <span className="font-medium">+91 9756225637</span>
            </div>
            <p className="text-sm border-b border-white inline-block mb-4">
              info@jainagency.com
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className=" relative border-t border-white mt-10 pt-6 text-center text-sm">
          © Copyright 2025 by <span className="text-white font-medium">WEB TH</span>
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=' fixed bottom-5 right-10 bg-orange-600 p-4 text-white text-xl rounded-full' >
            <FaChevronUp />
          </div>
        </div>
      </footer>
    </>
  )
}
