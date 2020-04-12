import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout';
import * as actions from './store/actions/actionCreators';

const app = ({ isAuthenticated, checkIsAuthenticated }) => {
  const securedRoutes = (<>
    <Route path="/checkout" component={Checkout} />
    <Route path="/orders" component={Orders} />
    <Route path="/logout" component={Logout} />
  </>);

  const anonymousRoutes = (<>
    <Route path="/signin" render={() => <Auth isSignUp={false}/>}/>
    <Route path="/signup" render={() => <Auth isSignUp={true}/>}/>
  </>);

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
const mapStatetoProps = (state) => ({

  isAuthenticated: !!state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
  checkIsAuthenticated: () => dispatch(actions.checkIsAuthenticated())
});
export default connect(mapStatetoProps, mapDispatchToProps)(app);

app.propTypes = {
  isAuthenticated: PropTypes.bool,
  checkIsAuthenticated: PropTypes.func
};
