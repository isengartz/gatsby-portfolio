import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component/dist-es6";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBaby,
    faHiking,
    faUserAstronaut,
    faUserGraduate,
    faUserNinja,
    faUserSecret
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../layout";
import React from "react";

const ExpPage = () => (
    <Container id="skills">
        <h2 className="text-center customHeadings">The Journey</h2>
        <Row noGutters={true}>

            <Col>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--born"
                        contentStyle={{background: '#d36135', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #d36135'}}
                        date={"1991 - present (" + moment(new Date()).diff(moment("19910505", "YYYYMMDD"), 'years') + " years)"}
                        iconStyle={{background: '#d36135', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faBaby} style={{fontSize: '32px'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Born</h3>
                        <h4 className="vertical-timeline-element-subtitle">Larisa, Greece</h4>
                        <p className="timeline-paragraph">
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#d36135', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #d36135'}}
                        date={"2009 - 2014 (" + moment("2014", "YYYY").diff(moment("2009", "YYYY"), 'years') + " years)"}
                        iconStyle={{background: '#d36135', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faUserGraduate} style={{fontSize: "30px"}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Graduation</h3>
                        <h4 className="vertical-timeline-element-subtitle">Larisa, Greece</h4>
                        <p className="timeline-paragraph">
                            Graduating from Technological Institute of Larisa with Bachelor in Computer Science
                            and Telecommunications
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#d36135', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #d36135'}}
                        date={"2014 - 2015 (" + moment("2015", "YYYY").diff(moment("2014", "YYYY"), 'years') + " year)"}
                        iconStyle={{background: '#d36135', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faHiking} style={{fontSize: '25px'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Web Developer - Exnet Hellas</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thessaloniki, Greece</h4>
                        <p className="timeline-paragraph">
                            Creating websites with Joomla! CMS alongside with custom Joomla modules and
                            components
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#d36135', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #d36135'}}
                        date={"2015 - present (" + moment(new Date()).diff(moment("2015", "YYYY"), 'years') + " years)"}
                        iconStyle={{background: '#d36135', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faUserSecret} style={{fontSize: '25px'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">FullStack Developer - Spiti360</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thessaloniki, Greece</h4>
                        <p className="timeline-paragraph">
                            Developing, optimizing and continuously upgrading Spit360 both backend and frontend
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#d36135', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #d36135'}}
                        date={"2015 - present (" + moment(new Date()).diff(moment("2015", "YYYY"), 'years') + " years)"}
                        iconStyle={{background: '#d36135', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faUserAstronaut} style={{fontSize: '25px'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Web Developer - Mybusiness360</h3>
                        <h4 className="vertical-timeline-element-subtitle">Thessaloniki, Greece</h4>
                        <p className="timeline-paragraph">
                            Developing projects mostly with CMS Wordpress/Joomla/Opencart and some custom
                            projects with Laravel
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#d36135', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  #d36135'}}
                        date={"2016 - present (" + moment(new Date()).diff(moment("2016", "YYYY"), 'years') + " years)"}
                        iconStyle={{background: '#d36135', color: '#fff'}}
                        icon={<FontAwesomeIcon icon={faUserNinja} style={{fontSize: '25px'}}/>}
                    >
                        <h3 className="vertical-timeline-element-title">FullStack Developer - ViewNvisit</h3>
                        <h4 className="vertical-timeline-element-subtitle">Geneva, Switzerland</h4>
                        <p className="timeline-paragraph">
                            Developing Custom projects and more complex software. Mostly using Laravel/Symfony
                            for backend and jQuery and some React for Frontend
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </Col>
        </Row>


    </Container>
)

export default ExpPage
