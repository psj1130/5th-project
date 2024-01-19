import React from "react";
import './index.css';
import UserSummary from "./components/UserSummary";
import CoinListContainer from "./components/CoinListContainer";
import {
  ExchangeProvider,
  SummaryProvider,
  UserProvider,
  OrderbookProvider,
} from '../../market/context/ExchangeContext';

export default function MyPage() {
  return(
    <div className="MyPage__Wrapper">
      <div className="MyPage__Container">
        <UserSummary/>
        <div>
          <ExchangeProvider>
            <SummaryProvider>
              <UserProvider>
                <OrderbookProvider>
                  <CoinListContainer/>
                </OrderbookProvider>
              </UserProvider>
            </SummaryProvider>
          </ExchangeProvider>
        </div>
      </div>
    </div>
  )
}