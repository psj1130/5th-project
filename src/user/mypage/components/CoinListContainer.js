import React, { useState, useEffect } from 'react';
import HoldCoinList from './HoldCoinList';

import '../css/CoinListContainer.css';

const CoinListContainer = () => {
  const [type, setType] = useState('None');

  useEffect(() => {
    setTimeout(() => {
      clickHandle()
    }, 200)
  })

  const clickHandle = () => {
    setType('HOLD_COIN');
  }

  return (
    <div className="Coin__List__Container__mypage">
      <div className="Listing__Method">
        <div className="Method">
          <p className='on mypage_coin'>
            내가 보유중인 코인
          </p>
        </div>
      </div>
      <div className="Hold__Coin__List">
        <div className="List__Head">
          <div className="Coin__Name">
            <span>코인명</span>
          </div>
          <div className="Coin__Price">
            <span>평가금/보유량</span>
          </div>
          <div className="Coin__Change__Price">
            <span>수익률</span>
          </div>
          <div className="Coin__Average">
            <span>매수가/평균가</span>
          </div>
        </div>
        {type === 'HOLD_COIN' ? <HoldCoinList /> : null}
      </div>
    </div>
  );
};

export default CoinListContainer;