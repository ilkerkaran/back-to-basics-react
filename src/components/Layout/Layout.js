import React from 'react';
import './Layout.css';

const layout = props => {
  const { children } = props;
  return (
    <>
      <main className="Content">{children}</main>
    </>
  );
};

export default layout;
