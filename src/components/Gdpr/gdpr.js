import React from 'react';
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

  // Refactored it with Redux. Leaving it just in case.

  // const [shouldRender, setShouldRender] = useState(false);

  // Check if we should render the GDPR component
  // useEffect(() => {
  //   localStorage.removeItem('gdpr');
  //   const haveRendered = localStorage.getItem('gdpr');
  //
  //   // Show it after 1.5 sec
  //   if (!haveRendered) {
  //     const timer = setTimeout(() => {
  //       setShouldRender(true);
  //     }, 1500);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  // On any btn click set localStorage and hide the component
  // const onBtnClick = () => {
  //   localStorage.setItem('gdpr', 'true');
  //   setShouldRender(false);
  // };

  return (
    <>
      {!isGDPRClicked ? (
        <div className={styles.Wrapper}>
          <div className={styles.Content}>
            <div className={styles.Content__Text}>{gdprText}</div>
            <div className={styles.Content__Btns}>
              <button
                type="button"
                onClick={() => dispatch(toggleGDPR(!isGDPRClicked))}
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
                onClick={() => dispatch(toggleGDPR(!isGDPRClicked))}
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
