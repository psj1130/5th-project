import React from "react";
import './index.css';
import UserSummary from "./components/UserSummary";
import CoinListContainer from "./components/CoinListContainer";

export default function MyPage() {
  return(
    <div className="MyPage__Wrapper">
      <UserSummary/>
      <CoinListContainer/>
    </div>
  )
}