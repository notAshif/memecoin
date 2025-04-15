import { motion } from "framer-motion";
import { useState } from "react";
import imageRocket from '../assets/imageRocket.png'
import video from '../assets/video.mp4'
const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerCards = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const videoReveal = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <div id="about" className="bg-[#3c574b] py-12 md:py-16 lg:py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#D2EB9B] text-center mb-8 md:mb-12 lg:mb-20"
      >
        WHAT IS THIS ABOUT?
      </motion.h2>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerCards}
        className="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-6xl gap-4 lg:gap-0"
      >

        <motion.div 
          variants={cardAnimation}
          className="bg-[#E3E9D4] text-black rounded-[30px] lg:rounded-l-[30px] lg:rounded-r-none border-2 border-black w-full max-w-full md:max-w-80 lg:max-w-96 p-4 md:p-6 h-auto md:h-[400px] lg:h-[480px] text-left shadow-md mb-4 lg:mb-0"
        >
          <motion.p 
            variants={fadeUp}
            className="font-extrabold text-xl md:text-2xl mb-2 md:mb-4"
          >
            NOTHING IS <br /> IMPOSSIBLE <br /> WITH MEMECOIN
          </motion.p>
          <motion.div 
            variants={scaleIn}
            className="flex justify-center"
          >
            <motion.img
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, yoyo: Infinity, ease: "easeInOut" } 
              }}
              src={imageRocket}
              alt="rocket"
              className="w-56 md:w-64 lg:w-80 scale-110 md:scale-125"
            />
          </motion.div>
        </motion.div>

        
        <motion.div 
          variants={cardAnimation}
          className="bg-[#1A332B] rounded-[30px] lg:rounded-[30px] border-2 border-black p-4 md:p-6 text-[#D9FF9E] w-full max-w-full md:max-w-80 lg:max-w-96 shadow-md mb-4 lg:mb-0"
        >
          <motion.p 
            variants={fadeUp}
            className="text-sm md:text-base leading-relaxed font-medium"
          >
            In the vibrant and ever-evolving world of cryptocurrency, where innovation and creativity reign supreme, there emerged a phenomenon that captured the hearts and minds of digital enthusiasts everywhere: Memecoin.
            <br /><br />
            It all began with a spark of inspiration, a playful nod to the internet culture that thrived on humor and satire. A group of visionary developers and meme enthusiasts came together with a shared passion for both cryptocurrency and the art of internet memes.
            <br /><br className="hidden md:block" />
            Thus, Memecoin was born — a revolutionary platform that empowered creators to unleash their imagination and bring their wildest meme-inspired dreams to life.
          </motion.p>
        </motion.div>

        
        <motion.div 
          variants={cardAnimation}
          className="flex-1 bg-[#D6F5F2] rounded-[30px] lg:rounded-l-none lg:rounded-r-[30px] border-2 border-black text-center shadow-md relative overflow-hidden flex flex-col justify-between h-[300px] md:h-[400px] lg:h-[480px] w-full max-w-full md:max-w-80 lg:max-w-none"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 left-4 flex items-center gap-2 z-10 cursor-pointer transition-transform"
            onClick={() => setShowVideo(true)}
          >
            <box-icon name="play-circle" animation="spin"></box-icon>
            <span className="text-sm font-bold">Watch the video</span>
          </motion.button>
          <motion.video
            variants={videoReveal}
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/25 flex items-center justify-center z-50 p-4"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 md:top-6 md:right-6 z-50 p-2 rounded-full transition"
            >
              <box-icon name="x-circle" animation="spin" size="lg" color="#D0E999" background="#000"></box-icon>
            </motion.button>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              className="w-full max-w-5xl aspect-video bg-black border-4 border-black rounded-xl overflow-hidden shadow-2xl"
            >
              <video
                src={video}
                className="w-full h-full object-cover"
                autoPlay
                controls
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-8 md:mt-10 lg:mt-12"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#E9E8B5] border-2 border-black px-4 md:px-6 py-2 md:py-3 text-black rounded-full font-semibold shadow-[3px_3px_0_#000] transition font-mono"
        >
          Buy Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutSection;