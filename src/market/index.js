import React, { useEffect, useState } from "react";
import io from 'socket.io-client'
import axios from 'axios';
import './index.css';

const LiveChart = () => {
  const [coin, setCoin] = useState();

  useEffect(() => {

    const socket = io('http://localhost:3001');
    socket.emit('getCoinData', ['KRW-BTC', 'KRW-ETH', 'KRW-XRP']);

    socket.on('coinData', (data) => {
      console.log('Received coin data : ', data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  
  return (
    <div className="livechart-wrapper">
       <ul>
        {/* {coin.map((coin) => (
          <li key={coin.market}>
            {coin.market} - {coin.trade_price}
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export default LiveChart;