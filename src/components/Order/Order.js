import React from 'react';
import { orderDataTypes } from '../../propTypes/types';
import './Order.css';

const order = (props) => {
  const {
    order: {
      ingredients,
      totalPrice,
      orderDate,
      contactData
    }
  } = props;

  const ingredientsTemplate = Object.keys(ingredients).map((k) => {
    const i = ingredients[k];
    return (<span className="Ingredient" key={k} >{k} - {i}</span>);
  });

  return (<div className='Order'>
  <h4>{contactData.email} - {contactData.postCode}</h4>
  <div className="Ingredients">
  {ingredientsTemplate}
  </div>
  <p className="Price">$ {totalPrice}</p>
  <p >Payment Type: {contactData.paymentType}</p>
  <p className="Date">{orderDate}</p>
  </div>);
};

export default order;

order.propTypes = {
  ...orderDataTypes
};
