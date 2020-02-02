import React from 'react';
import PropTypes from 'prop-types';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => {
  const { onMoreClick, onLessClick } = props;
  return (
    <div className="BuildControls">
      {controls.map(c => {
        return (
          <BuildControl
            key={c.label}
            label={c.label}
            type={c.type}
            onLessClick={onLessClick}
            onMoreClick={onMoreClick}
          />
        );
      })}
    </div>
  );
};

export default buildControls;

buildControls.propTypes = {
  onMoreClick: PropTypes.func.isRequired,
  onLessClick: PropTypes.func.isRequired
};
