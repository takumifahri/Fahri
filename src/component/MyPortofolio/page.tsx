import Link from "next/link";
import { MdFileDownload } from "react-icons/md";

export default function MyPortofolio(){
    // Backend

    return(
        <>
            <div className="lg:w-[55%] md:w-[60%] w-[75%] bg-[#1C1B22] py-10 px-16 ">
                <nav className="Portofolio">
                    <Link href="/">
                        <p className="text-2xl lg:text-lg text-white font-bold">MY PORTOFOLIO.</p>
                    </Link>
                </nav>

                <div className="introduction mt-24 grid grid-cols-1 gap-5">
                    <p className="text-xl text-white">
                        Software Developer
                    </p>

                    <p className="lg:text-7xl md:text-4xl sm:text-2xl text-3xl text-white font-bold leading-none">
                        Hello I am
                        <br />
                        <span className="text-[#2AD882]">Fahri Radiansyah</span>
                    </p>
                    <p className="lg:text-lg text-xs text-pretty text-white">
                        Halo! Saya Fahri, seorang software engineer yang sedang menempuh pendidikan di IPB university di bidang Manajemen Informatika! Software Engineering yang saya lakukan saat ini adalah web design, struktur web serta development web! Bisa kalian check hasil hasil project saya saat ini, dan juga saya pengalaman pada organisasi!
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