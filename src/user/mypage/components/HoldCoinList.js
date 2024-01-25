import React, { useEffect } from 'react';
import '../css/HoldCoinList.css';
import { useExchangeState, useUserState } from '../../../market/context/ExchangeContext';
import HoldCoin from './HoldCoin';

const HoldCoinList = () => {
  const marketState = useExchangeState();
  // console.log(marketState);
  const { data: markets } = marketState.market;
  // console.log(markets);

  const userState = useUserState();

  return (
      <div className="Coins">
        {!userState.coin ? (
          <p className="not-hold">보유중인 코인이 없습니다.</p>
        ) : (
          userState.coin.map(list => (
            <HoldCoin
              data={list}
              key={list.fullcode}
              name={
                markets.filter(market => market.market === list.fullcode)[0].korean_name
              }
              realtimePrice={
                marketState.realtimeData.data.filter(
                  data => data.code === list.fullcode,
                )[0].trade_price
              }
            />
          ))
        )}
      </div>
  );
};

export default React.memo(HoldCoinList);