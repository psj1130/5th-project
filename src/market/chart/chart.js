import React, { useEffect, useState } from "react";
import './chart.css';
import { useExchangeState} from '../../market/context/ExchangeContext';
import CandleChart from "./CandleChart";

const ChartComp = ({data}) => {
  return (
    <div>
      {/* {data ? (
        <p>Loading...</p>
      ) : ( */}
        <CandleChart data={data} />
      {/* )} */}
    </div>
  );
};

export default ChartComp;