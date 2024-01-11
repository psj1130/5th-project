import React from 'react';
import { motion } from 'framer-motion';
import './mainpage.css';

function MainPage() {
  
  return(
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
  >
    <h1>메인페이지 입니다.</h1>
  </motion.div>
  );
}

export default MainPage;
