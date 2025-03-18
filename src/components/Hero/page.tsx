
import Link from "next/link"
import Image from "next/image"

export default function Hero(){
    return(   
        <>
            <section className="flex flex-col md:flex-row bg-gray-900 text-white  ">
                <div className="w-full md:w-1/2 p-6 md:p-12 lg:px-28 flex flex-col justify-center">
                    <p className="text-gray-400 mb-2">Software Developer</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hello I'm <br/>
                    <span className="text-green-400">Fahri Radiansyah</span>
                    </h1>
                    <p className="text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
                    </p>
                    <button className="flex items-center space-x-2 bg-transparent hover:bg-green-500 text-green-400 hover:text-white border border-green-400 hover:border-transparent rounded px-4 py-2 transition duration-300 ease-in-out w-fit">
                    <span>Download CV</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
                <div className="w-full md:w-1/2 bg-green-400 flex justify-center items-center p-6">
                    <div className="rounded-xl bg-gray-900 p-4">
                    <Image 
                        src="/profile-image.jpg" 
                        alt="Fahri Radiansyah" 
                        width={300} 
                        height={400} 
                        className="rounded-xl"
                    />
                    </div>
                </div>
            </section>
        </>
    )


}