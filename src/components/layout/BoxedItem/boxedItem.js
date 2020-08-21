import React from 'react';
import style from './boxedItem.module.scss';

// eslint-disable-next-line react/prop-types
const boxedItem = ({ children, classes }) => {
  return <div className={[style.Wrapper, classes].join(' ')}>{children}</div>;
};

export default boxedItem;
