/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import Layout from '../components/layout';
import BoxedItem from '../components/layout/BoxedItem/boxedItem';
import EmptySpace from '../components/typography/EmptySpace/emptySpace';
import NewButton from '../components/layout/Buttons/NewButton/newButton';

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
        <Container>
          <Row>
            <Col>
              <h2 className="text-center customHeadings">{project.title}</h2>
            </Col>
          </Row>
          <EmptySpace space={40} />
          <Row>
            <Col>
              <div className="text-center">
                <Img fluid={project.deviceImg.childImageSharp.fluid} />
              </div>
            </Col>
          </Row>
          <EmptySpace space={40} />
          <Row>
            {tagsSorted.map((icon) => {
              return (
                <Col className="mb-3" sm={2} key={icon.node.name}>
                  <BoxedItem classes="text-center">
                    <Img fixed={icon.node.childImageSharp.fixed} />
                    <h3 className="text-center font-weight-bold">
                      {icon.node.name}
                    </h3>
                  </BoxedItem>
                </Col>
              );
            })}
          </Row>
          <EmptySpace space={40} />
          <Row>
            <Col>
              <BoxedItem>{parse(project.description)}</BoxedItem>
            </Col>
          </Row>
          {project.link ? (
            <Row>
              <Col />
              <Col>
                <NewButton
                  blank
                  buttonClasses="m-5 w-100 text-center"
                  type="externalLink"
                  href={project.link}
                >
                  Check Project
                </NewButton>
              </Col>
              <Col />
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
      project_id
      description
      link
      tags {
        title
      }
      deviceImg {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
