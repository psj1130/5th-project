import React, { useState } from 'react';
import CoinList from './CoinList';
import HoldCoinList from './HoldCoinList';
import '../css/CoinListContainer.css';

const CoinListContainer = () => {
  const [type, setType] = useState('KRW');
  return (
    <div className="Coin__List__Container">
      <div className='Listing__Close'>
        <button type='click' className='close-coin-container' onClick={() => {
          document.querySelector('.Coin__List__Container').style.display = 'none';
        }}><i className='xi-close'></i></button>
      </div>
      <div className="Listing__Method">
        <div className="Method">
          <p className={type === 'KRW' ? 'on' : ''} onClick={() => setType('KRW')}>
            원화거래
          </p>
        </div>
        <div className="Method">
          <p
            className={type === 'HOLD_COIN' ? 'on' : ''}
            onClick={() => setType('HOLD_COIN')}
          >
            보유코인
          </p>
        </div>
      </div>
      {type === 'KRW' ? <CoinList /> : null}
      {type === 'HOLD_COIN' ? <HoldCoinList /> : null}
    </div>
  );
};

export default CoinListContainer;
