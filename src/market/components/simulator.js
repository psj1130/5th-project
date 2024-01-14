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
      const res = await axios.get(`${API_URL}/user/data/${id}`)
      console.log(res.data);
      setUser(res.data);
      userDispatch({
        type:'USER_REGISTER',
        data: {
          cash: res.data.balance,
          coin: res.data.coin[0]
        }
      })
    }
    getUser();
  }, [])

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