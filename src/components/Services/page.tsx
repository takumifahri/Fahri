import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Services() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Set isLoaded to trigger animations
        setIsLoaded(true);
        
        // Get initial window width
        setWindowWidth(window.innerWidth);
        
        // Update window width on resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Determine animation properties based on screen size
    const getAnimationProps = (index: number) => {
        // Mobile animations (stack from bottom)
        if (windowWidth < 640) {
            return {
                initial: { y: 50, opacity: 0 },
                animate: { y: isLoaded ? 0 : 50, opacity: isLoaded ? 1 : 0 },
                transition: { duration: 0.5, delay: 0.2 * index }
            };
        }
        // Tablet animations (slide from right with shorter distance)
        else if (windowWidth < 1024) {
            return {
                initial: { x: 50, opacity: 0 },
                animate: { x: isLoaded ? 0 : 50, opacity: isLoaded ? 1 : 0 },
                transition: { duration: 0.4, delay: 0.15 * index }
            };
        }
        // Desktop animations (slide from right)
        else {
            return {
                initial: { x: 100, opacity: 0 },
                animate: { x: isLoaded ? 0 : 100, opacity: isLoaded ? 1 : 0 },
                transition: { duration: 0.5, delay: 0.1 * index }
            };
        }
    };

    interface ServiceCardProps {
        title: string;
        description: string;
        technologies: string[];
        index: number;
    }

    const ServiceCard = ({ title, description, technologies, index }: ServiceCardProps) => {
        const animationProps = getAnimationProps(index);
        
        return (
            <motion.div
                className="bg-gray-900 rounded-lg p-6 h-full flex flex-col"
                {...animationProps}
            >
                <h3 className="font-bold text-white text-xl mb-4">{title}</h3>
                <p className="text-gray-400 mb-8 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{tech}</span>
                    ))}
                </div>
                <div className="mt-auto">
                    <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-green-400"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                </div>
            </motion.div>
        );
    };

    const services = [
        {
            title: "Front End Development",
            description: "We provide top-notch front end development services to create visually appealing and user-friendly interfaces.",
            technologies: ["HTML & CSS", "JavaScript", "React", "Next.js"]
        },
        {
            title: "Full Stack Development",
            description: "Our full stack development services cover both front end and back end to deliver comprehensive solutions.",
            technologies: ["HTML & CSS", "Laravel", "Node.JS", "etc"]
        },
        {
            title: "Backend Development",
            description: "We offer professional backend development services to build robust and scalable web applications.",
            technologies: ["PHP", "Node.JS", "Express", "etc"]
        }
    ];

    // Get title section animation based on screen size
    const getTitleAnimation = () => {
        if (windowWidth < 768) {
            return {
                initial: { y: -30, opacity: 0 },
                animate: { y: isLoaded ? 0 : -30, opacity: isLoaded ? 1 : 0 },
                transition: { duration: 0.5 }
            };
        } else {
            return {
                initial: { x: -50, opacity: 0 },
                animate: { x: isLoaded ? 0 : -50, opacity: isLoaded ? 1 : 0 },
                transition: { duration: 0.5 }
            };
        }
    };

    const titleAnimation = getTitleAnimation();

    return (
        <section className="bg-green-400 text-gray-900 py-12 px-6 md:px-16 lg:px-28 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="title-text md:w-1/3">
                        <motion.div {...titleAnimation}>
                            <h3 className="text-3xl font-bold mb-6">My Offer</h3>
                            <p className="text-gray-800 mb-8 max-w-md">
                                Discover our exceptional services designed to elevate your business. From cutting-edge Front End development and precise UI/UX slicing to robust Backend solutions and comprehensive Full Stack expertise, we have everything you need to succeed.
                            </p>
                        </motion.div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard 
                                    key={index} 
                                    {...service} 
                                    index={index} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}