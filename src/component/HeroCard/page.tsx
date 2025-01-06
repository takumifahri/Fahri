import wpp from '@/public/img/wpp1.jpg'

export default function HeroCard(){
    return(
        <>
            {/* HERO CARD */}
            <section className="hero-card w-auto">
                <div className=" bg-cover bg-center w-auto h-[600px]" style={{backgroundImage: `url(${wpp.src})`}}>
                    <div className='w-full h-full bg-[#1C1B22] bg-opacity-50 flex justify-center items-center'>
                        <div className='text-center'>
                            <h1 className="text-4xl font-semibold text-white">Welcome To My Page</h1>
                            <p className="mt-2 text-white text-xl"><span className='font-bold'>Fahri Radiansyah </span>Present</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}