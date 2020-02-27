import React from "react"
import {Container} from 'react-bootstrap'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MatrixLetters from '../components/typography/MatrixLetters/MatrixLetters'

const Matrix = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <MatrixLetters message={[
                        'Incoming transmission',
                        'You don\'t talk to anybody.',
                        'You don\'t interact with anybody.',
                        'Your whole sense of reality is, pretty warped',
                        'Does it bother you that we\'re not real?'
                    ]} />
                </Col>
            </Row>
        </Container>
    )
}

export default Matrix