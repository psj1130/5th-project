import React from 'react';
import './App.css';

import { Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Boarder from './include/board';
import Header from './include/header';
import Footer from './include/footer';

// 동명
import Htmlboard from "./noticeboard/htmlboard";
import Htmlboard_p from "./noticeboard/htmlboard_p";
import Htmlreview from './noticeboard/htmlreview';
import Htmlreview_p from './noticeboard/htmlreview_p';

import SearchComponent from './include/searchresult';

import LoginPage from './player/login';
import SignUpPage from './player/signup';

import Customer from "./customer_ser/customer_service";
import Stock_detail from "./stock_details/stock_details";

// 메인페이지
import Lucky from './lucky/lucky';
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
          <Header/>
          <div id='App_Main'>
              <Routes>
                {/* 이동명 */}
                {/* <Route path='/' element={<Main/>}/> */}
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/include/boarder' element={<Boarder/>}/>
                <Route path='/search/:keyword' element={<SearchComponent/>}/>
                <Route path='/htmlboard' element={<Htmlboard/>}/>
                <Route path='/htmlboard_p' element={<Htmlboard_p/>}/>
                <Route path='/htmlreview' element={<Htmlreview/>}/>
                <Route path='/htmlreview_p' element={<Htmlreview_p/>}/>
                  
                 {/* 이유준 */}
                <Route path='/' element={<AnimatePresence><Intropage /></AnimatePresence>} />
                <Route path='/main' element={<AnimatePresence><Mainpage/></AnimatePresence>} />

                {/* 박성종 */}
                <Route path='/simulator/:id' element={<LiveChart/>}/>
                <Route path='/mypage/:id' element={<MyPage/>}/>
                <Route path='/test' element={<GoogleLogin/>}/>
                <Route path='/success' element={<GoogleRegister/>}/>
                  
                 {/* 민원기 */}
                <Route path="/customer/*"  element={<Customer />} />
                <Route path="/Stock_detail/:code" element={<Stock_detail/>}/>
                {/* 정성원 */}
                <Route path="/lucky"  element={<Lucky />}/>
               
              </Routes>
          </div>
          <Footer/>
        </div>
  );
}

export default App;