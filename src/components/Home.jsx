import { motion as Motion } from 'framer-motion';
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
      <Motion.div 
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Motion.div variants={itemVariants} className="animation-container">
          <TypeAnimation
            sequence={[
              'Hi, my name is Adithya.',
              2000,
              'I\'m a developer, problem-solver, and security enthusiast.',
              2000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="name"
            preRenderFirstString={true}
          />
        </Motion.div>
        <Motion.div variants={itemVariants}>
          <a href="#projects" className="cta-button">Check out my work!</a>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Home;
