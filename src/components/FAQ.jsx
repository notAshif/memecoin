import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#E3E2AF] rounded-2xl sm:rounded-3xl md:rounded-[40px] p-4 sm:p-6 md:p-8 lg:p-10 mt-4 md:mt-6 lg:mt-10 h-auto transition-all duration-500">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex items-center justify-between"
            >
                <span className="text-[#0f2c23] text-base sm:text-lg md:text-xl font-extrabold ml-2 sm:ml-4 md:ml-6">{question}</span>
                <button
                    className={`duration-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-45' : 'rotate-180'}`}
                    aria-label={isOpen ? "Close answer" : "Open answer"}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        fill="#0f2c23"
                    >
                        <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" />
                    </svg>
                </button>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-2 md:mt-4"
                    >
                        <div className="bg-[#E3E2AF] font-semibold p-3 md:p-4 text-sm sm:text-base md:text-lg text-[#0f2c23]">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {

    const FAQdata = [
        { question: "What is memecoin and how does it work?", Answer: "Memecoin is a fictional cryptocurrency that is showcased in this Framer template." },
        { question: "Where can I buy memecoin template?", Answer: "You can buy this template directly from my lemonsqueezy store hoffe.lemonsqueezy.com" },
        { question: "What makes Memecoin unique compared to other templates?", Answer: "Memecoin is a vibrant landing page template designed for meme based cryptocurrencies." },
        { question: "How can I edit Memecoin template?", Answer: "Contact me at hello@hoffe.design or explore the Framer community for help." },
        { question: "What are the potential risks?", Answer: "Memecoin is fictional, so there's no investment risk." },
        { question: "Other web3 templates?", Answer: "Yes! Visit hoffe.lemonsqueezy.com for more." },
    ];

    return (
        <>
            <section
            id="faq"
                className="relative bg-[#0f2c23] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%27120%27%20height%3D%27120%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%2300000030%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat bg-[length:120px_120px] opacity-100 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 py-12"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#CBE494] text-center font-extrabold font-sans mt-6 md:mt-10"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">GOT SOME FAQ?</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                    {FAQdata.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.Answer} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default FAQSection