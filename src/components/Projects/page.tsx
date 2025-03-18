import Image from "next/image";

export default function Projects(){
    interface ProjectCardProps {
        title: string;
        image: string;
        period: string;
        type: string;
    }

    const ProjectCard = ({ title, image, period, type }: ProjectCardProps) => {
        return (
          <div className="border border-gray-700 rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-800">
              <p className="text-gray-400 text-sm">{period}</p>
              <h3 className="font-bold text-white">{title}</h3>
            </div>
            <div className="h-48 relative">
              <Image 
                src={image} 
                alt={title} 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <div className="p-4 bg-gray-800">
              <p className="text-gray-400">{type}</p>
            </div>
          </div>
        );
    };
    const projects = [
        { 
          title: "Full Stack Developer", 
          image: "/projects/ecommerce1.jpg", 
          period: "2021 - Present", 
          type: "E-Commerce Start Up" 
        },
        { 
          title: "Full Stack Developer", 
          image: "/projects/ecommerce2.jpg", 
          period: "2021 - Present", 
          type: "E-Commerce Start Up" 
        },
        { 
          title: "Full Stack Developer", 
          image: "/projects/ecommerce3.jpg", 
          period: "2021 - Present", 
          type: "E-Commerce Start Up" 
        },
        { 
          title: "Full Stack Developer", 
          image: "/projects/ecommerce4.jpg", 
          period: "2021 - Present", 
          type: "E-Commerce Start Up" 
        },
        { 
          title: "Full Stack Developer", 
          image: "/projects/ecommerce5.jpg", 
          period: "2021 - Present", 
          type: "E-Commerce Start Up" 
        }
    ];

    return (
        <section className="bg-gray-900 text-white py-12  px-6 md:px-16 lg:px-28">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="w-8 h-1 bg-green-400 inline-block mr-4"></span>
            MY EXPERIENCE
          </h2>
          <h3 className="text-3xl font-bold mb-8">Project</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            <div className="border border-green-400 rounded-lg flex flex-col items-center justify-center p-6 bg-green-400 text-black">
              <p className="font-bold text-xl mb-4 text-center">You can explore more other projects</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </section>
    );
}