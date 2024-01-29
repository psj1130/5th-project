import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './intro.css';
import '../font.css';

function Intropage() {
  return (
    <div id='intro-body'>
      <div id="intro-text-bg">
        <motion.h1
          className='intro-logo-style'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          쩐의 전쟁
        </motion.h1>
        <motion.button
        className='intro-btn intro-btn-style'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeOut", 
        duration: 2,
        delay: 1.5 }}
      >
        <Link to='/main'>참여하기</Link>
      </motion.button>
      </div>
    
    </div>
  );
}

export default Intropage;
