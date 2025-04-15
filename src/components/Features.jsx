import { motion } from "framer-motion";
import image2 from '../assets/image2.avif'
import image3 from '../assets/image3.avif'
import image4 from '../assets/imag4.avif'
const FeaturesSection = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerFeatures = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const imageReveal = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const textReveal = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2
            }
        }
    };

    const featureCards = [
        {
            title: "Strategic\nPartnerships",
            image: image2,
            alt: "Strategic Partnerships",
            description: "Memecoin has forged strategic partnerships with leading players in the cryptocurrency industry, as well as with key influencers and platforms in the meme community."
        },
        {
            title: "Community\nSupport",
            image: image3,
            alt: "Community Support",
            description: "Through active engagement, open communication, and collaborative initiatives, Memecoin fosters a strong sense of community spirit among its members."
        },
        {
            title: "Growing\nEcosystem",
            image: image4,
            alt: "Growing Ecosystem",
            description: "With a growing network of users, developers, and investors, Memecoin offers unparalleled opportunities for collaboration, networking, and mutual support."
        }
    ];

    return (
        <>
            <section id="features" className="bg-[#112C23] px-20 py-6 lg:px-60">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-[#E4EAD5] mt-14 font-bold text-xl mb-7"
                    >
                        We got really
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-7xl font-extrabold text-[#D5EE9E] flex items-center justify-center gap-2"
                    >
                        <motion.span
                            initial={{ backgroundPosition: "200% 0" }}
                            whileInView={{
                                backgroundPosition: "0% 0",
                                transition: { duration: 1.2, delay: 0.5 }
                            }}
                            viewport={{ once: true }}
                            style={{
                                backgroundImage: "linear-gradient(90deg, #D5EE9E 0%, #9FD669 100%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundSize: "200% 100%"
                            }}
                        >
                            STRONG<br />FOUNDATION
                        </motion.span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerFeatures}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-14 mb-18"
                >
                    {featureCards.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            custom={index}
                            className="text-left"
                        >
                            <motion.div
                                variants={imageReveal}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-[#E5EBD6] rounded-t-full overflow-hidden shadow-md"
                            >
                                <motion.img
                                    initial={{ scale: 1.1 }}
                                    whileInView={{
                                        scale: 1,
                                        transition: { duration: 1.2, ease: "easeOut" }
                                    }}
                                    viewport={{ once: true }}
                                    src={feature.image}
                                    alt={feature.alt}
                                />
                            </motion.div>
                            <motion.div
                                variants={textReveal}
                                className="mt-3 text-left text-[#D6F5B0]"
                            >
                                <h3 className="text-4xl font-extrabold leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-sm font-bold text-[#E0E4D3] mt-2">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-10"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(210, 235, 155, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#D5EE9E] text-[#112C23] font-bold py-3 px-8 rounded-full border-2 border-black shadow-[3px_3px_0_#000]"
                    >
                        Explore More
                    </motion.button>
                </motion.div>
            </section>

        </>
    )
}

export default FeaturesSection;