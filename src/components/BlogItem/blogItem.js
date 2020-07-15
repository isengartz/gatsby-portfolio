import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styles from './blogItem.module.scss';

// eslint-disable-next-line react/display-name
const blogItem = React.forwardRef((props, ref) => {
  const { image, title, description, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div ref={ref} onClick={onClick} className={styles.BlogItemWrapper}>
      <div className={styles.BlogItemImageWrapper}>
        <div className={styles.BlogItemImage}>
          {image ? <Img fluid={image} /> : null}
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
});
blogItem.propTypes = {
  image: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    base64: PropTypes.string,
    tracedSVG: PropTypes.string,
    srcWebp: PropTypes.string,
    srcSetWebp: PropTypes.string,
    media: PropTypes.string,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default blogItem;
