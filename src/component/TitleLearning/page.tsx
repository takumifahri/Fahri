import { MdOutlineHorizontalRule } from "react-icons/md";
interface TimelineItem {
    id: number;
    institution?: string;
    program: string;
    year: string;
    major?: string;
}

interface TimelineProps {
    data: TimelineItem[];
}


export default function TitleLearning() {
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
    return (
        <>
            
            <div id="Learning-Path" className="w-[100%] p-16 grid grid-cols-1 gap-6">
                <p className="text-lg text-white flex gap-5 ">
                <span className="text-[#2AD882] text-3xl">
                    <MdOutlineHorizontalRule />
                </span>
                    L&nbsp;&nbsp;e&nbsp;&nbsp;a&nbsp;&nbsp;r&nbsp;&nbsp;n&nbsp;&nbsp;i&nbsp;&nbsp;ng &nbsp;&nbsp;P&nbsp;&nbsp;a&nbsp;&nbsp;t&nbsp;&nbsp;h
                </p>   
                <p className="title text-5xl text-white font-bold ">
                    Skill & <span className="text-[#2AD882]">Education</span>
                </p>
            </div>
            
           
        </>
    )
}