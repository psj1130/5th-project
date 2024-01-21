import React from "react";
import './index.css';
import {
  ExchangeProvider,
  SummaryProvider,
  UserProvider,
  OrderbookProvider,
} from '../../market/context/ExchangeContext';
import Exchange from "./exchange";

export default function MyPage() {
  return(
    <div className="MyPage__Wrapper">
      <div className="MyPage__Container">
        <div>
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
    </div>
  )
}