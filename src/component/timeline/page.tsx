interface TimelineProps {
    data: { institution: string; program: string; year: string }[];
}

export default function Timeline({ data }: TimelineProps) {
    return (
        <>
            <style jsx>{`
                .timeline-container {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    padding-left: 40px;
                }

                .timeline-item {
                    display: flex;
                    position: relative;
                    margin-bottom: 10px;
                    gap: 15px;
                }

                .timeline-dot {
                    width: 10px;
                    height: 10px;
                    background-color: #00ffbf;
                    border-radius: 50%;
                    position: absolute;
                    left: 5px;
                    top: 10px;
                    transform: translateX(-50%);
                }

                  /* Garis untuk semua elemen kecuali elemen terakhir */
                .timeline-item:not(:last-child)::before {
                    content: ""; /* Garis vertikal */
                    width: 2px;
                    height: 100%; /* Garis penuh sepanjang tinggi elemen */
                    background-color: #FFFFFF;
                    position: absolute;
                    left: 4px; /* Posisi di tengah timeline-dot */
                    top: 20px; /* Mulai setelah timeline-dot */
                }

                /* Garis pendek untuk elemen terakhir */
                .timeline-item:last-child::before {
                    content: ""; /* Garis vertikal terakhir */
                    width: 2px;
                    height: 60px; /* Tinggi garis pendek */
                    background-color: #FFFFFF;
                    position: absolute;
                    left: 4px; /* Posisi di tengah timeline-dot */
                    top: 20px; /* Mulai setelah timeline-dot */
                }

                .timeline-content {
                    margin-left: 20px;
                }

                

            `}</style>

            <div className="timeline-container">
                {data.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <p className="text-3xl text-white font-bold">{item.institution}</p>
                            <p className="text-xl text-slate-300">{item.program}</p>
                            <span className="text-lg text-slate-500">{item.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
