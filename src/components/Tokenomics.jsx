import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from 'swiper/modules'
import React, {useState} from "react";
import image5 from '../assets/image5.svg'


const TokenomicsSection = () => {

    const [hoveredSection, setHoveredSection] = useState(null);

    const titleFadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const containerAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const chartItemAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const labelAnimation = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const percentagePulse = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: {
            opacity: 1,
            scale: [0.7, 1.1, 1],
            transition: {
                duration: 0.5,
                times: [0, 0.7, 1]
            }
        }
    };

    
    const handlePathHover = (sectionId) => {
        setHoveredSection(sectionId);
    };

    const handlePathLeave = () => {
        setHoveredSection(null);
    };

    
    const chartPaths = [
        {
            id: 'lp',
            path: "M 50,50 L 50,0.5 A 49.5,49.5 0 0 1 50,99.5 Z",
            color: "#71BB92",
            percentage: "50%",
            label: "LP locked",
            position: { top: "46%", left: "63%" }
        },
        {
            id: 'treasury',
            path: "M 50,50 L 50,99.5 A 49.5,49.5 0 0 1 0.5,50.00000000000001 Z",
            color: "#EB7F1B",
            percentage: "25%",
            label: "Treasury",
            position: { top: "72%", left: "35%" }
        },
        {
            id: 'charity',
            path: "M 50,50 L 0.5,50.00000000000001 A 49.5,49.5 0 0 1 20.9046,9.9537 Z",
            color: "#D0E999",
            percentage: "15%",
            label: "MEME Charity",
            position: { top: "30%", left: "33%" }
        },
        {
            id: 'cex',
            path: "M 50,50 L 20.9046,9.9537 A 49.5,49.5 0 0 1 49.9999,0.5 Z",
            color: "#E1E7D2",
            percentage: "10%",
            label: "CEX listings",
            position: { top: "10%", left: "42%" }
        }
    ];

    const labelColors = {
        'lp': "#71BB92",
        'treasury': "#E87C18",
        'charity': "#CDE696",
        'cex': "#E9EFDA"
    };

    return (
        <>
            <section id="tokenomics" className="bg-[#3c574b] px-20 py-6 md:px-60 overflow-hidden relative -mb-12">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={titleFadeIn}
                    viewport={{ once: true, amount: 0.2 }}
                    className='text-left text-[#D1EA9A] text-[10rem] font-black leading-tight tracking-wide relative z-0 mt-15 -mb-30'
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="block text-xl font-semibold tracking-normal text-[#E3E9D4] -mb-10"
                    >
                        It's always about that
                    </motion.span>
                    <motion.span
                        initial={{ backgroundPosition: "200% 0" }}
                        whileInView={{
                            backgroundPosition: "0% 0",
                            transition: { duration: 1.2, delay: 0.3 }
                        }}
                        viewport={{ once: true }}
                        style={{
                            backgroundImage: "linear-gradient(90deg, #D1EA9A 0%, #86BD55 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundSize: "200% 100%",
                            display: "inline-block"
                        }}
                    >
                        TOKENOMICS
                    </motion.span>
                </motion.h2>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    whileInView={{ scale: 1, opacity: 1, y: -30 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="z-0 -mb-100 relative flex justify-center"
                >
                    <motion.img
                        whileHover={{
                            y: -10,
                            rotate: [-1, 1, -1],
                            transition: {
                                y: { duration: 0.3 },
                                rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                            }
                        }}
                        src={image5}
                        alt="Token Character"
                        className="w-full max-w-3xl object-contain"
                    />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={containerAnimation}
                    viewport={{ once: true, amount: 0.1 }}
                    className="mx-auto max-w-7xl px-4 mt-[-30px]"
                >
                    <motion.div
                        variants={containerAnimation}
                        className="relative rounded-[60px] border-[3px] border-black bg-[#18332A] py-12 px-4 md:px-8 overflow-hidden"
                    >
                        <motion.div
                            variants={chartItemAnimation}
                            className="relative w-full h-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]"
                        >
                            <Swiper
                                modules={[Autoplay]}
                                loop={true}
                                slidesPerView="auto"
                                spaceBetween={40}
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
                                {Array(12).fill("TOKENOMICS").map((text, i) => (
                                    <SwiperSlide key={i} className="!w-auto">
                                        <span className="text-[#E3E9D4] font-extrabold text-2xl uppercase whitespace-nowrap">
                                            {text}
                                        </span>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>

                        <motion.div
                            variants={chartItemAnimation}
                            className="relative z-10 flex justify-center items-center h-[450px]"
                        >
                            {chartPaths.map((section, index) => (
                                <motion.div
                                    key={`percentage-${index}`}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={percentagePulse}
                                    viewport={{ once: true }}
                                    custom={index}
                                    className="absolute text-sm font-bold rounded-full bg-[#E3E9D4] border-2 border-[#153027] px-3 py-1"
                                    style={section.position}
                                >
                                    {section.percentage}
                                </motion.div>
                            ))}

                            <motion.svg
                                width="360"
                                height="360"
                                viewBox="0 0 100 100"
                                initial={{ rotate: -90 }}
                                whileInView={{
                                    rotate: 0,
                                    transition: { duration: 1.2, ease: "easeOut" }
                                }}
                                viewport={{ once: true }}
                            >
                                {chartPaths.map((section, index) => (
                                    <motion.path
                                        key={section.id}
                                        d={section.path}
                                        fill={section.color}
                                        stroke="#0f2c23"
                                        strokeWidth="1"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                delay: 0.3 + (index * 0.1),
                                                duration: 0.4
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                        viewport={{ once: true }}
                                        onMouseEnter={() => handlePathHover(section.id)}
                                        onMouseLeave={handlePathLeave}
                                        className="origin-center cursor-pointer"
                                    />
                                ))}
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="15"
                                    fill="#0f2c23"
                                    initial={{ scale: 0 }}
                                    whileInView={{
                                        scale: 1,
                                        transition: { delay: 0.7, duration: 0.3 }
                                    }}
                                    viewport={{ once: true }}
                                />
                            </motion.svg>
                        </motion.div>

                        
                        <motion.div
                            variants={containerAnimation}
                            className="mt-10 flex justify-center flex-wrap gap-4"
                        >
                            {chartPaths.map((section, index) => (
                                <motion.div
                                    key={`label-${section.id}`}
                                    variants={labelAnimation}
                                    custom={index}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={{
                                        scale: hoveredSection === section.id ? 1.05 : 1,
                                        boxShadow: hoveredSection === section.id ? "0 5px 15px rgba(0,0,0,0.2)" : "0 2px 5px rgba(0,0,0,0.1)"
                                    }}
                                    className="text-[#102B22] text-xl font-bold border-2 border-[#0E2920] px-5 py-2 rounded-full shadow-md cursor-pointer"
                                    style={{
                                        backgroundColor: labelColors[section.id],
                                        transition: "all 0.2s ease"
                                    }}
                                >
                                    {section.label}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default TokenomicsSection;
