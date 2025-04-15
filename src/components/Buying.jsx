import { motion } from "framer-motion" 
import { useState } from "react"
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
const Step = [
    {
        title: 'CHOOSE A CRYPTO-CURRENCY EXCHANGE:',
        text: 'Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.'
    },
    {
        title: 'SIGN UP AND VERIFY:',
        text: 'Register for an account on the chosen exchange by providing basic information such as your name, email address, and password. Complete any required verification steps, which may include providing identification documents and proof of address. This verification process helps ensure compliance with regulations and enhances account security.'
    },
    {
        title: 'DEPOSIT FUNDS:',
        text: 'Once your account is set up, deposit funds into it using one of the supported payment methods. This can include bank transfers, credit/debit cards, or other payment options offered by the exchange. Follow the instructions provided by the exchange to complete the deposit process, and be aware of any associated fees or processing times.'
    },
    {
        title: 'PLACE YOUR ORDER:',
        text: 'Navigate to the exchanges  trading section and locate the trading pair for your cryptocurrency and dollars (e.g., MEME/USD). Choose whether to place a market order, which executes immediately at the current market price, or a limit order, where you specify the price at which you want to buy. Enter the amount of cryptocurrency you wish to purchase and review the order details before confirming.'
    },
    {
        title: 'WAIT AND CHECK YOUR WALLET:',
        text: 'After placing your buy order, wait for it to be executed by the exchange. This process may happen quickly for market orders or take longer for limit orders, depending on market conditions. Once your order is filled, verify that the purchased cryptocurrency appears in your exchange wallet.'
    }
]
const HowToBuySection = () => {
    const [steps, setSteps] = useState(0)

    const goToNextSteps = () => {
        if (steps < Step.length - 1) {
            setSteps(steps + 1)
        }
    }

    const goToStep = (startIndex) => {
        setSteps(startIndex)
    }


    const restartSteps = () => {
        setSteps(0)
    }

    const isLastStep = steps === Step.length - 1;

    return (
        <>
            <section id="how-to-buy"  className="bg-[#30423a] px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mt-6 md:mt-10 max-w-7xl mx-auto">
                    
                    <div className='bg-[#0f2c23] p-6 sm:p-8 md:p-12 w-full rounded-[30px] sm:rounded-[40px] md:rounded-[60px] text-[#e2fea5]'>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className='font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
                        >
                            HOW TO<br /> BUY?
                        </motion.h2>
                    </div>

                    
                    <div className="bg-[#0f2c23] rounded-[30px] sm:rounded-[40px] md:rounded-[60px] w-full flex items-center justify-center p-6">
                        <img
                            src={image7}
                            alt="image-7"
                            className='h-[200px] sm:h-[250px] md:h-[300px] object-contain'
                        />
                    </div>

                    
                    <div className="bg-[#0f2c23] rounded-[30px] sm:rounded-[40px] text-left w-full text-[#f8ffe8] mt-0 md:-mt-6 lg:-mt-10">
                        <p className='text-base sm:text-lg md:text-xl font-semibold p-6 sm:p-8'>
                            Have you gone through all of the steps before? Great! Then just hit the button down below and fill up your bag with memecoin right now.
                        </p>
                        <div className="flex items-center justify-center pb-6">
                            <img
                                src={image8}
                                alt="image8"
                                className='h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40'
                            />
                        </div>
                    </div>

                    
                    <div className="bg-[#0f2c23] rounded-[30px] sm:rounded-[40px] p-6 w-full mt-0 md:-mt-6 lg:-mt-10">
                        <div className="mb-6">
                            <h2 className="text-[#f8ffe8] text-lg sm:text-xl font-extrabold">STEP {steps + 1}:</h2>
                            <h3 className="text-[#e2fea5] text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-4">{Step[steps].title}</h3>
                            <p className="text-[#f8ffe8] text-sm sm:text-base font-semibold">
                                {Step[steps].text}
                            </p>
                        </div>

                        <div className="flex items-center mt-6">
                            {!isLastStep ? (
                                <button
                                    onClick={goToNextSteps}
                                    className="flex items-center text-[#CED6C2] font-semibold group space-x-2"
                                >
                                    <p className="text-2xl md:text-3xl font-light transition-transform group-hover:translate-x-1 duration-200 ease-in">
                                        &rarr;
                                    </p>
                                    <span className="text-[#f8ffe8]">next step</span>
                                </button>
                            ) : (
                                <button
                                    onClick={restartSteps}
                                    className="flex items-center text-[#CED6C2] font-semibold group space-x-2"
                                >
                                    <p className="text-2xl md:text-3xl font-light transition-transform group-hover:translate-x-1 duration-200 ease-in">
                                        &#8634;
                                    </p>
                                    <span className="text-[#f8ffe8]">back to step</span>
                                </button>
                            )}
                        </div>

                        <div className="flex gap-2 mt-4 flex-wrap">
                            {Step.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToStep(index)}
                                    className={`h-2 w-10 sm:w-16 rounded-full transition-colors ${index === steps ? 'bg-[#e2fea5]' : 'bg-[#3c574b]'
                                        }`}
                                    aria-label={`Go to Step ${steps + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>

                
                <div className="flex justify-center mt-8 md:mt-10">
                    <div className='bg-[#e2fea5] shadow-[3px_3px_0_#000] text-center px-4 sm:px-5 font-sans py-3 sm:py-4 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] rounded-full border-2 hover:scale-105 transition-transform border-black'>
                        <button className='text-[#000000] font-bold text-3xl sm:text-4xl md:text-5xl'>Buy Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowToBuySection