import React, { useEffect, useState } from 'react';
import { getOrders } from '../../../services/ordersService';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Order from '../../../components/Order/Order';
import './Orders.css';

const orders = () => {
  const [loading, setLoading] = useState(true);
  const [fetchedOrders, setOrders] = useState([]);
  useEffect(() => {
    getOrders(axios).then((response) => {
      // console.log('getOrders.data', );
      setOrders(Object.keys(response.data).map((k) => response.data[k]));
      setLoading(false);
    }).catch((err) => {
      console.log('error while exceuting getOrders; ', err);
      setLoading(false);
    });
  }, []);
  return (<div className="Orders">{loading ? (<Spinner />) : (fetchedOrders.map((o, index) => (<Order key={index} order={o} />)))}</div>);
};

export default orders;
