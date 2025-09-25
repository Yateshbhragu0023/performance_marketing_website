import React from 'react'
import { BsFillEnvelopePaperFill } from "react-icons/bs";

export default function Contact() {

  const handlesubmit = (e)=>{
    e.preventDefault()
    const name = e.target.name.value ;
    const email = e.target.email.value ;
    const subject = e.target.subject.value ;
    const message = e.target.message.value ;

    if(name && email && subject && message){
      alert("Suceed We will connect Yoou soon")
      e.target.reset()
    }else{
      alert("all fields are required")
    }
  }

  return (
    <div className='md:py-8  bg-white' id='contact'>
      <div className='w-[85%] mx-auto grid md:grid-cols-2 grid-cols-1 gap-8'>

        {/* Left side - Contact Info */}
        <div className="w-full  text-black  md:p-12">
          <div className="h-full flex flex-col text-center justify-center">
            <h2 className="text-3xl md:text-4xl text-black/90 font-bold mb-2">Let's Connect!</h2>
            <h2 className="text-lg md:text-sm font-semibold mb-5">If you Have Any concern then Can fill upform</h2>

            <div className="space-y-4 mx-auto px-8 p-6 bg-white shadow-2xl">
              <div className="text-orange-500  text-4xl rounded-full p-3 ">
                <BsFillEnvelopePaperFill className='mx-auto shadow-lg' />
              </div>
              <div className=''>
                <p className="text-black/90  md:text-2xl text-xl font-bold">info@dholpurbusiness.com</p>
                <h3 className="font-semibold text-lg mb-1">Email Adress</h3>
              </div>
            </div>


          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full md:my-0 sm:my-0 my-7">

          <form className="space-y-6  border border-orange-200 rounded-md md:p-8 p-5" onSubmit={handlesubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 shadow-lg bg-white border  border-white focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-white shadow-lg bg-white   focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-white shadow-lg bg-white  focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-white shadow-lg bg-white  focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-white shadow-lg bg-white focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
