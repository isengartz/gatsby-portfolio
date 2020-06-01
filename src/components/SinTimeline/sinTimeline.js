import React from 'react';
import styles from "./sinTimeline.module.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import SinTimelineItem from "./sinTimelineItem"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBaby, faHiking, faUserGraduate, faUserNinja, faUserSecret} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const sinTimeline = () => {
    return (
        <Container>
            <Row>
                <Col className={styles.Timeline} md={12}>
                    <ul>
                        <SinTimelineItem id="1" dateText={"1991 - present (" + moment(new Date()).diff(moment("1991", "YYYY"), 'years') + " years)"} titleText="Born"
                                         jobTitleText="Larisa Greece"
                                         orientation="left"
                                         descriptionText=""
                                         icon={<FontAwesomeIcon icon={faBaby} style={{fontSize: '22px'}}/>}
                        />
                        <SinTimelineItem id="2"
                                         dateText={"2009 - 2014 (" + moment("2014", "YYYY").diff(moment("2009", "YYYY"), 'years') + " years)"}
                                         titleText="Graduation"
                                         jobTitleText="Computer Science & Telecommunications"
                                         orientation="right"
                                         descriptionText="Graduating from Technological Institute of Larisa with Bachelor in Computer Science and Telecommunications"
                                         icon={<FontAwesomeIcon icon={faUserGraduate} style={{fontSize: "22px"}}/>}
                        />
                        <SinTimelineItem id="3"
                                         dateText={"2014 - 2015 (" + moment("2015", "YYYY").diff(moment("2014", "YYYY"), 'years') + " year)"}
                                         titleText="Exnet"
                                         jobTitleText="Web Developer"
                                         orientation="left"
                                         descriptionText="Creating websites with Joomla! CMS alongside with custom Joomla modules and components"
                                         icon={<FontAwesomeIcon icon={faHiking} style={{fontSize: '22px'}}/>}
                        />
                        <SinTimelineItem id="4" dateText={"2015 - present (" + moment(new Date()).diff(moment("2015", "YYYY"), 'years') + " years)"} titleText="Spiti360"
                                         jobTitleText="FullStack Developer"
                                         orientation="right"
                                         descriptionText="Developing, optimizing and continuously upgrading Spit360 both backend and frontend"
                                         icon={<FontAwesomeIcon icon={faUserSecret} style={{fontSize: '22px'}}/>}
                        />

                        <div style={{clear: "both"}}/>
                    </ul>
                </Col>
            </Row>
        </Container>

    );
};

export default sinTimeline;
