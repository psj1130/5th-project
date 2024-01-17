import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import { AnimatePresence } from "framer-motion";

import Header from './include/header';
import Footer from './include/footer';

// 메인페이지
import Mainpage from './main/mainpage';
import Intropage from './main/intropage';
import MyPage from './user/mypage';

import LiveChart from './market';

// 테스트
import GoogleLogin from './test/googleLogin';
import GoogleRegister from './user/register/googleRegister';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='App-Main'>
          <Routes>
            {/* 이유준 */}
            <Route path='/' element={<AnimatePresence><Intropage /></AnimatePresence>} />
            <Route path='/main' element={<AnimatePresence><Mainpage/></AnimatePresence>} />
            
            {/* 박성종 */}
            <Route path='/simulator/:id' element={<LiveChart/>}/>
            <Route path='/mypage/:id' element={<MyPage/>}/>
            <Route path='/test' element={<GoogleLogin/>}/>
            <Route path='/success' element={<GoogleRegister/>}/>

          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
