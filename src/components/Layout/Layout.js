import React, { Component } from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { showSideDrawer: false };
  }

  handleSideDrawerBackdropClick = () => {
    this.setState({ showSideDrawer: false });
  };

  handleDrawerToggleClick = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar onDrawerToggleClick={this.handleDrawerToggleClick} />
        <SideDrawer
          open={this.state.showSideDrawer}
          onBackdropClick={this.handleSideDrawerBackdropClick}
        />
        <main className="Content">{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
