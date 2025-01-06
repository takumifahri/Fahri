import Timeline from "../timeline/page";

// icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
// import { FaPhp } from "react-icons/fa";
// import { Button } from "@react-email/components";
// interface
interface TimelineItem {
    id: number;
    institution?: string;
    program: string;
    year: string;
    major?: string;
}

export default function SKill(){
    const Skill = [
        {
            id:1,
            image: <FaHtml5 className="text-red-500" />,
            name: "HTML",
        },
        {
            id:2,
            image: <FaLaravel className="text-red-600" />,
            name: "Laravel",
        },
        {
            id:3,
            image: <TbBrandNextjs />,
            name: "Next JS",
        },
        {
            id:4,
            image: <IoLogoJavascript className="text-yellow-300"/>,
            name: "Javascript Native",
        },
        {
            id:5,
            image: <FaNodeJs className="text-green-600" />,
            name: "Node JS",
        },
        {
            id:6,
            image: <FaCss3Alt  className="text-blue-600"/>,
            name: "CSS",
        },
        {
            id:7,
            image: <FaBootstrap  className="text-purple-400"/>,
            name: "Bootstrap CSS",
        },
        {
            id:8,
            image: <RiTailwindCssFill className="text-sky-400" />,
            name: "Tailwind CSS",
        },
    ]
    const education = [
        {
            id: 1,
            institution : "SMAN 104 Jakarta",
            program : "HighSchool of Science and Mathematics",
            year: "2020-2023",
        },
        {
            id: 2,
            institution : "IPB University",
            program : "Vocational School of Software Engineering",
            year: "2023-Present",
     
        },
       
    ]
    return(
        <>
            <div className="w-auto p-6 gap-32 grid-cols-1 grid">
                <div className="container flex justify-between  gap-20">
                    <div>
                        <Timeline data={education} />
                    </div>
                    <div className="grid grid-cols-3 gap-12">
                        {Skill.map((item) => (
                            <div key={item.id} className="bg-[#1C1B22] text-white   shadow-neon-green h-[197px]  p-6 rounded-lg gap-10">
                                <div className="flex justify-center text-center">
                                    {/* <img src={item.image} alt={item.name} /> */}
                                    <p className="text-9xl">{item.image}</p>
                                </div>
                                <p className="text-lg mt-3 text-center ">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="Email-Me border-solid border-2 border-[#2AD882] w-auto p-10 mx-[4%] flex justify-between">
                    <p className="text-4xl p-5 text-white font-bold">
                        Interested Working With Me?
                    </p>
                    <button className="text-black font-bold bg-[#2AD882] text-4xl py-4 px-2 rounded-xl">
                        Email Me
                    </button>
                </div>
            </div>
            
        </>
    )
}