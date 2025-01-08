import Image from "next/image";
import profilePicture from "@/public/img/profile.png";

export default function Profile() {
// Backend

    return(
        <>
            <div className="lg:w-[45%] md:w-[40%] w-[85%] py-10 px-16 ">
                <nav className="Profile text-center text-2xl">
                    <a href="#" className="test">Home</a>
                    <a href="/Project" className="test mx-16">Project</a>
                    <a href="#ContactMe" className="test"> Contact Me</a>
                </nav>
                <div className="photo lg:mt-24 mt-52 flex justify-center">
                    <Image src={profilePicture} alt="Profile Image" width={250} height={50} className="lg:w-[800px]"/>
                </div>
            </div>
           
        </>
    )
}