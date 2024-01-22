import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LiveChart from './market';

import Customer from "./customer_ser/customer_service";
import Stock_detail from "./stock_details/stock_details";

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/customer/*"  element={<Customer />} />
          <Route path="/Stock_detail/:code" element={<Stock_detail/>}/>
          {/* <Route path="/customer_update" element={<Customer_update_news />} />
          <Route path="/customer_notice" element={<Customer_notice />} />
          <Route path="/customer_notice/:id" element={<Customer_noticedetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;