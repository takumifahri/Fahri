import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Footer(){
    return(
        <>
           <div className="footer bg-[#232229] w-full p-6 md:p-12 lg:p-16 text-white grid grid-cols-1 gap-4 md:gap-6">
                <p className="text-xl md:text-2xl font-bold text-white">
                    MY PORTOFOLIO.
                </p>
                <p className="text-base md:text-lg lg:text-xl max-w-lg">
                    For Business inquiry please send email to loremipsum@gmail.com
                </p>
                <div className="icons-icons flex gap-5 md:gap-8 text-xl md:text-2xl">
                    <Link href={'https://twitter.com'} className="hover:text-green-400 transition-colors">
                        <FaXTwitter />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/fahri-r-82b135295'} className="hover:text-green-400 transition-colors">
                        <FaLinkedin />
                    </Link>
                    <Link href={'https://www.instagram.com/fhri.r_/'} className="hover:text-green-400 transition-colors">
                        <FaInstagram />
                    </Link>
                </div>
            </div>
            <footer className="w-auto bg-[#232229]">
                <div className="footer-2">
                    <p className="text-xs md:text-sm lg:text-md text-center text-white p-4 md:p-5">
                        &copy; {new Date().getFullYear()} Fahri Radiansyah - Akhfa Bagas - Inspira Daya. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}