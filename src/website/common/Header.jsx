import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [menu, setMenu] = useState(false)

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

  return (
    <div className='bg-white shadow-lg sticky top-0 left-0 z-50'>
      <div className='md:w-[85%] sm:w-[95%] w-[98%] mx-auto py-3 ' >
        <div className='flex justify-between'>
          {/* logo */}
          <div className='flex place-items-center'>
            <h1 className='bg-orange-500 text-white rounded-md px-1 py-2 text-2xl font-semibold' >
              D.B
            </h1>
            <div className='font-bold pl-2 flex flex-col leading-tight'>
              <span>Dholpur</span>
              <span className='text-sm text-black/90 font-normal'>Business</span>
            </div>
          </div>
          {/* menubar */}
          <ul className=' hidden md:flex justify-between font-semibold place-items-center gap-6 '>
            {
              menubar.map(
                (d) => {
                  return (
                    <li className='hover:text-orange-500 transition-all cursor-pointer'>
                      {d.name}
                    </li>
                  )
                }
              )
            }
          </ul>
          {/* button */}
          <div className='place-items-center'>
            <a href="#contact">
              <button className='md:block hidden bg-orange-500 px-4 py-2 hover:bg-orange-600 transition-all  font-semibold text-white rounded-lg' >Contact Us</button>
            </a>
          </div>

          <div className='text-orange-500 font-bold place-items-center pt-2 md:hidden block'>
            <h1>
              {
                menu == false
                  ?
                  <HiBars3 size={28} onClick={() => setMenu(!menu)} />
                  :
                  <RxCross1 size={20} onClick={() => setMenu(!menu)} />
              }
            </h1>
          </div>

        </div>
        {/* side menu */}
        <div className={`absolute top-[64px] right-0 ${menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}  w-[200px] h-screen  p-6 pt-10 bg-white transition-all duration-150`}>
          <ul className='space-y-2'>
            {
              menubar.map(
                (d) => {
                  return (
                    <li className='hover:text-orange-500 transition-all cursor-pointer'>
                      {d.name}
                    </li>
                  )
                }
              )
            }

          </ul>

        </div>
      </div>
    </div>
  )
}
