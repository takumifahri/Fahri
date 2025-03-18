import Image from "next/image";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa6";

export default function Skills() {
  // Updated SkillIcon component with neon shadow effect
  const SkillIcon = ({ name, icon }: { name: string; icon: React.ReactNode | string }) => {
    // Generate dynamic shadow color based on name
    const getShadowColor = (name: string) => {
      switch (name) {
        case "HTML5": return "shadow-orange-500/50";
        case "JavaScript": return "shadow-yellow-400/50";
        case "Node.js": return "shadow-green-500/50";
        case "Tailwind": return "shadow-sky-400/50";
        case "React": return "shadow-blue-400/50";
        default: return "shadow-gray-400/50";
      }
    };

    return (
      <div className={`flex flex-col items-center justify-center p-4 border border-green-400 rounded-lg bg-gray-800 hover:bg-gray-700 transition hover:shadow-lg  shadow-neon-green `}>
        <div className="text-3xl sm:text-4xl mb-2">
          {typeof icon === "string" ? (
            <Image src={icon} alt={name} width={40} height={40} />
          ) : (
            icon
          )}
        </div>
        <span className="text-xs sm:text-sm text-center text-gray-300">{name}</span>
      </div>
    );
  };

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap  className="text-purple-400"/> }
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-28">
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <span className="w-8 h-1 bg-green-400 inline-block mr-4"></span>
        LEARNING PATH
      </h2>
      <h3 className="text-3xl font-bold mb-8">
        Skill & <span className="text-green-400">Education</span> 
      </h3>
      
      {/* Layout flex untuk Education dan Skills berdampingan dengan gap kecil */}
      <div className="flex flex-col md:flex-row md:gap-4 mb-12">
        {/* Bagian kiri: Education */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="space-y-6">
            {Array(1).fill(null).map((_, i) => (
              <div key={i} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <div className="w-0.5 h-full bg-green-400"></div>
                </div>
                <div>
                  <h4 className="font-bold">IPB University</h4>
                  <p className="text-gray-400">Software Engineering</p>
                  <p className="text-gray-500 text-sm">2023 - 2027</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bagian kanan: Skills */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <SkillIcon key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
          
      <div className="border border-green-400 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xl font-bold mb-4 md:mb-0">Interested working with me?</p>
        <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-6 rounded transition">
          Email me
        </button>
      </div>
    </section>
  );
}