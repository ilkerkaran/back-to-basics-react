
import React, { useState, useEffect } from 'react';
import Modal from '../components/UI/Modal/Modal';

// eslint-disable-next-line react/display-name
const withErrorHandler = (WrappedComponent, axios) => (props) => {
  const [error, setError] = useState('');

  const reqInterceptor = axios.interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  const resInterceptor = axios.interceptors.response.use((res) => res,
    (err) => {
      setError(err.toString());
    });

  useEffect(() => {
    console.log('withErrorHandler exectued');

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
