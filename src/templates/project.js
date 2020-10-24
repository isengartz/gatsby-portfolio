/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import EmptySpace from '../components/typography/EmptySpace/emptySpace';
import NewButton from '../components/layout/Buttons/NewButton/newButton';
import SEO from '../components/seo';

// eslint-disable-next-line react/prefer-stateless-function
class Project extends Component {
  render() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    const { project, techIcons } = this.props.data;

    const tagsSorted = project.tags.map((item) => {
      return techIcons.edges.find(
        (element) => element.node.name === item.title
      );
    });

    return (
      <Layout pageId="project-page">
        <SEO title={project.title} description={project.overview || ''} />
        <div className="custom-shape-divider-bottom">
          <div className="customer-shape-overlay" />
          <BackgroundImage
            className="divider-bg-image"
            fluid={project.deviceImg.childImageSharp.fluid}
            backgroundColor="rgba(000,000,000,0.7)"
          />
          <div className="content-wrapper d-flex align-content-center align-items-center text-center flex-column">
            <div>
              <h1 className="text-center customHeadings">{project.title}</h1>
            </div>
            <div className="mb-5">
              <h2 className="text-center project-subtitle color-white ">
                Full Stack Development
              </h2>
              <span className="text-center project-date">
                {project.develop_dates}
              </span>
            </div>
            <div className="mt-5">
              <p className="project-overview">{parse(project.subtitle)}</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <EmptySpace space={40} />
        <Container>
          <Row>
            <Col>
              <h2 className="font-weight-bold project-overview-title">
                Overview
              </h2>
              <div className="project-overview-description">
                {parse(project.overview)}
              </div>
            </Col>
          </Row>

          <Row className="d-flex align-items-center align-content-center mb-5">
            <Col md={6}>
              {project.repositories.length > 0 ? (
                <Row>
                  <h2 className="font-weight-bold project-overview-title mb-4">
                    {project.repositories.length > 1
                      ? `Repositories`
                      : `Repository`}
                  </h2>
                  {project.repositories.map((repo) => {
                    return (
                      <Col md={12} key={repo.id}>
                        <p>
                          <strong>{repo.title} : </strong>
                          <a href={repo.url} rel="noreferrer" target="_blank">
                            {repo.url}
                          </a>
                        </p>
                      </Col>
                    );
                  })}
                  <EmptySpace space={40} />
                </Row>
              ) : null}
              {parse(project.description)}
            </Col>
            <Col md={6}>
              <Row>
                {tagsSorted.map((icon) => {
                  return (
                    <Col
                      className="mb-3 project-skill-icon"
                      md={3}
                      xs={6}
                      key={icon.node.name}
                    >
                      <div className="project-skill-image-wrapper">
                        <Img fluid={icon.node.childImageSharp.fluid} />
                        <h3 className="text-center font-weight-bolder">
                          {/*{icon.node.name}*/}
                        </h3>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <EmptySpace space={40} />

          <EmptySpace space={40} />

          {project.link ? (
            <Row>
              <Col>
                <NewButton
                  blank
                  buttonClasses="w-100 text-center project-url-btn "
                  type="externalLink"
                  href={project.link}
                >
                  CHECK PROJECT
                </NewButton>
              </Col>
            </Row>
          ) : null}

          <EmptySpace space={40} />
        </Container>
      </Layout>
    );
  }
}

export default Project;
export const pageQuery = graphql`
  query($slug: String!, $technologyIcons: [String]) {
    project(slug: { eq: $slug }) {
      id
      slug
      title
      subtitle
      project_id
      overview
      description
      develop_dates
      link
      tags {
        title
      }
      repositories {
        id
        title
        url
      }
      deviceImg {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    techIcons: allFile(filter: { name: { in: $technologyIcons } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    #    next: wordpressWpProjects(slug: { eq: $next }) {
    #      featured_media {
    #        alt_text
    #        localFile {
    #          childImageSharp {
    #            fluid(maxWidth: 600) {
    #              ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #            }
    #          }
    #        }
    #      }
    #      slug
    #      path
    #      title
    #    }
    #    prev: wordpressWpProjects(slug: { eq: $prev }) {
    #      featured_media {
    #        alt_text
    #        localFile {
    #          childImageSharp {
    #            fluid(maxWidth: 600) {
    #              ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #            }
    #          }
    #        }
    #      }
    #      slug
    #      path
    #      title
    #    }
  }
`;
