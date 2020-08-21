import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './newButton.module.scss';

const newButton = ({
  buttonClasses,
  type,
  to,
  href,
  children,
  blank,
  inverse,
}) => {
  if (type === 'internalLink') {
    return (
      <Link
        className={[
          styles.ButtonWrapper,
          buttonClasses,
          inverse ? styles.ButtonInverse : '',
        ].join(' ')}
        to={to}
      >
        {children}
      </Link>
    );
  }
  if (type === 'externalLink') {
    return (
      <a
        target={blank ? '_blank' : '_self'}
        className={[
          styles.ButtonWrapper,
          buttonClasses,
          inverse ? styles.ButtonInverse : '',
        ].join(' ')}
        href={href}
      >
        {children}
      </a>
    );
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={[
        styles.ButtonWrapper,
        buttonClasses,
        inverse ? styles.ButtonInverse : '',
      ].join(' ')}
    >
      {children}
    </button>
  );
};

newButton.propTypes = {
  buttonClasses: PropTypes.string,
  type: PropTypes.oneOf(['button', 'externalLink', 'internalLink']),
  // eslint-disable-next-line react/require-default-props
  to: function (props, propName, componentName) {
    if (props.type === 'internalLink' && !props[propName]) {
      return new Error(
        `${propName} is required when type is internalLink in ${componentName}`
      );
    }
  },
  // eslint-disable-next-line react/require-default-props
  href: function (props, propName, componentName) {
    if (props.type === 'externalLink' && !props[propName]) {
      return new Error(
        `${propName} is required when type is externalLink in ${componentName}`
      );
    }
  },
  blank: PropTypes.bool,
  inverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
newButton.defaultProps = {
  buttonClasses: '',
  type: 'button',
  blank: false,
  inverse: false,
};
export default newButton;
