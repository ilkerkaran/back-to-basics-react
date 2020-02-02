import React from 'react';
import PropTypes from 'prop-types';
import './BuildControl.css';

const buildControl = props => {
  const { label, disabled } = props;

  const handleMoreClick = () => {
    props.onMoreClick(props.type);
  };

  const handleLessClick = () => {
    props.onLessClick(props.type);
  };
  return (
    <div>
      <div className="BuildControl">
        <div className="Label">{label}</div>
        <button
          disabled={disabled}
          className="Less"
          type="button"
          onClick={handleLessClick}
        >
          Less
        </button>
        <button className="More" type="button" onClick={handleMoreClick}>
          More
        </button>
      </div>
    </div>
  );
};

export default buildControl;

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onMoreClick: PropTypes.func.isRequired,
  onLessClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
