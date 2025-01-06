import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer(){
    
    return(
        <>
            <div className="footer bg-[#232229] w-full p-16 text-white grid grid-cols-1 gap-6">
                <p className="text-2xl font-bold text-white">
                    MY PORTOFOLIO.
                </p>
                <p className="text-xl">
                    For Business inquiry please send email to loremipsum@gmail.com
                </p>
                <div className="icons-icons flex gap-8 text-2xl">
                    <Link href={'https://twitter.com'}>
                        <FaXTwitter />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/fahri-r-82b135295'}>
                        <FaLinkedin />
                    </Link>
                    <Link href={'https://www.instagram.com/fhri.r_/'}>
                        <FaInstagram />
                    </Link>
                </div>
            </div>
            <footer className="w-auto bg-[#232229] ">
                <div className="footer-2">
                    <p className="text-md text-center text-white p-5">
                        &copy; {new Date().getFullYear()} Fahri Radiansyah - Akhfa Bagas - Inspira Daya. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}