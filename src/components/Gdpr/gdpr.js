import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleGDPR } from '../../state/app';
import styles from './gdpr.module.scss';

const Gdpr = (props) => {
  const {
    agreeText,
    declineText,
    gdprText,
    bothBtnClasses,
    agreeBtnClasses,
    declineBtnClasses,
    dispatch,
    isGDPRClicked,
  } = props;

  const [shouldRender, setShouldRender] = useState(false);

  // Check if we should render the GDPR component
  useEffect(() => {
    // Show it after 1.5 sec
    if (!isGDPRClicked) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isGDPRClicked]);

  // Hide it and set the Redux state to clicked
  const onGdprBtnClick = () => {
    setShouldRender(false);
    dispatch(toggleGDPR(!isGDPRClicked));
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
                onClick={onGdprBtnClick}
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
                onClick={onGdprBtnClick}
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
  isGDPRClicked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
Gdpr.defaultProps = {
  bothBtnClasses: '',
  agreeBtnClasses: '',
  declineBtnClasses: '',
};
export default connect(
  (state) => ({
    isGDPRClicked: state.app.isGDPRClicked,
  }),
  null
)(Gdpr);
