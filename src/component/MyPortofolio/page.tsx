import Link from "next/link";
import { MdFileDownload } from "react-icons/md";

export default function MyPortofolio(){
    // Backend

    return(
        <>
            <div className="w-[55%] bg-[#1C1B22] p-16 ">
                <nav className="Portofolio">
                    <Link href="/">
                        <p className="text-2xl text-white font-bold">MY PORTOFOLIO.</p>
                    </Link>
                </nav>

                <div className="introduction mt-32 grid grid-cols-1 gap-5">
                    <p className="text-xl text-white">
                        Software Developer
                    </p>

                    <p className="text-7xl text-white font-bold leading-none">
                        Hello I am
                        <br />
                        <span className="text-[#2AD882]">Fahri Radiansyah</span>
                    </p>
                    <p className="text-lg text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat vel asperiores illum, accusantium nemo saepe. Dolorem fuga tempora magni minima labore nihil recusandae non aperiam, numquam voluptates quibusdam facilis vitae quae unde. Asperiores dicta similique voluptate laboriosam nesciunt illum, quod ex eligendi maxime maiores, consequuntur veritatis provident sit molestias.
                    </p>

                    <div className="download-cv w-[40%] border-solid border-2 flex justify-around border-[#2AD882]">
                        <p className="text-2xl text-white w-[80%] p-4 ">
                            Download CV
                        </p>
                        <button className=" bg-[#2AD882] w-[20%] flex justify-center items-center">
                            <MdFileDownload className="text-4xl text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}