import { useState } from "react"
import Swal from "sweetalert2";

export default function ContactUs() {
    const [Data, setData] = useState({
        name: "",
        email: "",
        subject : "",
        message: ""
    })
    const KirimEmail = async(e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        const Response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
        if(Response.status === 200){
            setData({
                name: "",
                email: "",
                subject : "",
                message: ""
            });
            Swal.fire({
                icon: 'success',
                title: 'Email Sent',
                text: `Thank you for contacting us ${Data.name}, we will reply your email as soon as possible`
            });
        }
    }
    return(
        <>
            <section className="p-16 w-auto bg-slate-100 flex gap-28 justify-center">
                <div className="profile w-[100%] h-[500px] bg-red-500 flex justify-between gap-12">
                    <div className="profile bg-slate-200 w-[40%] p-6">
                        <p className="text-3xl text-center font-bold">Contact Us</p>
                        <form onSubmit={KirimEmail} method="POST" id="formEmail" className="grid grid-cols-1 gap-5">
                            <div className="formInput grid grid-cols-1 gap-1 mt-5">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={Data.name} onChange={(e) => setData({...Data, name: e.target.value})} required/>
                            </div>
                            <div className="formInput grid grid-cols-1 gap-1">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" value={Data.email} onChange={(e) => setData({...Data, email: e.target.value})} required/>
                            </div>
                            <div className="formInput grid grid-cols-1 gap-1">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" value={Data.subject} onChange={(e) => setData({...Data, subject: e.target.value})} required/>
                            </div>
                            <div className="formInput grid grid-cols-1 gap-1">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" value={Data.message} onChange={(e) => setData({...Data, message: e.target.value})} required/>
                            </div>
                            <button className="bg-blue-500 text-white rounded-lg px-5 py-1 text-lg" type="submit">
                                Send Email
                            </button>
                        </form>
                    </div>
                    <div className="profile bg-blue-500 w-[50%] h-[300px] mt-20">
                        Hello 
                    </div>

                </div>
            </section>
        </>
    )
}