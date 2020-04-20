import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import * as actions from './store/actions/actionCreators';

const Logout = React.lazy(() => import('./containers/Auth/Logout'));
const Orders = React.lazy(() => import('./containers/Checkout/Orders/Orders'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));

const app = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.token);
  const dispatch = useDispatch();
  const checkIsAuthenticated = () => dispatch(actions.checkIsAuthenticated());
  const securedRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
    <Route path="/checkout" component={Checkout} />
    <Route path="/orders" component={Orders} />
    <Route path="/logout" component={Logout} />
    </Suspense>);

  const anonymousRoutes = (<Suspense fallback={<div>Loading...</div>}>
    <Route path="/signin" render={() => <Auth isSignUp={false}/>}/>
    <Route path="/signup" render={() => <Auth isSignUp={true}/>}/>
    </Suspense>);

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  return (
    <div>
      <Layout>
      {isAuthenticated ? securedRoutes : null}
      {anonymousRoutes}
      <Route path="/burgerBuilder" exact component={BurgerBuilder} />
      <Redirect to="/burgerBuilder" />
      </Layout>
    </div>
  );
};
export default app;

app.propTypes = {
  isAuthenticated: PropTypes.bool,
  checkIsAuthenticated: PropTypes.func
};
