import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

class Burger extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ingredients } = this.props;
    console.log(this.props);
    const tIngredients = Object.keys(ingredients)
      .map(igKey => {
        return [...Array(ingredients[igKey])].map((tmpObj, index) => {
          const myI = index * -1;
          return <BurgerIngredient key={`${igKey}${myI}`} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

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
  }
}

export default Burger;

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};
