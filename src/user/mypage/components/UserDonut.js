import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import { API_URL } from "../../../config/config";
import axios from "axios";



const UserDonut = ({ userData }) => {
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);
  // const root = document.querySelector('#root');
  // let screenwidth = 500;

  useEffect(() => {
    if (userData) {
      axios.get(`${API_URL}/user/wallet/get/${userData.wallet_code}`)
        .then((res) => {
          const data = res.data;
          const coinData = data.map((coin) => ({
            name: coin.coin_name,
            price: coin.totalprice
          }));

          const userBalanceData = [{
            name: '잔고',
            price: userData.balance
          }];

          setSeries([...userBalanceData, ...coinData].map((item) => item.price));
          setLabels([...userBalanceData, ...coinData].map((item) => item.name));
        })
        .catch((err) => {
          console.log(err);
        });

    }
  }, [userData]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  

  return (
    <div id="userchart">
      <ReactApexChart
        options={{
          labels: labels,
          legend: {
            position: 'bottom'
          },
          responsive: [{
            breakpoint: 480,
          }],
          title: {
            text: '투자 내역',
            align: 'center'
          }
        }}
        series={series}
        type='donut'
        width={550}
      />
    </div>
  );
};

export default UserDonut;