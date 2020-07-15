import React from 'react';
import styles from './PrimaryButton.module.scss';

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ children }) => {
  return (
    <button type="button" className={styles.Button}>
      {children}
    </button>
  );
};

export default PrimaryButton;
