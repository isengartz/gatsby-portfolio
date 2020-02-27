import React,{Fragment} from 'react';
import '../assets/styles/imports.scss'
import SplitSlider from '../components/layout/SplitSlider'
import {Container} from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Test = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={12}>
                    <SplitSlider
                        BottomLayerTitle="bottm layer aaa"
                        BottomLayerText='Colored by Ruben J DelValle'
                        BottomLayerSrc='http://www.rededits.com/projects/images/rjd_art/capamerica_colored_rjd.jpg'
                        TopLayerTitle='B/W Captain America'
                        TopLayerText='Inked by Ruben J DelValle'
                        TopLayerSrc='http://www.rededits.com/projects/images/rjd_art/capamerica_inked_rjd.jpg'
                        handleColor='orange'
                        handleRotation={0}
                        TopContent={<Fragment><p>Is This Working?</p></Fragment>}
                        BottomContent={<Fragment><p>Yes it is</p></Fragment>}
                    />
                </Col>
            </Row>

        </Container>

    );
};

export default Test;
