import React from "react";
import ReactApexChart from 'react-apexcharts';

const donutData = {
  series: [50, 40, 30 ,10, 0],
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
    labels: ["침입", "배회", "쓰러짐", "화재", "안전모"],
    title: {
      text: '차트 예시',
      align: 'center'
    }
  },
}

const UserDonut = () => {
  return (
    <div id="userchart">
      <ReactApexChart
        options={donutData.options}
        series={donutData.series}
        type="donut"
        width={500}
      />
    </div>
  )
}

export default UserDonut;
