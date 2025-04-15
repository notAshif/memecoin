import 'boxicons'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import image1 from '../assets/image1.svg'




const exchanges = ['LBANK', 'Gate.io', 'Bitget', 'BigX']



export default function Main() {
    const [OpenMenu, setOpenMenu] = useState(false);
    const [Copied, setCopied] = useState(false);




    const address = 0x532f27101965dd16442E59d40670FaF5eBB142E4;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const allSlides = Array(8).fill(exchanges).flat();

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <>
            <div className="bg-[#3c574b] min-h-screen ">
                <header className="fixed inset-x-0 top-0 z-50 bg-[#2C453C]-transparent">
                    <motion.nav
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex shadow-[3px_3px_0_#000] items-center justify-between px-4 md:px-6 py-3 bg-[#f8fae5] rounded-full border border-black text-black w-[95%] max-w-6xl mx-auto mt-4"
                    >
                        <div className="font-extrabold text-2xl md:text-3xl flex items-center font-mono">
                            <span className="mr-1"><img src="https://www.memecoin.org/_next/static/media/memecoin-big.8968eebf.gif" alt="coin" className='h-8 w-8' /></span>
                            <span>MMC</span>
                        </div>

                        <div className="flex items-center space-x-2 md:space-x-4">
                            <div className="hidden lg:flex items-center space-x-4">
                                {['telegram', 'discord-alt', 'instagram', 'digg'].map((icon, index) => (
                                    <box-icon
                                        key={index}
                                        type="logo"
                                        name={icon}
                                        class="text-2xl md:text-3xl cursor-pointer hover:scale-110 transition-transform"
                                    ></box-icon>
                                ))}
                            </div>

                            <button className="bg-[#FCFAC2] shadow-[3px_3px_0_#000] text-black font-semibold  rounded-full px-3 md:px-4 py-1 text-lg md:text-2xl hover:scale-110 transition-transform border border-black font-mono">
                                Buy
                            </button>

                            <button
                                className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:scale-110 transition-transform cursor-pointer"
                                onClick={() => setOpenMenu(!OpenMenu)}
                            >
                                <box-icon name={OpenMenu ? 'x' : 'menu'} color="white"></box-icon>
                            </button>
                        </div>
                    </motion.nav>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out w-[95%] max-w-6xl mx-auto ${OpenMenu ? 'max-h-96 mt-2' : 'max-h-0'
                            }`}
                    >
                        <div className="bg-[#0F2C23] text-[#E2FEA5] border border-black shadow-md rounded-xl px-4 py-8 md:py-10">
                            <ul className="flex flex-col font-bold space-y-4 md:space-y-5 text-center font-mono text-xl md:text-3xl">
                                {['ABOUT', 'FEATURES', 'TOKENOMICS', 'ROADMAP', 'HOW TO BUY', 'FAQ'].map((item, index) => (
                                    <li key={index} className="hover:scale-110 transition-transform cursor-pointer">
                                        <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </header>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="flex flex-col items-center justify-center px-4 pt-44 md:pt-56 pb-20 text-center"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-xs sm:text-sm md:text-xl font-bold text-[#DBE3CE] font-mono mb-3"
                    >
                        INTRODUCING
                    </motion.h1>
                    <motion.h2
                        variants={scaleIn}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-[#E2FEA5] font-extrabold leading-tight"
                    >
                        MEMECOIN
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xs sm:text-sm md:text-xl font-bold font-mono text-[#DBE3CE] mt-4 max-w-xl"
                    >
                        The only cryptocurrency you will HODL till the next bear run.
                    </motion.p>

                    <motion.div
                        variants={staggerContainer}
                        className="mt-6 font-mono flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <motion.button
                            variants={scaleIn}
                            className="text-base sm:text-xl shadow-[3px_3px_0_#000] font-bold border-2 md:text-2xl bg-[#E9E8B5] px-6 py-2 rounded-full hover:scale-110 transition-transform"
                        >
                            Buy
                        </motion.button>
                        <motion.a
                            variants={fadeInUp}
                            href="#"
                            className="flex items-center text-[#CED6C2] font-bold group space-x-2"
                        >
                            <p className="text-2xl md:text-3xl font-light transition-transform group-hover:translate-x-1 duration-200 ease-in">
                                &rarr;
                            </p>
                            <p className="text-base sm:text-lg md:text-xl">dextools chart</p>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-[30%] py-1 bg-[#D1EA9A] ml-[20rem] rounded-t-lg border-2 flex items-center justify-center md:justify-start p-4"
                >
                    <span className="text-sm font-medium flex items-center gap-1">
                        <box-icon
                            name="copy"
                            className="bx bxs-copy cursor-pointer text-lg"
                            onClick={copyToClipboard}
                        ></box-icon>
                        {Copied ? `Copied: ${address}` : `Token address: ${address}`}
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-[#E5EBD6] px-4 md:px-6 py-10 rounded-[50px] border-2 border-black shadow-md text-black w-[95%] max-w-6xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-black leading-tight mb-6"
                    >
                        <p>GET IT</p>
                        <p className="mt-2">NOW ON<span className="text-black">:</span></p>
                    </motion.div>
                    <div className="relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            slidesPerView="auto"
                            spaceBetween={30}
                            centeredSlides={false}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={8000}
                            freeMode={{
                                enabled: true,
                                momentum: false,
                                sticky: false,
                            }}
                            resistance={false}
                            resistanceRatio={0}
                            allowTouchMove={false}
                            className="w-full !overflow-visible"
                        >
                            {allSlides.map((exchange, index) => (
                                <SwiperSlide key={index} className="!w-auto select-none" virtualIndex={index}>
                                    <button className="bg-[#E2E1AE] px-8 py-4 border-2 border-black text-black font-mono font-bold text-2xl rounded-full hover:bg-[#D1EA9A] transition-all whitespace-nowrap shrink-0 shadow-[3px_3px_0_#000]">
                                        {exchange}
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <motion.img
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        src={image1}
                        alt="cartoon"
                        className="absolute hidden md:block right-[270px] bottom-1 w-80"
                    />
                </motion.div>
            </div>
        </>
    )
}
