import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout as logoutAction } from '../../store/actions/actionCreators';

const logout = ({ onLogout }) => {
  useEffect(() => {
    onLogout();
  }, []);

  return (<Redirect to="/" />);
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logoutAction())
});


export default connect(null, mapDispatchToProps)(logout);

logout.propTypes = {
  onLogout: PropTypes.funct

};
