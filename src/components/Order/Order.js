// TODO: should show a single order with ingredients and customer detail like address and order date

import React from 'react';
import { orderDataTypes } from '../../propTypes/types';
import './Order.css';

const order = (props) => {
  console.log('order.props', props);
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
  <h4>{contactData.email} - {contactData.postal}</h4>
  <div className="Ingredients">
  {ingredientsTemplate}
  </div>
  <p className="Price">$ {totalPrice}</p>
  <p className="Date">{orderDate}</p>
  </div>);
};

export default order;

order.propTypes = {
  ...orderDataTypes
};
