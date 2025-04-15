import { motion } from "framer-motion"
import footerImage from '../assets/footerImage.svg'
const FooterSection = () => {
    return (
        <>
          
            <section className="bg-[#3c574b] relative px-4 sm:px-8 md:px-16 pt-16 pb-80 overflow-hidden">
                
                <div className="flex items-center justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-[#CCE595] text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-sans font-extrabold text-center leading-none"
                    >
                        MEMECOIN
                    </motion.h2>
                </div>

                
                <div className="flex flex-wrap justify-center md:justify-between items-center text-[#f8ffe8] mt-10 gap-4">
                    {["About", "Features", "Tokenomics", "Roadmap", "How to Buy", "FAQ"].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-lg sm:text-xl md:text-2xl font-sans font-semibold hover:scale-110 hover:text-[#CCE595] transition-all ease-in-out duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                
                <div className="flex justify-center mt-12">
                    <button className="bg-[#e2fea5] text-black text-xl sm:text-2xl md:text-3xl px-8 sm:px-10 py-3 sm:py-4 rounded-full border-2 font-bold border-black shadow-[6px_6px_0px_0px_black] hover:scale-105 transition-transform duration-300">
                        Buy Template
                    </button>
                </div>

                
                <p className="text-[#f8ffe8] text-center font-semibold hover:scale-105 transition-transform mt-4 text-sm sm:text-base">
                    → Cryptocurrency Trading Risk Policy
                </p>

                
                <div className="absolute bottom-0 left-0 w-full">
                    <svg viewBox="0 0 1440 320" className="w-full h-[200px] md:h-[300px]">
                        <path
                            fill="#0d221b"
                            fillOpacity="1"
                            d="M0,224L80,213.3C190,203,320,181,480,176C640,171,800,181,960,186.7C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </div>

                
                <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[200px] sm:w-[260px] md:w-[340px] lg:w-[420px]">
                    <img src={footerImage} alt="Memecoin Mascot" className="w-full object-contain" />
                </div>

                
                <div className="absolute bottom-4 left-4 sm:left-8 text-xs sm:text-sm text-[#c0e5b2] font-semibold">
                    © MEMECOIN, 2025
                </div>
                <div className="absolute bottom-4 right-4 sm:right-8 text-xs sm:text-sm text-[#c0e5b2] font-semibold">
                    WITH LOVE FOR MEMES
                </div>
            </section>
        </>
    )
}

export default FooterSection