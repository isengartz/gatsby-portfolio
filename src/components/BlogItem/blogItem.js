import React from 'react';
import styles from "./blogItem.module.scss"
import Img from "gatsby-image";
import PropTypes from 'prop-types';


const blogItem = (props) => {

    const {image, title, description} = props;
    return (
        <div className={styles.BlogItemWrapper}>
            <div className={styles.BlogItemImageWrapper}>
                <div className={styles.BlogItemImage}>
                    {
                        image ? <Img fluid={image}/> : null
                    }

                </div>
            </div>
            <div className={styles.BlogItemContentWrapper}>
                <div className={styles.BlogItemContentTitle}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.BlogItemContent}>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};
blogItem.propTypes = {
    image: PropTypes.object,
    description: PropTypes.string,
    title: PropTypes.string
}
export default blogItem;
