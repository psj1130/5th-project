import React, { useState } from 'react';
import HoldCoinList from './HoldCoinList';
import '../css/CoinListContainer.css';

const CoinListContainer = () => {
  return (
    <div className="Coin__List__Container__mypage">
      <div className="Listing__Method">
        <div className="Method">
          <p className='on'>
            보유코인
          </p>
        </div>
      </div>
      <HoldCoinList />
    </div>
  );
};

export default CoinListContainer;