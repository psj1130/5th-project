import './App.css';
// import { BrowserRouter, Route, Routes, Router } from "react-router-dom"; 
import { Routes, Route, Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
// 컴포넌트 불러오기
import LiveChart from './market';

// 동명
import Htmlboard from "./noticeboard/htmlboard";
import Htmlboard_p from "./noticeboard/htmlboard_p";
import Htmlreview from './noticeboard/htmlreview';
import Htmlreview_p from './noticeboard/htmlreview_p';
import Boarder from './include/board';
import Header from './include/header';
import SearchComponent from './include/searchresult';

import LoginPage from './customer/login';
import SignUpPage from './customer/signup';



function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <div id='App_Main'>
              <Routes>
                {/* <Route path='/' element={<Main/>}/> */}
                <Route path='/members/login' element={<LoginPage/>}/>
                <Route path='/members/signup' element={<SignUpPage/>}/>
                <Route path='/include/boarder' element={<Boarder/>}/>
                <Route path='/search/:keyword' element={<SearchComponent/>}/>
                <Route path='/htmlboard' element={<Htmlboard/>}/>
                <Route path='/htmlboard_p' element={<Htmlboard_p/>}/>
                <Route path='/htmlreview' element={<Htmlreview/>}/>
                <Route path='/htmlreview_p' element={<Htmlreview_p/>}/>
              </Routes>
          </div>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
  );
}

export default App;
