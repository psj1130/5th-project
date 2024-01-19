import React, {useEffect, useState} from "react";
import {
  getMarket,
  useExchangeDispatch,
  useUserDispatch,
} from '../context/ExchangeContext';
import axios from "axios";
import {API_URL} from '../../config/config'
import CoinDetail from './CoinDetail';
import CoinListContainer from './CoinListContainer';
import { useParams } from "react-router-dom";

const Simulator = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const dispatch = useExchangeDispatch();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    const getUser = async () => {
      let coinData = null
      const res = await axios.get(`${API_URL}/user/data/${id}`)
      const coin = await axios.get(`${API_URL}/user/wallet/get/${res.data.wallet_code}`);
      console.log(res.data);
      if(coin) {
        coinData = coin.data.map(c => {
          const data = {
            code: c.coin_name,
            fullcode: c.fullcode,
            totalPrice: c.totalprice,
            volume: c.volume
          }
          return data;
        })
      }
      setUser(res.data);
      userDispatch({
        type:'USER_REGISTER',
        data: {
          id : id,
          cash: res.data.balance,
          // coin: {},
          coin: coinData,
          wallet_code: res.data.wallet_code
        }
      })
    }
    getUser();
  }, [userDispatch]);

  useEffect(() => {
    getMarket(dispatch);
  }, [dispatch]);

  return(
    <div id="simulator-container">
      <CoinDetail/>
      <CoinListContainer/>
    </div>
  )
}  

export default Simulator;