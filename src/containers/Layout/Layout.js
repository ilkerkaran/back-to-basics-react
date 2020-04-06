import React, { useState } from 'react';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


const layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerBackdropClick = () => {
    setShowSideDrawer(false);
  };

  const handleDrawerToggleClick = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
    <Toolbar onDrawerToggleClick={handleDrawerToggleClick} />
    <SideDrawer
      open={showSideDrawer}
      onBackdropClick={handleSideDrawerBackdropClick}
    />
    <main className="Content">{children}</main>
    </>
  );
};

export default layout;
