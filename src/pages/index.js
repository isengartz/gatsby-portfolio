import React, {useEffect, useState} from "react"
import {graphql} from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../assets/styles/pages/index.module.scss"
import Col from "react-bootstrap/Col";
import CodeTag from "../components/layout/CodeTag/CodeTag"
import PrimaryButton from "../components/layout/Buttons/PrimaryButton/PrimaryButton"
import BackgroundImage from 'gatsby-background-image'
import headerSvg from "../images/svg/header2.svg"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faUserNinja,
    faUserSecret,
    faHiking,
    faBaby,
    faUserGraduate,
    faUserAstronaut
} from '@fortawesome/free-solid-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment'
import SkillBar from "react-skillbars"
import MatrixLetters from '../components/typography/MatrixLetters/MatrixLetters'
import { ReactSVG } from 'react-svg'
import Typist from "react-typist"

const IndexPage = ({isDarkMode, dispatch, data}) => {

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
    const colors = {
        "color": {
            "bar": "#a24936",
            "title": {
                "text": "#fff",
                "background": "#d36135"
            }
        },
        "bar": {
            "hue": 0,
            "saturation": 80,
            "level": {
                "minimum": 50,
                "maximum": 80
            }
        },
        "title": {
            "text": "#fff",
            "background": "#d36135"
        }
    }
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true)

    }, []);
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

            {/*// <Container id="home" className="home-container">*/}
            {/*//*/}
            {/*/!*    <CodeTag className="top-tags">*!/*/}
            {/*/!*        &#x3C;body&#x3E;*!/*/}
            {/*/!*    </CodeTag>*!/*/}

            {/*//     <Row>*/}
            {/*//         <Col md={2}/>*/}
            {/*//         <Col md={10}>*/}
            {/*/!*            <div className={styles.TextSectionContainer}>*!/*/}
            {/*//                 <div className={styles.TextSection}>*/}
            {/*/!*                    <h1>*!/*/}
            {/*/!*                        Hi Lads, I'm Thanasis,<br/>*!/*/}
            {/*/!*                        Senior Full Stack Web Developer*!/*/}
            {/*/!*                    </h1>*!/*/}
            {/*/!*                    <PrimaryButton>Contact Me</PrimaryButton>*!/*/}
            {/*/!*                </div>*!/*/}
            {/*/!*                <div className={styles.HomeImageSection}>*!/*/}
            {/*/!*                    <Img fluid={data.file.childImageSharp.fluid}/>*!/*/}
            {/*/!*                </div>*!/*/}
            {/*/!*            </div>*!/*/}

            {/*/!*        </Col>*!/*/}
            {/*/!*    </Row>*!/*/}

            {/*/!*    <CodeTag className="bottom-tags">*!/*/}
            {/*/!*        &#x3C;body&#x3E;*!/*/}
            {/*/!*    </CodeTag>*!/*/}
            {/*/!*</Container>*!/*/}
            <Container fluid={true}>

                <Row>
                    <Col>
                        <ReactSVG src={headerSvg} />
                        {/*<img style={ {maxWidth:'100%',maxHeight:'80%'}} src={headerSvg} />*/}

                    </Col>
                </Row>
                <Row>
                    <Col/>
                    <Col>
                        <Typist>
                            Animate this text.
                        </Typist>
                    </Col>
                    <Col/>
                </Row>
            </Container>
            <div className="clearfix"/>
            <Container>
                <div style={{padding: '100px'}}></div>
                {/*<MatrixLetters message={[*/}
                {/*    'Incoming transmission',*/}
                {/*    'You don\'t talk to anybody.',*/}
                {/*    'You don\'t interact with anybody.',*/}
                {/*    'Your whole sense of reality is, pretty warped',*/}
                {/*    'Does it bother you that we\'re not real?'*/}
                {/*]} />*/}
            </Container>
            <Container id="about" className={styles.AboutPage}>
                <h2 className="text-center customHeadings">About</h2>
                <Row noGutters={true}>
                    <Col>
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
                                My hobies include snowboarding In winter, Gaming and learning new technologies,
                                frameworks or Programming Languages <br/>

                            </p>
                        </div>


                    </Col>
                    <Col>
                        {

                            mount ? <SkillBar skills={SKILLS} colors={colors}/> : null

                        }


                    </Col>
                </Row>
            </Container>


            <Container id="skills">
                <h2 className="text-center customHeadings">Biopic</h2>
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

            <Container>
                <Row>
                    <Col>
                        <div className="skills-charts">
                            <div id="myCanvasContainer">
                                <canvas width="500" height="500" id="myCanvas">
                                    <ul>
                                        <li><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML 5</a></li>
                                        <li><a data-weight="25"
                                               href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                                               target="_blank">CSS</a></li>
                                        <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript"
                                               target="_blank">JavaScript</a></li>
                                        <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript"
                                               target="_blank">TypeScript</a></li>
                                        <li><a data-weight="24"
                                               href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                                               target="_blank">REST</a></li>
                                        <li><a data-weight="14" href="https://en.wikipedia.org/wiki/JSON"
                                               target="_blank">JSON</a></li>
                                        <li><a data-weight="13" href="https://en.wikipedia.org/wiki/XML"
                                               target="_blank">XML</a></li>
                                        <li><a data-weight="27" href="https://en.wikipedia.org/wiki/AngularJS"
                                               target="_blank">Angular 2+</a></li>
                                        <li><a data-weight="26" href="https://en.wikipedia.org/wiki/WordPress"
                                               target="_blank">Wordpress</a></li>
                                        <li><a data-weight="21" href="https://en.wikipedia.org/wiki/Node.js"
                                               target="_blank">Node JS</a></li>
                                        <li><a data-weight="17" href="https://en.wikipedia.org/wiki/Git"
                                               target="_blank">Git</a></li>
                                        <li><a data-weight="17" href="" target="_blank">_lodash</a></li>
                                        <li><a data-weight="23"
                                               href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                                               target="_blank">Bootstrap</a></li>
                                        <li><a data-weight="15"
                                               href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                                               target="_blank">SASS</a></li>
                                        <li><a data-weight="20"
                                               href="https://en.wikipedia.org/wiki/Responsive_web_design"
                                               target="_blank">RxJs</a></li>
                                        <li><a data-weight="19" href="https://en.wikipedia.org/wiki/JQuery"
                                               target="_blank">jQuery</a></li>
                                        <li><a data-weight="19" href="http://mongoosejs.com/" target="_blank">NoSQl</a>
                                        </li>
                                        <li><a data-weight="19" href="https://karma-runner.github.io/1.0/index.html"
                                               target="_blank">Karma</a></li>
                                        <li><a data-weight="19" href="http://gulpjs.com/" target="_blank">Gulp</a></li>
                                        <li><a data-weight="19" href="https://www.npmjs.com/" target="_blank">npm</a>
                                        </li>
                                        <li><a data-weight="19" href="https://bower.io/" target="_blank">Bower</a></li>
                                        <li><a data-weight="19" href="https://en.wikipedia.org/wiki/BEM"
                                               target="_blank">BEM</a></li>
                                    </ul>
                                </canvas>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </Layout>
    )
}
export const query = graphql`
    query HomePageQuery {
        file(relativePath: {eq: "animations/developer-1.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
export default IndexPage
