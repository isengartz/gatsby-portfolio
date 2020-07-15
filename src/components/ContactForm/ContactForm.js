import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import _ from 'lodash';

const ContactForm = () => {
  const IS_EMAIL = 'isEmail';
  const IS_REQUIRED = 'isRequired';
  const inputClasses = [styles.Input];
  const [shouldValidate, setShouldValidate] = useState(false);
  const [fields, setFields] = useState({
    fullName: {
      value: '',
      validator: {
        IS_REQUIRED: true,
      },
      className: [styles.Input, 'form-control'],
      errors: {
        isValid: false,
        message: '',
      },
    },
    email: {
      value: '',
      validator: {
        IS_REQUIRED: true,
        IS_EMAIL: true,
      },
      className: [styles.Input, 'form-control'],
      errors: {
        isValid: false,
        message: '',
      },
    },
    message: {
      value: '',
      validator: {},
      className: [styles.Input, 'form-control'],
      errors: {
        isValid: false,
        message: '',
      },
    },
  });
  // I used html5 validation but created the JS validation method too for the lulz xD
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newState = _.cloneDeep(fields);
    let formIsValid = true;
    // start validating on change inputs from now on
    setShouldValidate(true);

    Object.keys(fields).forEach((key) => {
      if (fields[key].validator) {
        // add class .Error for invalid Inputs
        if (fields[key].errors.isValid === false) {
          newState[key].className.push(styles.Error);
          formIsValid = false;
        }
      }
    });

    setFields(newState);
  };

  // when an input change value
  const onFieldChange = (e) => {
    const newFields = _.cloneDeep(fields);
    let isValid = validateField(
      fields[e.target.name].validator,
      e.target.value
    );
    newFields[e.target.name].value = e.target.value;
    newFields[e.target.name].errors.isValid = isValid;
    // If he submited the form at least once
    if (shouldValidate) {
      // Remove Error if the field is now valid
      if (isValid) {
        newFields[e.target.name].className = newFields[
          e.target.name
        ].className.filter((item) => {
          return item !== styles.Error;
        });
      } else {
        // Add .Error if the input was valid and became invalid
        if (!newFields[e.target.name].className.includes(styles.Error)) {
          newFields[e.target.name].className.push(styles.Error);
        }
      }
    }
    setFields(newFields);
  };

  // validate a single field
  const validateField = (rules, value) => {
    let isValid = true;

    if (rules.IS_REQUIRED) {
      isValid = value.trim() !== '' && value.length > 0 && isValid;
    }
    if (rules.IS_EMAIL) {
      const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      isValid = regex.test(value) && isValid;
    }

    return isValid;
  };

  return (
    <div className={styles.FormContainer}>
      <Container>
        <div className={styles.FormContent}>
          <Row>
            <Col md={6}>
              <Row>
                <form
                // onSubmit={onFormSubmit}
                >
                  <div>
                    <h3 className="subheading color-white text-center">
                      Contact Form
                    </h3>{' '}
                  </div>

                  <div className="form-group">
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      onChange={onFieldChange}
                      value={fields.fullName.value}
                      className={fields.fullName.className.join(' ')}
                      placeholder="Your FullName"
                    />
                    <label className="input-label" htmlFor="fullName">
                      Your FullName
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      onChange={onFieldChange}
                      value={fields.email.value}
                      className={fields.email.className.join(' ')}
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      onChange={onFieldChange}
                      value={fields.message.value}
                      className={fields.message.className.join(' ')}
                      placeholder="Your Message"
                    />
                    <label htmlFor="message">Your Message</label>
                  </div>
                  <div className="form-group btn-mob-center">
                    <button className="btn-sin btn-sin-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </Row>
            </Col>
            <Col md={6}>
              <div className={styles.RightContent}>
                <div>
                  <h3 className="subheading color-primary text-center">
                    Contact Details
                  </h3>{' '}
                </div>
                <div className={styles.Copyrights}>
                  <p>
                    © 2020 All Rights, Lefts and Centers reserved. ( OR NOT ! )
                    xD
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
