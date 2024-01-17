import React from "react";
import './index.css';
import UserSummary from "./components/UserSummary";

export default function MyPage() {
  return(
    <div className="MyPage__Wrapper">
      <UserSummary/>
    </div>
  )
}