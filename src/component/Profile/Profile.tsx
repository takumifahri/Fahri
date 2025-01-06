import Image from "next/image";
import profilePicture from "@/public/img/profile.png";

export default function Profile() {
// Backend

    return(
        <>
            <div className="w-[45%] py-10 px-16 ">
                <nav className="Profile text-center text-2xl">
                    <a href="#" className="test">Home</a>
                    <a href="#" className="test mx-16">Project</a>
                    <a href="#ContactMe" className="test"> Contact Me</a>
                </nav>
                <div className="photo mt-24 flex justify-center">
                    <Image src={profilePicture} alt="Profile Image" width={800} height={200} />
                </div>
            </div>
           
        </>
    )
}