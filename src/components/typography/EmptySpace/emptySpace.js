import React from 'react';
import PropTypes from 'prop-types';
const EmptySpace = ({ space }) => {
  return <div style={{ padding: `${space}px 0` }}></div>;
};

EmptySpace.defaultProps = {
  space: 20,
};
EmptySpace.propTypes = {
  space: PropTypes.number,
};
export default EmptySpace;
