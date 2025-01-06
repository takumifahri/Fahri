
export default function Navbar(){
    return(
        <div className="w-auto py-6 px-12 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 flex justify-between">
            <a href="#home"></a>
            <ul className="flex gap-10 text-xl text-white py-1">
                <li><a href="#Home">Home</a></li>
                <li><a href="#AboutMe">About Me</a></li>
                <li><a href="#Project">Project</a></li>
                <li><a href="#ContactMe">Contact Me</a></li>
            </ul>
            <button className=" text-lg bg-white rounded-lg px-5 py-1 text-black">Login</button>
        </div>
    )
}