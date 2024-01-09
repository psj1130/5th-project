import React, { useEffect, useState } from "react";
import axios from 'axios';
import './index.css';

const LiveChart = () => {
  const [coin, setCoin] = useState();

  useEffect(() => {
    // axios
    //   .request({
    //     method: 'GET',
    //     url: 'https://api.upbit.com/v1/market/all?isDetails=false',
    //     headers: {accept: 'application/json'}
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setCoin(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

    const socket = new WebSocket('wss://api.upbit.com/websocket/v1')

    socket.addEventListener("open", () => {
      console.log('소켓 연결');
      socket.send('[{"ticket":"test example"},{"type":"ticker", "codes":["KRW-BTC"]}, {"format":"DEFAULT"}]');
    })

    socket.addEventListener("message", (data) => {
      console.log('데이터', data.data);
    })

    socket.addEventListener("close", () => {
      console.log('소켓 종료');
    })
  })
  return (
    <div className="livechart-wrapper">
      {/* <table>
        <tbody>
          {coin ? coin.map( c => {
            return(
              <tr>
                <td>{c.market}</td>
                <td>{c.korean_name}</td>
                <td>{c.english_name}</td>
              </tr>
            )
          }) : null}
        </tbody>
      </table> */}
    </div>
  )
}

export default LiveChart;