import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BurgerIngredient type="meat" />;
  }
}

export default Burger;
