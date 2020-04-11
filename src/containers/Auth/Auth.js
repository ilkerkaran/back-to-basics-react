import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../../components/UI/Form/Form';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import axios from '../../axios-orders';
import { signIn as signInAction, signUp as signUpAction } from '../../store/actions/actionCreators';

const auth = ({
  loading, onSignIn, onSignUp, isSignUp
}) => {
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


  return (loading ? <Spinner /> : (
    <div className="ContactData">


    <Form title="Please fill your credentials!"
    submitButtonText={isSignUp ? 'Sign Up!' : 'Sign In!'}
    inputConfigs={formInputConfig}
    onSubmit={onSubmitClick} />
  <br />
    </div>)
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading
});

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (username, password) => dispatch(signInAction(username, password)),
  onSignUp: (username, password) => dispatch(signUpAction(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(auth, axios));

auth.propTypes = {
  isSignUp: PropTypes.bool,
  loading: PropTypes.bool,
  onSignIn: PropTypes.func,
  onSignUp: PropTypes.func
};
