import React from 'react';
import styles from './CodeTag.module.scss'
const CodeTag = (props) => {
    return (
        <span className={[styles.Tag,props.className].join(' ')}>
            {
                props.children
            }
        </span>
    );
};

export default CodeTag;
