import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
  const { children } = props;
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main className="Content">{children}</main>
    </>
  );
};

export default layout;
