import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';
import ReactCompareImage from '../../SinCompareImage/ReactCompareImage';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query splitImages {
      allFile(
        filter: {
          relativePath: {
            in: [
              "split-images/split-image-1.jpg"
              "split-images/split-image-2.jpg"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 600) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
                src
                srcSetWebp
              }
              fluid {
                src
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Container id="about" className={styles.AboutPage}>
      <Fade cascade direction="top" triggerOnce>
        <h2 className="text-center customHeadings">WHOAMI</h2>
        <Row>
          <Col sm={4} xs={3} />
          <Col sm={4} xs={6}>
            <ReactCompareImage
              containerStyle={{ borderRadius: '50%' }}
              leftImage={data.allFile.edges[0].node.childImageSharp.fixed.src}
              leftImageSrcSet={
                data.allFile.edges[0].node.childImageSharp.fixed.srcSetWebp
              }
              // leftImageCss={{borderRadius:'300px'}}
              rightImage={data.allFile.edges[1].node.childImageSharp.fixed.src}
              rightImageSrcSet={
                data.allFile.edges[1].node.childImageSharp.fixed.srcSetWebp
              }
              // rightImageCss={{borderRadius:'300px'}}
            />
            ;
          </Col>

          <Col sm={4} xs={3} />
        </Row>
        <Row noGutters>
          <Col md={2} />

          <Col md={8} sm={12}>
            <div className={styles.aboutParagraphContainer}>
              <p className="aboutParagraph">
                Passionate Programmer and Web Security enthusiast.
                <br />
                Started coding at 14 years old with mIRC scripting /
                Counter-Strike 1.6 Mods and I love building custom projects.
                <br />
                I wanted to focus on Penetration Testing but Web Dev caught my
                eye
                <br />
                because of how many different things and technologies you have
                to learn.
                <br />
                I like Backend way more than Frontend but I need to do both in
                order to survive xD.
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I hated the FullStack Javascript idea and all the "stupid" JS
                Frameworks as I thought they were a trend that will fade out,
                <br />
                but after trying React and Node.js I found out that I've never
                been more wrong in my life ^^ .
              </p>
              <p className="aboutParagraph">
                My hobbies include snowboarding in winter, gaming, watching
                anime / reading manga
                <br />
                and learning new technologies, frameworks or programming
                languages
                <br />
              </p>
            </div>
          </Col>
          <Col md={2} />
        </Row>
      </Fade>
    </Container>
  );
};

export default AboutPage;
