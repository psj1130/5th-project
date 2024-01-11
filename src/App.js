import React from 'react';
import './App.css';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './include/header';
import Footer from './include/footer';

//메인페이지
import Mainpage from './main/mainpage';
import Intropage from './main/intropage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='App-Main'>
          <Routes>
            <Route path='/' element={<AnimatePresence><Intropage /></AnimatePresence>} />
            <Route path='/main' element={<AnimatePresence><Mainpage/></AnimatePresence>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
