import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
      <Redirect path="/" to="burgerBuilder" />
      <Switch>
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/burgerBuilder" component={BurgerBuilder} />
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
