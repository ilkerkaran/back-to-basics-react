import React from 'react';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => {
  const { children } = props;
  return (
    <>
      <Toolbar />
      <main className="Content">{children}</main>
    </>
  );
};

export default layout;
