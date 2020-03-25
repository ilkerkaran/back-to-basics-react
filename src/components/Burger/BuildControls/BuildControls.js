import React from 'react';
import PropTypes from 'prop-types';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
  const {
    onMoreClick,
    onLessClick,
    enabled,
    currentPrice,
    purchasable
  } = props;
  return (
    <div className="BuildControls">
      <p>
        Current Price: <b>${currentPrice}</b>
      </p>
      {controls.map((c) => (
          <BuildControl
            key={c.label}
            label={c.label}
            type={c.type}
            onLessClick={onLessClick}
            onMoreClick={onMoreClick}
            disabled={!enabled[c.type]}
          />
      ))}
      <button
        disabled={!purchasable}
        className="OrderButton"
        onClick={() => props.onPurcaseClick()}
      >
        ORDER NOW!
      </button>
    </div>
  );
};

export default buildControls;

buildControls.propTypes = {
  onMoreClick: PropTypes.func.isRequired,
  onLessClick: PropTypes.func.isRequired,
  enabled: PropTypes.object.isRequired,
  currentPrice: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  onPurcaseClick: PropTypes.func.isRequired
};
