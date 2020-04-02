
import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';

// eslint-disable-next-line react/display-name
const withErrorHandler = (WrappedComponent, axios) => class extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

  componentDidMount() {
    this.reqInterceptor = axios.interceptors.request.use((req) => {
      this.setState({ error: null });
      return req;
    });
    this.resInterceptor = axios.interceptors.response.use((res) => res,
      (err) => { this.setState({ error: err.toString() }); });
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.reqInterceptor);
    axios.interceptors.response.eject(this.resInterceptor);
  }

  render() {
    const { error } = this.state;
    return (<>
      <Modal
        onClose={() => { this.setState({ error: null }); }}
        show={!!error} >
        <p>{error}</p>
      </Modal>
      <WrappedComponent />
    </>);
  }
};

export default withErrorHandler;
