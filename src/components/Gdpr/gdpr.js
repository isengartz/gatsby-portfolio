import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './gdpr.module.scss';

const Gdpr = (props) => {
  const {
    agreeText,
    declineText,
    gdprText,
    bothBtnClasses,
    agreeBtnClasses,
    declineBtnClasses,
  } = props;

  const [shouldRender, setShouldRender] = useState(false);

  // Check if we should render the GDPR component
  useEffect(() => {
    // localStorage.removeItem('gdpr');
    const haveRendered = localStorage.getItem('gdpr');

    // Show it after 1.5 sec
    if (!haveRendered) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // On any btn click set localStorage and hide the component
  const onBtnClick = () => {
    localStorage.setItem('gdpr', 'true');
    setShouldRender(false);
  };

  return (
    <>
      {shouldRender ? (
        <div className={styles.Wrapper}>
          <div className={styles.Content}>
            <div className={styles.Content__Text}>{gdprText}</div>
            <div className={styles.Content__Btns}>
              <button
                type="button"
                onClick={onBtnClick}
                className={[
                  styles.Btn__Decline,
                  bothBtnClasses,
                  agreeBtnClasses,
                ].join(' ')}
              >
                {agreeText}
              </button>
              <button
                type="button"
                onClick={onBtnClick}
                className={[
                  styles.Btn__Agree,
                  bothBtnClasses,
                  declineBtnClasses,
                ].join(' ')}
              >
                {declineText}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
Gdpr.propTypes = {
  agreeText: PropTypes.string.isRequired,
  declineText: PropTypes.string.isRequired,
  gdprText: PropTypes.string.isRequired,
  bothBtnClasses: PropTypes.string,
  agreeBtnClasses: PropTypes.string,
  declineBtnClasses: PropTypes.string,
};
Gdpr.defaultProps = {
  bothBtnClasses: '',
  agreeBtnClasses: '',
  declineBtnClasses: '',
};
export default Gdpr;
