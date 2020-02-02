import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.8,
  meat: 2,
  cheese: 0.5
};

const INITIAL_INGREDIENTS = { salad: 0, bacon: 0, cheese: 0, meat: 0 };

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: { ...INITIAL_INGREDIENTS },
      totalPrice: 4,
      purchasable: INITIAL_INGREDIENTS.meat > 0,
      purchasing: false
    };
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchase = () => {
    this.setState({ purchasing: false });
  };

  addIngredienthandler = type => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] += 1;

    this.setState(prevState => ({
      ingredients: updatedIngredients,
      totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
      purchasable: updatedIngredients.meat > 0
    }));
  };

  removeIngredienthandler = type => {
    const updatedIngredients = { ...this.state.ingredients };
    if (updatedIngredients[type] > 0) {
      updatedIngredients[type] -= 1;
      this.setState(prevState => ({
        ingredients: { ...updatedIngredients },
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
        purchasable: updatedIngredients.meat > 0
      }));
    }
  };

  render() {
    const enabledInfo = { ...this.state.ingredients };
    const { totalPrice, purchasable, purchasing } = this.state;
    Object.keys(enabledInfo).forEach(key => {
      enabledInfo[key] = enabledInfo[key] > 0;
    });
    const { ingredients } = this.state;
    return (
      <>
        <Modal show={purchasing} cancelPurchasing={this.cancelPurchase}>
          <OrderSummary ingredients={ingredients} totalPrice={totalPrice} />
        </Modal>
        <Burger ingredients={ingredients} />

        <BuildControls
          onLessClick={this.removeIngredienthandler}
          onMoreClick={this.addIngredienthandler}
          enabled={enabledInfo}
          currentPrice={totalPrice}
          purchasable={purchasable}
          onPurcaseClick={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
