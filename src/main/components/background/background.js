import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import './background.css';
import '../../../font.css'

function Background() {
  
  return(
    <div id="background-container">
      <div className="background-intro-box">
        <div className="background-title">
          <p>쩐의 전쟁</p>
        </div>
        <div className="background-sub-title">
          <motion.div
          initial={{ opacity: 1, x: -1920 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="sub-title-top-box">
            <p>돈을 벌기 위한</p>
          </motion.div>
            <motion.div
            initial={{ opacity: 1, x: 1920 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{
              duration: 0.8,
              delay: 2.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
              className="sub-title-bottom-box">
              <p>투자 연습을 위한</p>
            </motion.div>
        </div>
        <div className="background-start-box">
          <motion.button
            initial={{ opacity: 1, y: 1500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 3.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          className='background-btn back-btn-style'>
            <Link to='#'>시작하기</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Background;
