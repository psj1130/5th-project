import React from 'react';
import '../css/CoinDetail.css';
import { useSummaryState } from '../context/ExchangeContext';
import CoinSummary from './CoinSummary';
import OrderContainer from './OrderContainer';
import ChartComp from '../chart/chart';

const CoinDetail = () => {
  const state = useSummaryState();
  const { code, name } = state;
  return (
    <div className="Coin__Detail">
      <CoinSummary code={code} name={name} />
      <ChartComp/>
      <OrderContainer code={code} />
    </div>
  );
};

export default CoinDetail;
