import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <motion.h1 initial={{ y: -250 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        Welcome to my Portfolio
      </motion.h1>
      <motion.p 
        className="subtitle"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        MS in Computer Science with Specialization in Cybersecurity Student at Boston University.
      </motion.p>
    </section>
  );
};

export default Home;
