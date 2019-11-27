import React from 'react';
import PropTypes from 'prop-types';
import cssClass from './BurgerIngredient.css';

const burgerIngredient = props => {
  const { type } = props;
  let ingredient = null;
  switch (type) {
    case 'bread-bottom':
      ingredient = <div className={cssClass.BreadBottom} />;
      break;
    case 'bread-top':
      ingredient = (
        <div className={cssClass.BreadTop}>
          <div className={cssClass.Seeds1} />
          <div className={cssClass.Seeds2} />
        </div>
      );
      break;
    case 'salad':
      ingredient = <div className={cssClass.Salad} />;
      break;
    case 'meat':
      ingredient = <div className={cssClass.Meat} />;
      break;
    case 'cheese':
      ingredient = <div className={cssClass.Cheese} />;
      break;
    case 'bacon':
      ingredient = <div className={cssClass.Bacon} />;
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
