import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import './intro.css';

function Intropage() {
  
  return(
    <div>
    <motion.p
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    >
      쩐의 전쟁
    </motion.p>
    <motion.button
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 100 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    >
      <Link to='/main'>페이지 이동</Link>
    </motion.button>
  </div>
  );
}

export default Intropage;
