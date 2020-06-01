import Container from "react-bootstrap/Container";

import {CardList} from "../../Card/CardList";

import React from "react";
import {Fade} from "react-awesome-reveal";

const ProjectsGrid = () => (
    <Fade cascade direction="top" triggerOnce>
        <Container id="projects">
            <h2 className="text-center customHeadings">PROJECTS</h2>

                <CardList/>

        </Container>
    </Fade>
)
export default ProjectsGrid
