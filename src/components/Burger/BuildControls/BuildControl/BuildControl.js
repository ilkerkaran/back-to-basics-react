import React from 'react';
import PropTypes from 'prop-types';
import cssClass from './BuildControl.css';

const buildControl = props => {
  const { label } = props;

  const handleMoreClick = () => {
    props.onMoreClick(props.type);
  };

  const handleLessClick = () => {
    props.onLessClick(props.type);
  };
  return (
    <div>
      <div className={cssClass.BuildControl}>
        <div className={cssClass.Label}>{label}</div>
        <button
          className={cssClass.Less}
          type="button"
          onClick={handleLessClick}
        >
          Less
        </button>
        <button
          className={cssClass.More}
          type="button"
          onClick={handleMoreClick}
        >
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
  onLessClick: PropTypes.func.isRequired
};
