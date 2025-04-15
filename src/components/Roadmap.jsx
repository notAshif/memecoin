import { useState } from "react";
import { motion } from "framer-motion";
import image6 from '../assets/image6.avif'

const Stage = [
    {
        title: 'STAGE 1:',
        subtitle: '“CONCEPTUALIZATION”',
        color: 'text-[#EE821E]',
        items: ['Research', 'Team Building', 'Whitepaper', 'Compliance', 'Community'],
        checked: [true, true, true, true, false],
    },
    {
        title: 'STAGE 2:',
        subtitle: '"DEVELOPMENT"',
        color: 'text-[#72BC93]',
        items: ['Blockchain', 'Wallets', 'Website', 'Testing', 'Listings'],
        checked: [true, true, true, true, true],
    },
    {
        title: 'STAGE 3:',
        subtitle: '"LAUNCH"',
        color: 'text-[#5A14D3]',
        items: ['Token Sale', 'Marketing', 'Use Cases', 'Education', 'Feedback'],
        checked: [false, false, false, false, false],
    },
    {
        title: 'STAGE 4:',
        subtitle: '"GROWTH"',
        color: 'text-[#3D554A]',
        items: ['Governace', 'Incentive', 'Patnerships', 'Scaling', 'Vision'],
        checked: [false, false, false, false, false],
    },
    {
        title: 'STAGE 1:',
        subtitle: '“CONCEPTUALIZATION”',
        color: 'text-[#EE821E]',
        items: ['Research', 'Team Building', 'Whitepaper', 'Compliance', 'Community'],
        checked: [true, true, true, true, false],
    },
    {
        title: 'STAGE 2:',
        subtitle: '"DEVELOPMENT"',
        color: 'text-[#72BC93]',
        items: ['Blockchain', 'Wallets', 'Website', 'Testing', 'Listings'],
        checked: [true, true, true, true, true],
    },
    {
        title: 'STAGE 3:',
        subtitle: '"LAUNCH"',
        color: 'text-[#5A14D3]',
        items: ['Token Sale', 'Marketing', 'Use Cases', 'Education', 'Feedback'],
        checked: [false, false, false, false, false],
    },
]

const RoadmapSection = () => {
    const [showStage, setShowStage] = useState(0);
    const visibility = 3;

    const handleNext = () => {
        if (showStage + visibility < Stage.length) {
            setShowStage(showStage + 1)
        }
    }

    const handlePrev = () => {
        if (showStage > 0) {
            setShowStage(showStage - 1)
        }
    }

    return (
        <>


            <section id="roadmap"  className="relative bg-[#3c574b] text-white px-20 py-6 md:px-70 overflow-hidden mt-10 ">
                <div className="grid md:grid-cols-2 items-center gap-10 z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl font-semibold text-[#DCE3CF] -mb-2">We are on the</p>
                        <h2 className="text-[7rem] md:text-[10rem] font-black text-[#D3EC9C] leading-none">
                            ROAD<br />MAP
                        </h2>
                        <p className="text-[#DCE3CF] -mt-2 text-xl font-semibold">to heaven.</p>
                    </motion.div>


                    <div className="flex justify-center relative mt-10">
                        <img
                            src={image6}
                            alt="Coin Mascot"
                            className="w-[350px] md:w-[450px] drop-shadow-lg"
                        />

                        <div className="absolute top-4 right-10 animate-bounce">☁️</div>
                    </div>
                </div>

                <div className="relative mt-10 w-full max-w-7xl mx-auto">
                    <div className="space-x-4 z-10 absolute left-122 -top-7">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full bg-white hover:scale-110 transition-transform shadow-md">
                            <img src="/src/assets/left.avif" alt="left" className="w-full h-full object-contain" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-white hover:scale-110 transition-transform shadow-md">
                            <img src="/src/assets/right.avif" alt="right" className="w-full h-full object-contain" />
                        </button>
                    </div>


                    <div className="overflow-hidden -mt-12 -mb-6">
                        <div
                            className="flex transition-transform duration-800 gap-6"
                            style={{ transform: `translateX(-${showStage * (350 + 24)}px)` }}
                        >
                            {Stage.map((stage, index) => (
                                <div
                                    key={index}
                                    className="bg-[#E5EBD6] rounded-t-full w-[300px] md:w-[350px] shrink-0 h-[430px] p-20"
                                >
                                    <h3 className={`text-4xl font-extrabold uppercase ${stage.color} `}>{stage.title}</h3>
                                    <p className="font-semibold text-[#132E25] mt-1 mb-10">{stage.subtitle}</p>
                                    <ul className="mt-4 space-y-5 text-sx text-[#132E25]">
                                        {stage.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <input type='checkbox' checked={[stage.checked[i]]} readOnly className="accent-[#132E25]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RoadmapSection