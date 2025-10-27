import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="home" className="home">
      <motion.div 
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="animation-container">
          <TypeAnimation
            sequence={[
              'Hi, my name is Adithya.',
              2000,
              'I love cybersecurity.',
              2000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="name"
            preRenderFirstString={true}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="description-wrapper">
          <p className="subtitle">
            I'm a Master's student in Computer Science with a specialization in Cybersecurity at Boston University, passionate about creating secure and scalable digital experiences.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <a href="#projects" className="cta-button">Check out my work!</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
