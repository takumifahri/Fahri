import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row ">
      {/* Bagian kiri (hitam) dengan logo */}
      <div className="w-full md:w-1/2 bg-gray-900 text-white p-6 md:px-12 flex items-center ">
        <div className="font-bold text-xl ">MY PORTFOLIO</div>
      </div>
      
      {/* Bagian kanan (hijau) dengan navbar */}
      <div className="w-full md:w-1/2 bg-green-400 p-6 md:px-12 flex justify-end items-center">
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="font-medium hover:text-white">Home</Link></li>
            <li><Link href="/project" className="font-medium hover:text-white">Project</Link></li>
            <li><Link href="/contact" className="font-medium hover:text-white">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}