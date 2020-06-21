import React from 'react';
import PropTypes from 'prop-types';
import Col from "react-bootstrap/Col";


const SkillItem = (props) => {
    const {image} = props;
    return (
        <Col>
            <img  src={image} width="100%" height="auto"/>
        </Col>
    );
};

export default SkillItem;
