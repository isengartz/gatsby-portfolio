import React, {useEffect, useState} from 'react';
import styles from "./popUp.module.scss"
import PropTypes from 'prop-types';

const PopUp = (props) => {
    const {isActive} = props;
    const [popUpIsActive,setPopUpIsActive]=useState(isActive);

    useEffect(() => {
        setPopUpIsActive(props.isActive);
    },[props])
    const handleClick = e => {
        e.preventDefault();
        if (e.target === e.currentTarget) {
            setPopUpIsActive(false);
        }
        console.debug(e.currentTarget,e.target);
    }
    return (
        <div onClick={handleClick} className={[styles.Popup,popUpIsActive ? styles.PopupActive : null].join(" ")}>
            <div className={styles.PopupContent}>
                {props.children}
            </div>
        </div>
    );
};

PopUp.propTypes = {
isActive: PropTypes.bool,
}
export default PopUp;
