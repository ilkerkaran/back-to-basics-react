import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  meat: 2,
  cheese: 0.5
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 1
      },
      totalPrice: 4
    };
  }

  addIngredienthandler = type => {
    console.log('type', type);
    console.log(this.state);
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] += 1;

    this.setState(prevState => ({
      ingredients: updatedIngredients,
      totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
    }));
  };

  removeIngredienthandler = type => {
    const updatedIngredients = { ...this.state.ingredients };
    if (updatedIngredients[type] > 0) {
      updatedIngredients[type] -= 1;
      this.setState(prevState => ({
        ingredients: { ...updatedIngredients },
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      }));
    }
  };

  render() {
    const { ingredients } = this.state;
    return (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          onLessClick={this.removeIngredienthandler}
          onMoreClick={this.addIngredienthandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
