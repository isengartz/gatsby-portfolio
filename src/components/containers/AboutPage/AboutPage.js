import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./AboutPage.module.scss"
import React from "react";
import {Fade} from 'react-awesome-reveal';
const SKILLS = [
    {
        "type": "PHP",
        "level": 100
    },
    {
        "type": "Joomla!",
        "level": 95
    },
    {
        "type": "Optimization",
        "level": 95
    },
    {
        "type": "jQuery",
        "level": 85
    },
    {
        "type": "Laravel",
        "level": 85
    },
    {
        "type": "HTML",
        "level": 85
    },
    {
        "type": "CSS",
        "level": 85
    },
    {
        "type": "APIs",
        "level": 80
    },
    {
        "type": "Wordpress",
        "level": 80
    },
    {
        "type": "GIT",
        "level": 70
    },
    {
        "type": "Gatsby",
        "level": 50
    },
    {
        "type": "React",
        "level": 50
    },

    {
        "type": "Design xD",
        "level": 0
    }
]


const AboutPage = () => (
    <Fade cascade direction="top" triggerOnce>
        <Container id="about" className={styles.AboutPage}>
            <h2 className="text-center customHeadings">About</h2>
            <Row noGutters={true}>
                <Col sm={12}>
                    <div className={styles.aboutParagraphContainer}>
                        <p className="aboutParagraph">Passionate Programmer and web security enthusiast.<br/>
                            Started coding at 14 years old and I love building custom projects.<br/>
                            I wanted to focus on Software but Web Dev caught my eye because of how many different
                            things it has to offer.<br/>
                            I like Backend way more than front but I need to do both in order to survive xD.<br/>
                            I hate javascript but I like React, as it is more structured and it feels like a
                            completely different thing.
                        </p>
                        <p className="aboutParagraph">
                            My hobies include snowboarding In winter, Gaming and learning new technologies,<br/>
                            frameworks or Programming Languages <br/>

                        </p>
                    </div>


                </Col>
                <Col>
                    {

                        // mount ? <SkillBar skills={SKILLS} colors={colors}/> : null

                    }


                </Col>
            </Row>
        </Container>
    </Fade>
)

export default AboutPage
