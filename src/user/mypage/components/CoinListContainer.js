import React, { useState, useEffect } from 'react';
import HoldCoinList from './HoldCoinList';

import '../css/CoinListContainer.css';

const CoinListContainer = () => {
  const [type, setType] = useState('None');
  return (
    <div className="Coin__List__Container__mypage">
      <div className="Listing__Method">
        <div className="Method">
          <p className='on' onClick={() => setType('HOLD_COIN')}>
            내가 보유중인 코인
          </p>
        </div>
      </div>
      {type === 'HOLD_COIN' ? <HoldCoinList /> : null}
    </div>
  );
};

export default CoinListContainer;