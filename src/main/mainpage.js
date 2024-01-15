import React from 'react';
import Background from './components/background/background';
import { motion } from 'framer-motion';
import './mainpage.css';

function MainPage() {
  
  return(

    <motion.div
      id="main-body"
      initial={{ opacity: 1, x: 1920 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
    <div id="background-body">
      <Background/>
    </div>
  </motion.div>
  );
}

export default MainPage;
