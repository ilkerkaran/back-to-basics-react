import React from 'react';
import css from './Layout.css';

const layout = props => {
  const { children } = props;
  return (
    // <React.Fragment>
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={css.Content}>{children}</main>
    </>
  );
};

export default layout;