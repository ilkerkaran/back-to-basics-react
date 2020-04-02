import React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';


class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {},
      ingredientPrices: {},
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      isOrderprocessing: false
    };
  }

  componentDidMount() {
    axios.get('/ingredient-prices.json').then((priceResponse) => {
      axios.get('/ingredients.json').then((response) => {
        const initialIngredients = { ...response.data };

        const total = Object.keys(initialIngredients)
          .reduce((init, type) => init + initialIngredients[type] * priceResponse.data[type], this.state.totalPrice);

        this.setState({
          ingredients: initialIngredients,
          ingredientPrices: { ...priceResponse.data },
          purchasable: initialIngredients.meat > 0,
          totalPrice: total
        });
      });
    });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  continuePurchaseHandler = () => {
    this.setState({ isOrderprocessing: true });
    const order = { ...this.state, name: 'John', address: { country: 'UK' } };
    axios.post('/orders.json', order)
      .then((response) => {
        console.log('orders-response: ', response);
        this.setState({ purchasing: false });
      })
      .catch((err) => console.log('orders-err: ', err))
      .finally(() => {
        this.setState({ isOrderprocessing: false });
      });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };

  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] += 1;

    this.setState((prevState) => ({
      ingredients: updatedIngredients,
      totalPrice: prevState.totalPrice + this.state.ingredientPrices[type],
      purchasable: updatedIngredients.meat > 0
    }));
  };

  removeIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients };
    if (updatedIngredients[type] > 0) {
      updatedIngredients[type] -= 1;
      this.setState((prevState) => ({
        ingredients: { ...updatedIngredients },
        totalPrice: prevState.totalPrice - this.state.ingredientPrices[type],
        purchasable: updatedIngredients.meat > 0
      }));
    }
  };

  render() {
    const enabledInfo = { ...this.state.ingredients };
    const {
      totalPrice, purchasable, purchasing, isOrderprocessing
    } = this.state;
    Object.keys(enabledInfo).forEach((key) => {
      enabledInfo[key] = enabledInfo[key] > 0;
    });
    const { ingredients } = this.state;
    return (
      <>
        <Modal show={purchasing} onClose={this.cancelPurchaseHandler}>
          {isOrderprocessing ? <Spinner />
            : <OrderSummary
              onCancel={this.cancelPurchaseHandler}
              onContinue={this.continuePurchaseHandler}
              ingredients={ingredients}
              totalPrice={totalPrice}
            />}
        </Modal>
        <Burger ingredients={ingredients} />

        <BuildControls
          onLessClick={this.removeIngredientHandler}
          onMoreClick={this.addIngredientHandler}
          enabled={enabledInfo}
          currentPrice={totalPrice}
          purchasable={purchasable}
          onPurcaseClick={this.purchaseHandler}
        />
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
