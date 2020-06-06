import React, {useState} from 'react';
import PropTypes from 'prop-types'
import styles from "./ContactForm.module.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import _ from 'lodash';

const ContactForm = () => {
    const IS_EMAIL = "isEmail";
    const IS_REQUIRED = 'isRequired';
    const inputClasses = [styles.Input];
    const [shouldValidate, setShouldValidate] = useState(false);
    const [fields, setFields] = useState({
        fullName: {
            value: '',
            validator: {
                IS_REQUIRED: true
            },
            className: [styles.Input],
            errors: {
                isValid: false,
                message: ''
            }
        },
        email: {
            value: '',
            validator: {
                IS_REQUIRED: true,
                IS_EMAIL: true
            },
            className: [styles.Input],
            errors: {
                isValid: false,
                message: ''
            }
        },
        message: {
            value: '',
            className: [styles.Input],
            errors: {
                isValid: false,
                message: ''
            }
        }

    })

    const onFormSubmit = e => {

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
        })

        setFields(newState);

    }


    const onFieldChange = e => {
        const newFields = _.cloneDeep(fields);
        let isValid = validateField(fields[e.target.name].validator, e.target.value);
        newFields[e.target.name].value = e.target.value;
        newFields[e.target.name].errors.isValid = isValid;
        // If he submited the form at least once
        if (shouldValidate) {
            // Remove Error if the field is now valid
            if (isValid) {
                newFields[e.target.name].className = newFields[e.target.name].className.filter((item) => {
                    return item !== styles.Error;
                })
            }else {
                // Add .Error if the input was valid and became invalid
                if(!newFields[e.target.name].className.includes(styles.Error)){
                    newFields[e.target.name].className.push(styles.Error);
                }
            }

        }
        setFields(newFields);
    }


    const validateField = (rules, value) => {
        let isValid = true;

        if (rules.IS_REQUIRED) {
            isValid = value.trim() !== "" && value.length > 0 && isValid
        }
        if (rules.IS_EMAIL) {
            const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            isValid = regex.test(value) && isValid
        }

        return isValid
    }

    return (
        <div className={styles.FormContainer}>
            <Container>
                <form onSubmit={onFormSubmit}>
                    <Row>
                        <Col md={3}/>
                        <Col md={6}><input type="text" name="fullName" onChange={onFieldChange}
                                           value={fields.fullName.value}
                                           className={fields.fullName.className.join(" ")}
                                           placeholder="Your FullName"/></Col>
                        <Col md={3}/>
                    </Row>
                    <Row>
                        <Col md={3}/>
                        <Col md={6}><input type="text" name="email" onChange={onFieldChange} value={fields.email.value}
                                           className={fields.email.className.join(" ")}
                                           placeholder="Your Email"/></Col>
                        <Col md={3}/>
                    </Row>
                    <Row>
                        <Col md={3}/>
                        <Col md={6}><textarea name="message" onChange={onFieldChange} value={fields.message.value}
                                              className={inputClasses.join(" ")}
                                              placeholder="Your Message"/></Col>
                        <Col md={3}/>
                    </Row>
                    <Row>
                        <Col md={4}/>
                        <Col md={4}>
                            <button type="submit">Submit</button>
                        </Col>

                        <Col md={4}/>
                    </Row>
                </form>
            </Container>

        </div>
    );
};

export default ContactForm;
