import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
  const { ingredients } = props;
  const tIngredients = Object.keys(ingredients)
    .map((igKey) => [...Array(ingredients[igKey])].map((tmpObj, index) => {
      const myI = index * -1;
      return <BurgerIngredient key={`${igKey}${myI}`} type={igKey} />;
    }))
    .reduce((arr, el) => arr.concat(el), []);

  return (
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {tIngredients.length > 0 ? (
          tIngredients
        ) : (
            <p>Please start adding ingredients!</p>
        )}
        <BurgerIngredient type="bread-bottom" />
      </div>
  );
};

export default burger;

burger.propTypes = {
  ingredients: PropTypes.instanceOf(BurgerIngredient).isRequired
};
