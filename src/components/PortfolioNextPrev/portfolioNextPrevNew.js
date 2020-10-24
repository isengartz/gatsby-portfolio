/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import Col from 'react-bootstrap/Col';
import classes from './portfolioNextPrevNew.module.scss';
import svgArrow from '../../images/svg/126490.svg';

const portfolioNextPrevNew = (props) => {
  let typeClasses = {};
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'previous') {
    typeClasses = {
      wrapper: [classes.blogNavItem, classes.previousPost].join(' '),
      labelBtn: classes.labelPrevious,
      arrow: classes.previousArrow,
    };
  } else {
    typeClasses = {
      wrapper: [classes.blogNavItem, classes.nextPost].join(' '),
      labelBtn: classes.labelNext,
      arrow: classes.nextArrow,
    };
  }
  return (
    <Col sm={6} className="overflow-hidden">
      {/* eslint-disable-next-line react/prop-types */}
      <BackgroundImage className={classes.postBgImg} fluid={props.fluid}>
        <div className={typeClasses.wrapper}>
          <Link to={props.url} />
          <h3>
            <span className={typeClasses.labelBtn}>
              {props.type === 'previous' ? 'Previous Project' : 'Next Project'}
            </span>
            <span className={classes.text}>
              {props.title}
              <img
                alt="svgArrow"
                className={typeClasses.arrow}
                src={svgArrow}
              />
              <span className={classes.line} />
            </span>
          </h3>
        </div>
      </BackgroundImage>
    </Col>
  );
};

portfolioNextPrevNew.propTypes = {
  type: PropTypes.oneOf(['previous', 'next']).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default portfolioNextPrevNew;
