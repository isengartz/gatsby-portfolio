import React, {useRef, useState,useEffect} from 'react';
import "./skills.css"
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Skills = () => {

    const images = useRef([]);
    const sections = useRef([]);
    const wrappers = useRef([]);

    useEffect(()=> {
        gsap.registerPlugin(ScrollTrigger);

        sections.current.forEach((section, index) => {
            const w = wrappers.current[index];

            // const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            // const [x, xEnd] = (index % 2) ? ['100%', 0] : [w.scrollWidth * -1, 0];
            const [x, xEnd] = (index % 2) ? ['100%', 0] : ['-100%', 0];
            console.debug('[section] '+index,x,xEnd);
            gsap.fromTo(w, {  x  }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 1,
                    start:"top center",
                    end: "bottom center",
                    markers: true,

                }
            });
        });
    },[])
    return (
        <div className="demo-wrapper">
        <Container>
            <div ref={ el => {sections.current[0] = el}} className="demo-gallery">
                <Row ref = {el => {wrappers.current[0] = el}} className="wrapper">
                    <Col>
                        <img ref={ el=> {images.current[0] = el }} src="https://source.unsplash.com/random/1240x874?sig=192" width="100%" height="auto"/>
                    </Col>
                    <Col>
                        <img ref={ el=> {images.current[1] = el }} src="https://source.unsplash.com/random/1240x874?sig=27" width="100%" height="auto"/>
                    </Col>
                    <Col>
                        <img ref={ el=> {images.current[2] = el }} src="https://source.unsplash.com/random/1240x874?sig=26" width="100%" height="auto"/>
                    </Col>
                </Row>
            </div>

            <div ref={ el => {sections.current[1] = el}} className="demo-gallery">
                <Row ref = {el => {wrappers.current[1] = el}} className="wrapper">
                    <Col>
                        <img ref={ el=> {images.current[3] = el }} src="https://source.unsplash.com/random/1240x874?sig=192" width="100%" height="auto"/>
                    </Col>
                    <Col>
                        <img ref={ el=> {images.current[4] = el }} src="https://source.unsplash.com/random/1240x874?sig=27" width="100%" height="auto"/>
                    </Col>
                    <Col>
                        <img ref={ el=> {images.current[5] = el }} src="https://source.unsplash.com/random/1240x874?sig=26" width="100%" height="auto"/>
                    </Col>
                </Row>
            </div>
        </Container>



        </div>
    );
};

export default Skills;
