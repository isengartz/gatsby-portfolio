import React from 'react';
import styles from "./PrimaryButton.module.scss"
const PrimaryButton = (props) => {
    return (
        <button className={styles.Button}>
            {
                props.children
            }
        </button>
    );
};

export default PrimaryButton;
