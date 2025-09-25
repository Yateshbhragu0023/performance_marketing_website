import React from 'react'
import AIMG from "../../assets/IMG/about.jpg"
import { Ri24HoursLine, RiTeamFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Slider from './Slider';

export default function Service() {

  const services = [
    {
      id: 1,
      heading: "Performance Marketing",
      text: `We design data-driven ad campaigns tailored to your business goals.
            Our strategies focus on maximizing ROI across Google, Meta, and other ad platforms.
            Every campaign is tracked with clear KPIs for measurable growth.
            We continuously optimize budgets to reduce costs and boost conversions.
            With us, you get performance marketing that delivers real business impact` ,
    },
    {
      id: 2,
      heading: "SEO & Content Strategy",
      text: `We help your brand rank higher with proven SEO techniques.
Our team optimizes technical SEO, on-page content, and backlink profiles.
Content strategies are built to attract, engage, and convert your target audience.
We focus on long-term organic visibility that reduces ad dependency.
SEO with us means consistent, compounding growth for your business.` ,
    },
    {
      id: 3,
      heading: "Social & Creative Ads",
      text: `We create engaging social media campaigns tailored to your audience.
                  Our team designs high-converting creatives and copy that grab attention.
                  We manage ad placements on platforms like Instagram, Facebook, and LinkedIn.
                  Each campaign is optimized with A/B testing for better performance.
                  Social ads with us turn followers into loyal customers.` ,
    }
  ]

  const features = [
    {
      icon: <RiTeamFill/>,
      title: "Our Supportive Team",
    },
    {
      icon: <FiSettings />,
      title: "Fast Processing",
    },
    {
      icon: <MdOutlineRocketLaunch />,
      title: "Our Strategy",
    },
    {
      icon: <Ri24HoursLine />,
      title: "24/7 Support",
    },
  ];

  return (
    <>
      {/* service start */}
      <div className=' md:py-16 py-10 '>
        <div className='w-[85%] mx-auto '>
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-xl font-semibold text-orange-500 uppercase tracking-wider">
              Our Services
            </p>
            <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold text-black mt-3">
              What Services We Offer
            </h2>
          </div>

          <div className='items-center grid md:grid-cols-3 grid-cols-1  z-6 gap-6'>
            {/* Service Cards */}
            {
              services.map(
                (d) => {
                  return (
                    <article key={d.id} className="bg-white  border border-b-8 border-orange-500 rounded-2xl p-6 shadow-xl hover:shadow-md transition-all transform hover:-translate-y-1">
                      <div className=" items-center gap-4 space-y-4">
                        <h3 className="text-xl text-center font-bold text-black">{d.heading}</h3>
                        <p className=" text-sm text-center text-black/85">
                          {d.text}
                        </p>
                        <div className='flex justify-center'>
                          <button className='bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md mt-4  hover:border-gray-600'>Learn More</button>
                        </div>
                      </div>
                    </article>
                  )
                }
              )
            }
          </div>
        </div>
      </div>
      {/* service end */}
      {/* about start */}
      <div className='md:py-14 py-10 bg-gray-50'>
        <div className='w-[85%] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={AIMG}
              alt="Business Growth"
              className="w-80 md:w-96 lg:w-[420px] object-contain"
            />
          </div>

          {/* Right Side - Content */}
          <div className='sm:text-center md:text-start'>
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              We help you to grow <br />
              your <span className="text-orange-500">business.</span>
            </h2>

            <p className="text-black/90 mt-4">
              Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <ul className="mt-5 space-y-3 text-black/90">
              <li> You can expect your sales to increase in 1–2 days</li>
              <li>Real customers (over 20–30 daily sales)</li>
            </ul>

            <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition">
              About Us
            </button>
          </div>
        </div>

      </div>
      {/* about end */}
      {/* our peocess start */}
      <div className='md:py-12 py-10 bg-white'>
        <div className='w-[85%] mx-auto  '>\
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-xl font-semibold text-orange-500 uppercase tracking-wider">
              Our Process
            </p>
            <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold text-black mt-3">
              Why Our Client Choose Us
            </h2>
          </div>
          {/* process */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white hover:bg-orange-500 group shadow-xl rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 group-hover:bg-white group-hover:text-orange-500 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white text-4xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg group-hover:text-white font-semibold text-orange-500">
                    {feature.title} 
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* our peocess end */}
       {/*testemonial start */}
      <div className='md:py-12 py-10 bg-gray-50'>
        <div className='w-[85%] mx-auto  '>\
          {/* Heading */}
          <div className="text-center mb-5">
            <p className="text-xl font-semibold text-orange-500 uppercase tracking-wider">
              Testemonials
            </p>
            <h2 className="sm:text-3xl text-2xl md:text-4xl font-bold text-black mt-3">
              We Care About Our Customer
            </h2>
          </div>
          {/* process */}
          <div className=' items-center'>
             <Slider/>
          </div>
        </div>
      </div>
      {/* testemonial end */}

    </>
  )
}
