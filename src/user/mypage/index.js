import React from "react";
import './index.css';
import {
  ExchangeProvider,
  SummaryProvider,
  UserProvider,
  OrderbookProvider,
} from '../../market/context/ExchangeContext';
import Exchange from "./exchange";
import UserSummary from "./components/UserSummary";

export default function MyPage() {
    return(
      <div className="MyPage__Wrapper">
        <UserSummary/>
        <div className="MyPage__Container">
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
      </div>
    )
}