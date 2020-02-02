import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

const burgerIngredient = props => {
  const { type } = props;
  let ingredient = null;
  switch (type) {
    case 'bread-bottom':
      ingredient = <div className="BreadBottom" />;
      break;
    case 'bread-top':
      ingredient = (
        <div className="BreadTop">
          <div className="Seed1" />
          <div className="Seed2" />
        </div>
      );
      break;
    case 'salad':
      ingredient = <div className="Salad" />;
      break;
    case 'meat':
      ingredient = <div className="Meat" />;
      break;
    case 'cheese':
      ingredient = <div className="Cheese" />;
      break;
    case 'bacon':
      ingredient = <div className="Bacon" />;
      break;
    default:
      break;
  }

  return ingredient;
};

export default burgerIngredient;

burgerIngredient.propTypes = {
  type: PropTypes.string
};
