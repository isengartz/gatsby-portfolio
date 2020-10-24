import React, { useRef, useState, useEffect } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';
import PopUp from '../../PopUp/popUp';
import SkillItem from './SkillItem/skillItem';
import { projectsItemPerPage } from '../../utils/consts';
import './skills.scss';

const Skills = () => {
  // Grab Projects
  // language=GraphQL
  const { allProject } = useStaticQuery(graphql`
    query projects {
      allProject(sort: { fields: sorting, order: ASC }) {
        edges {
          node {
            description
            device_image
            id
            image
            title
            slug
            link
            sorting
            featuredImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tags {
              id
              title
            }
          }
        }
      }
    }
  `);

  // State

  const [isRendered, setIsRendered] = useState(false);
  const [renderedHtml, setRenderedHtml] = useState([]);
  const [popUpContent, setPopUpContent] = useState({
    image: null,
    description: null,
    link: null,
    title: null,
    tags: [],
    device_image: null,
  });
  const [popUpIsActive, setPopUpIsActive] = useState(false);
  const sections = useRef([]);
  const wrappers = useRef([]);
  const projects = useRef([]);

  const onPopUpChange = (newState) => {
    setPopUpIsActive(newState);
  };

  // I need to add this to Project API
  // @todo: Add a field to define if a project will show on a popup or not
  const projectsThatHasPopUp = ['3d-virtual-tour'];

  // When someone clicks a project
  // I was going to use a popup for every project
  // But I found out that the text is too big for some of them
  // I will split them and either redirect to the page or open the popUp
  const onProjectClick = (e, slug) => {
    if (!projectsThatHasPopUp.includes(slug)) {
      // eslint-disable-next-line no-console
      navigate(`/project/${slug}`);
    } else {
      const { id } = e.currentTarget.dataset;
      const popUpC = [];

      // Create the JSX content of Popup
      popUpC.push(
        <div key={id}>
          <p>{allProject.edges[id].node.title}</p>
          <img
            alt={allProject.edges[id].node.title}
            src={allProject.edges[id].node.image}
          />
        </div>
      );
      // Set the JSX to state and show popup
      setPopUpContent({
        // image: allProject.edges[id].node.featuredImg.childImageSharp.fluid,
        link: allProject.edges[id].node.link,
        description: allProject.edges[id].description,
        title: allProject.edges[id].node.title,
        tags: allProject.edges[id].node.tags,
        device_image: allProject.edges[id].device_image,
      });
      setPopUpIsActive(true);
    }
  };

  // Renders a single Row item
  const renderItem = (i, itemsPerPage) => {
    const html = [];
    /**
     * Examples:
     * i=0, itemsPerPage=3 -> j = 0*3=0 till j < (0+1) * 3 = 3
     * i=1, itemsPerPage=3 -> j = 1*3=3 till j < (1+1) * 3 = 6
     * i=2, itemsPerPage=3 -> j = 2*3=6 till j < (2+1) * 3 = 9
     */
    for (let j = i * itemsPerPage; j < (i + 1) * itemsPerPage; j += 1) {
      if (allProject.edges[j]) {
        html.push(
          <SkillItem
            onClick={(e) => onProjectClick(e, allProject.edges[j].node.slug)}
            dataId={j}
            ref={(el) => {
              projects.current[i] = el;
            }}
            key={j}
            image={allProject.edges[j].node.featuredImg.childImageSharp.fluid}
            title={allProject.edges[j].node.title}
            // ribbon="PopUp Item"
          />
        );
      }
    }
    return html;
  };

  // Creates the JSX from Projects Object and set the state var
  useEffect(() => {
    // find how many rows we gonna have
    const itemsPerPage = projectsItemPerPage;
    const rows = Math.ceil(allProject.edges.length / itemsPerPage);

    const html = [];

    for (let i = 0; i < rows; i += 1) {
      html.push(
        <div
          key={i}
          ref={(el) => {
            sections.current[i] = el;
          }}
          className="skills-gallery"
        >
          <Row
            ref={(el) => {
              wrappers.current[i] = el;
            }}
            className="wrapper"
          >
            {
              // Render the inside Columns
              renderItem(i, itemsPerPage)
            }
          </Row>
        </div>
      );
    }

    // set the JSX to state
    setRenderedHtml(html);
    setIsRendered(true);
  }, []);

  // Gsap ScrollTrigger Stuff
  // Run only when the html is rendered
  useEffect(() => {
    if (isRendered) {
      // Because the Html is rendered the same time as this useEffect runs
      // It calculates the Height of the container before the elements gets inserted
      // Added a hack with setTimeout need to figure this out tho
      // @todo: Fix this completely shit hack
      const timer = setTimeout(() => {
        gsap.registerPlugin(ScrollTrigger);

        sections.current.forEach((section, index) => {
          const w = wrappers.current[index];

          const height = w.clientHeight + 0.5 * w.clientHeight;
          // const height = w.clientHeight;
          // const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
          // const [x, xEnd] = (index % 2) ? ['100%', 0] : [w.scrollWidth * -1, 0];

          // Change direction from left to right for each Row
          const [x, xEnd] = index % 2 ? ['100%', 0] : ['-100%', 0];

          gsap.fromTo(
            w,
            { x },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 1,
                start: 'top center',
                end: `bottom ${height}px`,
                // markers: true,
              },
            }
          );
        });
      }, 1000);
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
        {renderedHtml}
      </Container>

      <PopUp
        onChange={onPopUpChange}
        isActive={popUpIsActive}
        // image={popUpContent.image}
        // title={popUpContent.title}
        // description={popUpContent.title}
        // device_image={popUpContent.title}
        // tags={popUpContent.title}
        // link={popUpContent.title}
      >
        <div className="iframe-container">
          <iframe title={popUpContent.title} src={popUpContent.link} />
        </div>
      </PopUp>
    </div>
  );
};

export default Skills;
