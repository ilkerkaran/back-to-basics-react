import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from '../../components/UI/Form/Form';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import axios from '../../axios-orders';
import { signIn as signInAction, signUp as signUpAction, signInSuccess } from '../../store/actions/actionCreators';

const auth = (props) => {
  const {
    loading,
    onSignIn,
    onSignUp,
    isSignUp,
    token,
    redirectTo
  } = props;

  const formInputConfig = [
    {
      inputType: 'email',
      inputName: 'email',
      label: 'Username',
      isRequired: true
    },
    {
      inputType: 'password',
      inputName: 'password',
      label: 'Password',
      isRequired: true
    }
  ];

  const onSubmitClick = (formData) => {
    if (isSignUp) {
      onSignUp(formData.email, formData.password);
    } else {
      onSignIn(formData.email, formData.password);
    }
  };
  const signinForm = loading ? <Spinner /> : (<div className="ContactData">
  <Form title="Please fill your credentials!"
  submitButtonText={isSignUp ? 'Sign Up!' : 'Sign In!'}
  inputConfigs={formInputConfig}
  onSubmit={onSubmitClick} />
  <br />
</div>);

  const redirect = (<Redirect to={redirectTo}/>);
  return (token ? redirect : signinForm);
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  token: state.auth.token,
  redirectTo: state.auth.redirectAfterSignin
});

const mapDispatchToProps = (dispatch) => ({
  success: () => dispatch(signInSuccess('hi', 'token', new Date(new Date().getTime() + 3600 * 1000))),
  onSignIn: (username, password) => dispatch(signInAction(username, password)),
  onSignUp: (username, password) => dispatch(signUpAction(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(auth, axios)));

auth.propTypes = {
  isSignUp: PropTypes.bool,
  loading: PropTypes.bool,
  onSignIn: PropTypes.func,
  onSignUp: PropTypes.func,
  token: PropTypes.string,
  redirectTo: PropTypes.string
};
