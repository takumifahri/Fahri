import { useState } from "react";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function ContactUs() {
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const sendEmail = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            setData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            Swal.fire({
                icon: 'success',
                title: 'Email Sent',
                text: `Thank you for contacting us ${data.name}, we will reply to your email as soon as possible`
            });
        }
    };
    return (
        <>
        <div>
            <div className="profile w-full flex justify-between gap-12" id="ContactMe">
                    <div className="form bg-[#1C1B22] w-[85%] p-28">
                        <div className="form-dialog w-[60%] text-white ml-8">
                            <p className="text-5xl font-bold">Contact Us</p>
                            <p className="text-md text-slate-300 mt-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, autem.
                            </p>
                            <form onSubmit={sendEmail} method="POST" id="formEmail" className="grid grid-cols-1 gap-5">
                                <div className="relative formInput mt-6">
                                    <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    required
                                    placeholder="Name"
                                    className="peer w-full p-2 pt-5 bg-transparent border-b border-gray-500 text-white placeholder-transparent outline-none focus:border-blue-400"
                                    />
                                    <label
                                    htmlFor="name"
                                    className="absolute left-2 top-2.5 text-gray-500 text-md transition-all duration-300 ease-in-out peer-placeholder-shown:translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-slate-100"
                                    >
                                    Name
                                    </label>
                                </div>
                                <div className="relative formInput">
                                    <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    required
                                    placeholder="Email"
                                    className="peer w-full p-2 pt-5 bg-transparent border-b border-gray-500 text-white placeholder-transparent outline-none focus:border-blue-400"
                                    />
                                    <label
                                    htmlFor="email"
                                    className="absolute left-2 top-2.5 text-gray-500 text-md transition-all duration-300 ease-in-out peer-placeholder-shown:translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-slate-100"
                                    >
                                    Email
                                    </label>
                                </div>
                                <div className="relative formInput">
                                    <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={data.subject}
                                    onChange={(e) => setData({ ...data, subject: e.target.value })}
                                    required
                                    placeholder="Subject"
                                    className="peer w-full p-2 pt-5 bg-transparent border-b border-gray-500 text-white placeholder-transparent outline-none focus:border-blue-400"
                                    />
                                    <label
                                    htmlFor="subject"
                                    className="absolute left-2 top-2.5 text-gray-500 text-md transition-all duration-300 ease-in-out peer-placeholder-shown:translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-slate-100"
                                    >
                                    Subject
                                    </label>
                                </div>
                                <div className="relative formInput">
                                    <textarea
                                    id="message"
                                    name="message"
                                    value={data.message}
                                    onChange={(e) => setData({ ...data, message: e.target.value })}
                                    required
                                    placeholder="Message"
                                    className="peer w-full p-2 pt-5 bg-transparent border-b border-gray-500 text-white placeholder-transparent outline-none focus:border-blue-400"
                                    />
                                    <label
                                    htmlFor="message"
                                    className="text-md absolute left-2 top-2.5 text-gray-500  transition-all duration-300 ease-in-out peer-placeholder-shown:translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-slate-100"
                                    >
                                    Message
                                    </label>
                                </div>
                                <button
                                    className="bg-[#2AD882] text-black font-bold w-[15%] rounded-lg px-2 py-2 text-xl hover:bg-blue-600"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="info absolute mt-[-35rem] right-0 bg-[#232229] text-white w-[35%] h-[420px] p-16 rounded-md shadow-lg ">
                    <p className="text-3xl font-bold text-[#2AD882] ">Info</p>
                    <div className="container grid grid-cols-1 gap-5 mt-10 ">
                        <div className="flex items-center gap-4 mb-4 leading-normal">
                            <div className="text-4xl">
                                <MdEmail/>
                            </div>
                            <p className="text-md">Loremipsum@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4 mb-4 leading-normal">
                            <div className="text-4xl">
                                <FaPhoneAlt />
                            </div>
                            <p className="text-md">+62 8123-4567-8912</p>
                        </div>
                        <div className="flex items-center gap-4 leading-normal">
                            <div className="text-4xl">
                                <FaLocationDot />
                            </div>
                            <p className="text-md">
                                Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
           
        </>
        
    );
}