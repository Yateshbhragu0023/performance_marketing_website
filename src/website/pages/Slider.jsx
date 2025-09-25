import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {

    const reviews = [
        {
            name: "Amit Sharma",
            role: "Startup Founder",
            text: "The team built a website that truly represents my brand. Clean design, fast loading, and mobile-friendly!",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Priya Verma",
            role: "Marketing Head",
            text: "Super impressed with their creativity and timely delivery. Definitely recommend them!",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Rohit Kumar",
            role: "E-commerce Owner",
            text: "My sales boosted after the redesign. The UI/UX was exactly what I wanted for my online store.",
            img: "https://randomuser.me/api/portraits/men/64.jpg",
        },
        {
            name: "Neha Singh",
            role: "Entrepreneur",
            text: "Loved the professional approach and clear communication. Will work again for future projects!",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];

    return (
        <div className="w-full  mx-auto bg-white rounded-[50px] relative">
          
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3500 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-12"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="backdrop-blur-xl my-4 hover:bg-orange-500 group border border-white/20 shadow-2xl rounded-3xl p-6 h-full flex flex-col justify-between text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500">
                            <img
                                src={review.img}
                                alt={review.name}
                                className="w-20  h-20 rounded-full mx-auto border-4 border-orange-500 mb-4"
                            />
                            <p className=" group-hover:text-white text-black italic mb-6">“{review.text}”</p>
                            <div>
                                <h3 className="group-hover:text-white text-lg font-semibold text-black">
                                    {review.name}
                                </h3>
                                <p className="group-hover:text-white text-sm text-orange-500">{review.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
