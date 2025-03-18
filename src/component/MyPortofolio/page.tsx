import { MdFileDownload } from "react-icons/md";
import Link from "next/link";
export default function MyPortofolio(){
    // Backend

    return(
        <>
           <div className="lg:w-[55%] md:w-[70%] w-[90%] mx-auto bg-[#1C1B22] py-6 md:py-8 lg:py-10 px-6 md:px-10 lg:px-16 rounded-lg">
                <nav className="flex items-center justify-between">
                    <Link href="/">
                        <p className="text-xl sm:text-2xl lg:text-2xl text-white font-bold">MY PORTOFOLIO.</p>
                    </Link>
                </nav>

                <div className="introduction mt-10 md:mt-16 lg:mt-24 grid grid-cols-1 gap-3 md:gap-4 lg:gap-5">
                    <p className="text-lg md:text-xl text-white">
                        Software Developer
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight">
                        Hello I am
                        <br />
                        <span className="text-[#2AD882]">Fahri Radiansyah</span>
                    </h1>
                    
                    <p className="text-sm md:text-base lg:text-lg text-white max-w-prose">
                        Halo! Saya Fahri, seorang software engineer yang sedang menempuh pendidikan di IPB university di bidang Manajemen Informatika! Software Engineering yang saya lakukan saat ini adalah web design, struktur web serta development web! Bisa kalian check hasil hasil project saya saat ini, dan juga saya pengalaman pada organisasi!
                    </p>

                    <div className="download-cv w-full sm:w-[60%] md:w-[50%] lg:w-[40%] mt-4 border-solid border-2 flex justify-between border-[#2AD882] rounded hover:bg-[#1a1a20] transition-colors duration-300">
                        <p className="text-lg md:text-xl lg:text-2xl text-white p-3 md:p-4">
                            Download CV
                        </p>
                        <button aria-label="Download CV" className="bg-[#2AD882] w-[20%] flex justify-center items-center hover:bg-[#22c272] transition-colors duration-300">
                            <MdFileDownload className="text-2xl md:text-3xl lg:text-4xl text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}