import Image from "next/image";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import DPKPP from '@/public/img/DPKPP.jpg';
import HeyCow from '@/public/assets/heycow.svg';
import Jurnalisa from '@/public/img/Jurnalisa.png';
export default function ProjectCard() {
    const data_project = [
        {
            id: 1,
            position: "IT Support",
            title: "Project SIMPOL V.02",
            description: "Aplikasi untuk mempermudah pelayanan administrasi Pengesahan Dokumen Rencana Teknis (PDRT) dan Surat Keterangan Izin Mendirikan Bangunan Gedung (IMBG) serta pencarian data IMBG.",
            image: DPKPP,
            tgl: 'Nov 2024 - Now'
        },
        {
            id: 2,
            position: "Frontend Developer",
            title: "Project HeyCow Web",
            description: "HeyCow adalah aplikasi Mobile, Web, dan IoT untuk memantau kesehatan, gejala, dan perilaku sapi secara real-time. Dilengkapi fitur Ngangon untuk penitipan sapi dan platform diskusi, HeyCow membantu peternak mengelola ternak dengan efisien dan meningkatkan produktivitas",
            image: HeyCow,
            tgl: 'August 2024 - Dec 2024'
        },
        {
            id: 3,
            position: "UI/UX Slice",
            title: "Project Jurnalisa",
            description: "Jurnalisa merupakan produk halaman web tentang berita, dengan referensi dari Tirto.ID dan Narasi.tv. Namun, kami akan membuat versi lite yang berfokus pada jurnal, aktivitas, dan acara di SMA 51 Jakarta. Dengan demikian, mereka dapat mempromosikan sekolah mereka kepada masyarakat luas dan menarik minat calon siswa untuk masuk ke SMA 51 Jakarta.",
            image: Jurnalisa,
            tgl: 'Nov 2024 - Now'
        }
    ];

    return (
        <>
            <div id="Learning-Path" className="p-16 grid grid-cols-1 gap-6">
                <p className="text-lg text-white flex gap-5 ">
                    <span className="text-[#2AD882] text-3xl">
                        <MdOutlineHorizontalRule />
                    </span>
                    M&nbsp;&nbsp;y&nbsp;&nbsp; &nbsp;&nbsp;E&nbsp;&nbsp;x&nbsp;&nbsp;p&nbsp;&nbsp;e&nbsp;&nbsp;r&nbsp;&nbsp;i&nbsp;&nbsp;e&nbsp;&nbsp;n&nbsp;&nbsp;c&nbsp;&nbsp;e&nbsp;&nbsp;s
                </p>   
                <p className="title text-5xl text-white font-bold ">
                    Project
                </p>
                <div className="grid grid-cols-3 gap-12 mt-6">
                    {data_project.map((project) => (
                        <div key={project.id} className="mb-8 grid grid-cols-1 border-solid border-2 border-[#2AD882] rounded-lg p-6">
                            <p className="text-2xl text-white">{project.position}</p>
                            <div className="w-[400px] h-[224px] flex justify-center items-center my-16">
                                <Image
                                    width={305}
                                    height={224}
                                    className=" object-cover object-center"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>
                            <div >
                                <h1 className="text-xl font-semibold text-white">{project.title} <br /><span className="text-gray-300 text-sm"> ({project.tgl})</span> </h1>
                                <p className="mt-2 text-sm text-gray-300 text-justify">{project.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="p-6 border-solid border-2 border-[#2AD882] rounded-lg bg-[#2AD882] h-[400px]">
                        <p className="text-3xl mt-24 font-bold text-wrap">
                            You can explore more other projects
                        </p>
                        <FaArrowRightLong className="text-5xl mt-4" />
                    </div>
                </div>
            </div>
           
        </>
        
    );
}
