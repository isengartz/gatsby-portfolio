import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Img from 'gatsby-image';
import styles from './skillItem.module.scss';

// eslint-disable-next-line react/display-name
const SkillItem = React.forwardRef((props, ref) => {
  const { image, onClick, dataId, title, ribbon } = props;

  return (
    <Col
      data-id={dataId}
      onClick={onClick}
      className={styles.Wrapper}
      ref={ref}
    >
      <div className={styles.ContentContainer}>
        <div className={styles.ContentOverlay} />
        {ribbon ? (
          <div className={styles.ribbon3}>
            <span>ribbon</span>
          </div>
        ) : null}

        <div className={styles.ImageContainer}>
          <Img className={styles.Image} fluid={image} />
        </div>
        <div className={styles.TextContainer}>
          <div className={styles.TextContainer__Text}>
            <h2 className={styles.Text__Title}>{title}</h2>
          </div>
        </div>
      </div>
    </Col>
  );
});

SkillItem.defaultProps = {
  ribbon: '',
};

SkillItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  image: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  dataId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  ribbon: PropTypes.string,
};
export default SkillItem;
