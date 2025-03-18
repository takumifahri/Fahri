export default function Services(){
    interface ServiceCardProps {
        title: string;
        description: string;
        technologies: string[];
    }
    const ServiceCard = ({ title, description, technologies }: ServiceCardProps) => {
        return (
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="font-bold text-white text-xl mb-4">{title}</h3>
            <p className="text-gray-400 mb-8">{description}</p>
            <div className="flex space-x-2">
              {technologies.map((tech, index) => (
                <span key={index} className="text-xs text-gray-400">{tech}</span>
              ))}
            </div>
            <div className="mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        );
    };
    const services = [
        {
          title: "Front End Development",
          description: "We provide top-notch front end development services to create visually appealing and user-friendly interfaces.",
          technologies: ["HTML & CSS, JavaScript, React, Next.js"]
        },
        {
          title: "Full Stack Development",
          description: "Our full stack development services cover both front end and back end to deliver comprehensive solutions.",
          technologies: ["HTML & CSS, Laravel, Node.JS, etc" ]
        },
        {
          title: "Backend Development",
          description: "We offer professional backend development services to build robust and scalable web applications.",
          technologies: ["PHP, Node.JS, Express, etc"]
        }
    ];

    return (
        <section className="bg-green-400 text-gray-900 py-12 px-6 md:px-16 lg:px-28">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="title-text md:w-1/3">
                        <h3 className="text-3xl font-bold mb-6">My Offer</h3>
                        <p className="text-gray-800 mb-8 max-w-md">
                            Discover our exceptional services designed to elevate your business. From cutting-edge Front End development and precise UI/UX slicing to robust Backend solutions and comprehensive Full Stack expertise, we have everything you need to succeed.
                        </p>
                    </div>
                    <div className="md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}