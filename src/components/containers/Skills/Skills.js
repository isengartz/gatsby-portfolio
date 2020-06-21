import React, {useRef, useState, useEffect} from 'react';
import "./skills.scss"
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PopUp from "../../PopUp/popUp"
import {useStaticQuery, graphql} from "gatsby"

const Skills = () => {

    // Grab Projects
    // language=GraphQL
    const {allProject} = useStaticQuery(graphql`
        query projects {
            allProject {
                edges {
                    node {
                        description
                        device_image
                        id
                        image
                        title
                    }
                }
            }
        }
    `)
    console.debug(allProject);

    // State


    const [isRendered, setIsRendered] = useState(false);
    const [renderedHtml, setRenderedHtml] = useState([]);
    const [popUpContent,setPopUpContent] = useState([]);
    const [popUpIsActive,setPopUpIsActive] = useState(false);
    const sections = useRef([]);
    const wrappers = useRef([]);
    const projects = useRef([]);



    useEffect(() => {
        // find how many rows we gonna have
        const itemsPerPage = 3;
        const rows = Math.ceil(allProject.edges.length / itemsPerPage);
        let html = [];
        for (let i = 0; i < rows; i++) {
            html.push(<div key={i} ref={el => {
                sections.current[i] = el
            }} className="skills-gallery">
                <Row ref={el => {
                    wrappers.current[i] = el
                }} className="wrapper">

                    {
                        renderItem(i, itemsPerPage)
                    }

                </Row>
            </div>)
        }
        setRenderedHtml(html);
        setIsRendered(true);
    }, [])

    // Renders a single Row item
    const renderItem = (i, itemsPerPage) => {
        let html = [];
        /**
         * Examples:
         * i=0, itemsPerPage=3 -> j = 0*3=0 till j < (0+1) * 3 = 3
         * i=1, itemsPerPage=3 -> j = 1*3=3 till j < (1+1) * 3 = 6
         * i=2, itemsPerPage=3 -> j = 2*3=6 till j < (2+1) * 3 = 9
         */
        for (let j = i * itemsPerPage; j < (i + 1) * itemsPerPage; j++) {

            if (allProject.edges[j]) {
                html.push(
                    <Col data-id={j} onClick={onProjectClick} ref={el => {projects.current[i] = el }} key={j}>
                        <img src={allProject.edges[j].node.image} width="100%" height="auto"/>
                    </Col>
                )
            }
        }
        return html;
    }

    const onProjectClick = (e) => {
        const id = e.currentTarget.dataset.id;
        console.debug(e.currentTarget);
        let popUpContent = [];
        popUpContent.push(
            <div key={id}>
                <p>
                {
                    allProject.edges[id].node.title
                }
                </p>
                <img src={allProject.edges[id].node.image} />
            </div>
        )
        setPopUpContent(popUpContent);
        setPopUpIsActive(true);
    }
    // Gsap ScrollTrigger Stuff
    // Run only when the html is rendered
    useEffect(() => {
        if (isRendered) {
            const timer = setTimeout(() => {
                gsap.registerPlugin(ScrollTrigger);

                sections.current.forEach((section, index) => {
                    const w = wrappers.current[index];

                    const height = w.clientHeight + (0.5 * w.clientHeight);
                    // const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
                    // const [x, xEnd] = (index % 2) ? ['100%', 0] : [w.scrollWidth * -1, 0];

                    // Change direction from left to right for each Row
                    const [x, xEnd] = (index % 2) ? ['100%', 0] : ['-100%', 0];


                    gsap.fromTo(w, {x}, {
                        x: xEnd,
                        scrollTrigger: {
                            trigger: section,
                            scrub: 1,
                            start: "top center",
                            end: `bottom ${height}px`,
                            markers: true,

                        }
                    });
                });
            }, 1000)
            return () => clearTimeout(timer);
        }
    }, [isRendered]);
    return (
        <div className="skills-wrapper" id="projects">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="text-center customHeadings">PROJECTS</h2>
                    </Col>
                </Row>

                {
                    // renderHtml()
                    renderedHtml
                }

            </Container>


            <PopUp isActive={popUpIsActive}>
                {
                    popUpContent
                }
            </PopUp>
        </div>
    );
};

export default Skills;
