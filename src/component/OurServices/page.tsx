import { useState } from "react";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
export default function OurServices() {
    const Services = [
        {
            id: 1,
            Offer: "Frontend Projects",
            desc: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam voluptates perspiciatis doloremque beatae, inventore eaque perferendis.",
            req: "Html, Css, Javascript, React, Tailwind CSS"
        },
        {
            id: 2,
            Offer: "Frontend Projects",
            desc: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam voluptates perspiciatis doloremque beatae, inventore eaque perferendis.",
            req: "Html, Css, Javascript, React, Tailwind CSS"
        },
        {
            id: 3,
            Offer: "Frontend Projects",
            desc: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam voluptates perspiciatis doloremque beatae, inventore eaque perferendis.",
            req: "Html, Css, Javascript, React, Tailwind CSS"
        },
        {
            id: 4,
            Offer: "Frontend Projects",
            desc: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam voluptates perspiciatis doloremque beatae, inventore eaque perferendis.",
            req: "Html, Css, Javascript, React, Tailwind CSS"
        },
        {
            id: 5,
            Offer: "Frontend Projects",
            desc: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam voluptates perspiciatis doloremque beatae, inventore eaque perferendis.",
            req: "Html, Css, Javascript, React, Tailwind CSS"
        }
    ]
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };
    return(
        <>
            <div className="our-services p-16 w-auto flex justify-between gap-20 mb-16">
                <div className="letter mt-16 w-[25%]">
                    <p className="text-6xl text-white font-bold leading-tight">
                        Our
                        <span className="text-black"> Services</span>
                    </p>
                    <p className="text-lg text-white mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos numquam voluptates perspiciatis doloremque beatae, inventore eaque perferendis quaerat error exercitationem facere? Tenetur iure nulla doloribus consequuntur deleniti magnam magni. Aut.
                    </p>
                </div>
                
                <div className="relative mt-16 w-[75%]">
                    {/* Cards Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hidden"
                    >
                        {Services.map((service) => (
                            <div
                                key={service.id}
                                className="min-w-[120px] w-[400px] h-[500px] bg-gray-800 text-white p-10  gap-17 rounded-lg shadow-lg flex-shrink-0"
                            >
                                <p className="text-4xl text-wrap text-ellipsis font-bold mt-3">{service.Offer}</p>
                                <p className="text-gray-400 text-lg mt-4 mb-3">{service.desc}</p>
                                <br />
                                <p className="text-[#2AD882] text-md mt-10 mb-2">{service.req}</p>
                                <hr className="bg-slate-100" />
                                <MdArrowOutward className="mt-4 text-xl" />
                            </div>
                        ))}
                    </div>

                    
                </div>
            </div>
        </>
    )
}