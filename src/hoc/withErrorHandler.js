
import React, { useState, useEffect } from 'react';
import Modal from '../components/UI/Modal/Modal';

// eslint-disable-next-line react/display-name
const withErrorHandler = (WrappedComponent, axios) => (props) => {
  let reqInterceptor;
  let resInterceptor;
  const [error, setError] = useState('');
  useEffect(() => {
    reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    resInterceptor = axios.interceptors.response.use((res) => res,
      (err) => { setError(err.toString()); });

    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return (<>
      <Modal
        onClose={() => { this.setState({ error: null }); }}
        show={!!error} >
        <p>{error}</p>
      </Modal>
      <WrappedComponent {...props}/>
  </>);
};

export default withErrorHandler;
