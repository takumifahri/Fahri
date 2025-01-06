import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
export default function ProjectCard() {
    const data_project = [
        {
            id: 1,
            position: "IT Support",
            title: "Project 1",
            description: "Description 1",
            image: "/images/image1.jpg"
        },
        {
            id: 2,
            position: "Frontend Developer",
            title: "Project 2",
            description: "Description 2",
            image: "/images/image2.jpg"
        },
        {
            id: 3,
            position: "Frontend Developer",
            title: "Project 3",
            description: "Description 3",
            image: "/images/image3.jpg"
        }
    ];

    return (
        <>
            <div id="Learning-Path" className="p-16 grid grid-cols-1 gap-6">
                <p className="text-lg text-white flex gap-5 ">
                    <span className="text-[#2AD882] text-3xl">
                        <MdOutlineHorizontalRule />
                    </span>
                    M&nbsp;&nbsp;y&nbsp;&nbsp; &nbsp;&nbsp;E&nbsp;&nbsp;x&nbsp;&nbsp;p&nbsp;&nbsp;e&nbsp;&nbsp;r&nbsp;&nbsp;i&nbsp;&nbsp;e&nbsp;&nbsp;n&nbsp;&nbsp;c&nbsp;&nbsp;e&nbsp;&nbsp;s
                </p>   
                <p className="title text-5xl text-white font-bold ">
                    Project
                </p>
                <div className="grid grid-cols-3 gap-12 mt-6">
                    {data_project.map((project) => (
                        <div key={project.id} className="mb-8 border-solid border-2 border-[#2AD882] rounded-lg p-6">
                            <p className="text-2xl text-white">{project.position}</p>
                            <Image
                                width={100}
                                height={224}
                                className="h-56 object-cover object-center"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold text-gray-800">{project.title}</h1>
                                <p className="mt-2 text-green-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="p-6 border-solid border-2 border-[#2AD882] rounded-lg bg-[#2AD882] h-[400px]">
                        <p className="text-3xl mt-24 font-bold text-wrap">
                            You can explore more other projects
                        </p>
                        <FaArrowRightLong className="text-5xl mt-4" />
                    </div>
                </div>
            </div>
           
        </>
        
    );
}
