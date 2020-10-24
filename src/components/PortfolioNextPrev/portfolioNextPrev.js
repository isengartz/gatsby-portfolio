/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTh,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classes from './portfolioNextPrev.module.scss';

const portfolioNextPrev = (props) => {
  library.add(faTh);
  return (
    <div>
      <Container>
        <Row>
          <Col sm={5} className={classes.Previous}>
            {props.previous ? (
              <Link className={classes.Link} to={props.prevUrl}>
                <FontAwesomeIcon size="1x" icon={faArrowLeft} />
                <span>Previous Project</span>
              </Link>
            ) : null}
          </Col>
          {/*<Col sm={2} className={classes.AllItems}>*/}
          {/*  <Link style={{ color: '#000' }} to={localePrefix + '/portfolio'}>*/}
          {/*    <FontAwesomeIcon size="lg" icon={faTh} />*/}
          {/*  </Link>*/}
          {/*</Col>*/}
          <Col sm={5} className={classes.Next}>
            {props.next ? (
              <Link className={classes.Link} to={props.nextUrl}>
                <span>Next Project</span>
                <FontAwesomeIcon size="1x" icon={faArrowRight} />
              </Link>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
portfolioNextPrev.propTypes = {
  next: PropTypes.bool.isRequired,
  previous: PropTypes.bool.isRequired,
};
export default portfolioNextPrev;
