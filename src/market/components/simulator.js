import React, {useEffect} from "react";
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

const getUserData = async (id) => {
  const res = await axios.get(`${API_URL}/user/data`);
  return res.data;
}

const Simulator = () => {
  const { id } = useParams();
  const dispatch = useExchangeDispatch();
  const userDispatch = useUserDispatch();

  useEffect(() => {
    userDispatch({
      type:'USER_REGISTER',
      data: {
        cash: 100,
        coin: {}
      }
    })
  })

  useEffect(() => {
    getMarket(dispatch);
  }, [dispatch]);

  return(
    <div>
      <CoinDetail/>
      <CoinListContainer/>
    </div>
  )
}  

export default Simulator;