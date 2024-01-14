import React from 'react';
import './App.css';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LiveChart from './market';
import ChartComp from './market/chart/chart';

import { AnimatePresence } from "framer-motion";

import Header from './include/header';
import Footer from './include/footer';

//메인페이지
import Mainpage from './main/mainpage';
import Intropage from './main/intropage';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='App-Main'>
          <Routes>
            <Route path='/' element={<AnimatePresence><Intropage /></AnimatePresence>} />
            <Route path='/main' element={<AnimatePresence><Mainpage/></AnimatePresence>} />
            <Route path='/simulator/:id' element={<LiveChart/>}/>
            <Route path='/test' element={<ChartComp/>}/>
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
