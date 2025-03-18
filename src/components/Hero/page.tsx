import Link from "next/link"
import Image from "next/image"
import profilePicture from "@/public/img/profile-fix.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if screen is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Check on initial load
        checkMobile();
        
        // Add listener for resize events
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
    };
    
    const slideIn = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    };
    
    const buttonAnimation = {
        initial: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.2 } }
    };

    return (   
        <>
            <section className="flex flex-col md:flex-row bg-gray-900 text-white">
                <div className="w-full md:w-1/2 p-6 md:p-12 lg:px-28 flex flex-col justify-center">
                    <motion.p 
                        className="text-gray-400 mb-2"
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                    >
                        Software Developer
                    </motion.p>
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                    >
                        Hello I'm <br/>
                        <span className="text-green-400">Fahri Radiansyah</span>
                    </motion.h1>
                    <motion.p 
                        className="text-gray-400 mb-6"
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                    >
                        Halo! Saya Fahri, seorang software engineer yang sedang menempuh pendidikan di IPB university di bidang Manajemen Informatika! Software Engineering yang saya lakukan saat ini adalah web design, struktur web serta development web! Bisa kalian check hasil hasil project saya saat ini, dan juga saya pengalaman pada organisasi!
                    </motion.p>
                    <motion.button 
                        className="flex items-center space-x-2 bg-transparent hover:bg-green-500 text-green-400 hover:text-white border border-green-400 hover:border-transparent rounded px-4 py-2 transition duration-300 ease-in-out w-fit"
                        variants={buttonAnimation}
                        whileHover="hover"
                        initial="initial"
                    >
                        <span>Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </motion.button>
                </div>
                <div className="w-full md:w-1/2 bg-green-400 flex justify-center items-center p-4 md:p-6 lg:p-12">
                    <motion.div 
                        className="rounded-xl bg-gray-900 p-2 md:p-4 max-w-xs md:max-w-md lg:max-w-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={slideIn}
                            >
                                <Image 
                                    src={profilePicture} 
                                    alt="Fahri Radiansyah" 
                                    width={isMobile ? 220 : 350}
                                    height={isMobile ? 300 : 480}
                                    className="rounded-xl object-cover"
                                    sizes="(max-width: 768px) 220px, (max-width: 1024px) 300px, 350px"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}