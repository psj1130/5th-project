import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import { API_URL } from "../../../config/config";
import axios from "axios";

const UserDonut = ({userData}) => {
  console.log(userData);
  const [user, setUser] = useState();
  const [data, setData] = useState([]);
  const [donutData, setDonutData] = useState({
    series: [],
    options: {
      chart: {
        type: 'donut',
      },
      legend: {
        position: 'bottom'
      },
      responsive: [{
        breakpoint: 480,
      }],
      labels: [],
      title: {
        text: '투자 내역',
        align: 'center'
      }
    },
  })

  useEffect(() => {
    axios.get(`${API_URL}/user/wallet/get/${userData.wallet_code}`)
      .then((res) => {
        const data = res.data;
        const a = data.map((b) => {
          const c = {name : b.coin_name, price : b.totalprice}
          return c;
        })
        console.log(a);
        const d = [{name: '잔고', price: userData?.balance}];
        setData(d.concat(a));
        setDonutData({
          series: d.concat(a).map(a => a.price),
          options: {
            chart: {
              type: 'donut',
            },
            legend: {
              position: 'bottom'
            },
            responsive: [{
              breakpoint: 480,
            }],
            labels: d.concat(a).map(a => a.name),
            title: {
              text: '투자 내역',
              align: 'center'
            }
          },
        })
      })
      .catch((err) => {
        console.log(err);
      })

    setUser(userData);
  }, [userData]);

  console.log(user);

  return (
    <div id="userchart">
      {userData ? <ReactApexChart
        options={donutData?.options}
        series={donutData?.series}
        type="donut"
        width={500}
      /> : null}
    </div>
  )
}

export default UserDonut;
