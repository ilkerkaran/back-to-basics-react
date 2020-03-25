
import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';

// eslint-disable-next-line react/display-name
const withErrorHandler = (WrappedComponent, axios) => class extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

  componentDidMount() {
    axios.interceptors.request.use((req) => {
      this.setState({ error: null });
      return req;
    });
    axios.interceptors.response.use((res) => res,
      (err) => { this.setState({ error: err.toString() }); });
  }

  render() {
    return (<>
    <Modal
      onClose={() => { this.setState({ error: null }); }}
      show={!!this.state.error} >
    <p>{this.state.error}</p>
    </Modal>
    <WrappedComponent />
    </>);
  }
};

export default withErrorHandler;
