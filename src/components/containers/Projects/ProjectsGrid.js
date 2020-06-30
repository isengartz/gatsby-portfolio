import Container from "react-bootstrap/Container";


import React from "react";
import {Fade} from "react-awesome-reveal";
import Skills from "../Skills/Skills";

const ProjectsGrid = () => (
    <Fade cascade direction="top" triggerOnce>
        <Container id="projects">
            <h2 className="text-center customHeadings">PROJECTS</h2>
            <Skills/>

        </Container>
    </Fade>
)
export default ProjectsGrid
