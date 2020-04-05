import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
      <Redirect path="/" exact to="burgerBuilder" />
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/burgerBuilder" component={BurgerBuilder} />
      </Layout>
    </div>
  );
}

export default App;
