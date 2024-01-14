import React from "react";
import {
  ExchangeProvider,
  SummaryProvider,
  UserProvider,
  OrderbookProvider,
} from './context/ExchangeContext';
import Exchange from "./pages/Exchange";
import './index.css';

const LiveChart = () => {
  return (
    <div id="LiveChart-Wrapper">
      <ExchangeProvider>
        <SummaryProvider>
          <UserProvider>
            <OrderbookProvider>
              <Exchange />
            </OrderbookProvider>
          </UserProvider>
        </SummaryProvider>
      </ExchangeProvider>
    </div>
  )
}

export default LiveChart;