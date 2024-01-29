import React, { useEffect, useState } from "react";
import './chart.css';
import { useExchangeState} from '../../market/context/ExchangeContext';
import CandleChart from "./CandleChart";

const ChartComp = ({code}) => {
  return (
    <div>
        <CandleChart code={code} />
    </div>
  );
};

export default ChartComp;