import React from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Burger />
        <div>Burger Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
