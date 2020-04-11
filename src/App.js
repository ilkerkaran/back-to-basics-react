import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout';

function App({ isAuthenticated }) {
  const securedRoutes = (<>
    <Route path="/checkout" component={Checkout} />
    <Route path="/orders" component={Orders} />
    <Route path="/logout" component={Logout} />
  </>);

  const anonymousRoutes = (<>
    <Route path="/checkout" component={Checkout} />
    <Route path="/signin" render={() => <Auth isSignUp={false}/>}/>
    <Route path="/signup" render={() => <Auth isSignUp={true}/>}/>
  </>);
  return (
    <div>
      <Layout>
        <Redirect path="/" exact to="burgerBuilder" />
        {isAuthenticated ? securedRoutes : anonymousRoutes}
        <Route path="/burgerBuilder" exact component={BurgerBuilder} />
      </Layout>
    </div>
  );
}
const mapStatetoProps = (state) => ({

  isAuthenticated: !!state.auth.token
});
export default connect(mapStatetoProps)(App);

App.propTypes = {
  isAuthenticated: PropTypes.bool

};
