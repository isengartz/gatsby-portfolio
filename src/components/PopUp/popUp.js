import React, {useEffect, useState} from 'react';
import styles from "./popUp.module.scss"
import PropTypes from 'prop-types';

const PopUp = (props) => {
    const {isActive, onChange} = props;
    const [popUpIsActive, setPopUpIsActive] = useState(isActive);

    useEffect(() => {
        setPopUpIsActive(props.isActive);
    }, [props]);

    // If someone clicks the overlay close the popup
    const handleClick = e => {
        e.preventDefault();
        if (e.target === e.currentTarget) {
            // Instead of directly closing the popup from this component's state
            // Trigger the onChange from parent and return the opposite of current isActive state
            onChange(!popUpIsActive);
            // setPopUpIsActive(false);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={[styles.Popup, popUpIsActive ? styles.PopupActive : null].join(" ")}
        >
            <div className={styles.PopupContent}>
                {props.children}
            </div>
        </div>
    );
};

PopUp.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}
export default PopUp;
