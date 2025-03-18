
export default function Contact(){
    return(
        <>
            <section className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-28">
                <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
                <p className="text-gray-400 mb-8 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                    <div className="w-full md:w-1/2">
                    <form className="space-y-6">
                        <div>
                        <label htmlFor="name" className="block text-gray-400">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                        />
                        </div>
                        <div>
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                        />
                        </div>
                        <div>
                        <label htmlFor="message" className="block text-gray-400">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
                        ></textarea>
                        </div>
                        <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded transition">
                        Send
                        </button>
                    </form>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                    <h4 className="font-bold text-xl mb-6">Info</h4>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-400">Lorem.ipsum@gmail.com</span>
                        </div>
                        <div className="flex items-start space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-400">+62 823 4567 8912</span>
                        </div>
                        <div className="flex items-start space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}