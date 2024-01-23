import React, { useState, useEffect } from 'react';
import HoldCoinList from './HoldCoinList';

import '../css/CoinListContainer.css';

const CoinListContainer = () => {
  const [type, setType] = useState('None');

  useEffect(() => {
    setTimeout(() => {
      clickHandle()
    }, 1000)
  })

  const clickHandle = () => {
    setType('HOLD_COIN');
  }
  
  return (
    <div className="Coin__List__Container__mypage">
      <div className="Listing__Method">
        <div className="Method">
          <p className='on'>
            내가 보유중인 코인
          </p>
        </div>
      </div>
      {type === 'HOLD_COIN' ? <HoldCoinList /> : null}
    </div>
  );
};

export default CoinListContainer;