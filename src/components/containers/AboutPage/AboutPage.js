import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';
import Image from 'react-bootstrap/Image';
// eslint-disable-next-line no-unused-vars
import ReactCompareImage from '../../SinCompareImage/ReactCompareImage';
import styles from './AboutPage.module.scss';


const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query splitImages {
      allFile(
        filter: { relativePath: { in: ["split-images/profile-image.jpg"] } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 400) {
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
        <Row className="align-items-center align-content-center justify-content-center" >
          <Col sm={3} xs={6}>
            <Image
              className="mb-5 w-100"
              src={data.allFile.edges[0].node.childImageSharp.fixed.src}
              roundedCircle
            />
            {/*<ReactCompareImage*/}
            {/*  containerStyle={{*/}
            {/*    borderRadius: '50%',*/}
            {/*    backgroundColor: '#2B343D',*/}
            {/*  }}*/}
            {/*  leftImage={data.allFile.edges[0].node.childImageSharp.fixed.src}*/}
            {/*  leftImageSrcSet={*/}
            {/*    data.allFile.edges[0].node.childImageSharp.fixed.srcSetWebp*/}
            {/*  }*/}
            {/*  rightImage={data.allFile.edges[1].node.childImageSharp.fixed.src}*/}
            {/*  rightImageSrcSet={*/}
            {/*    data.allFile.edges[1].node.childImageSharp.fixed.srcSetWebp*/}
            {/*  }*/}
            {/*/>*/}
          </Col>


        </Row>
        <Row noGutters>
          <Col md={2} />

          <Col md={8} sm={12}>
            <div className={styles.aboutParagraphContainer}>
              <p className="aboutParagraph">
                Passionate Programmer and Web Security enthusiast. Started
                coding at 14 years old with mIRC scripting / Counter-Strike 1.6
                Mods and I love building custom projects. I wanted to focus on
                Penetration Testing but Web Dev caught my eye because of how
                many different things and technologies you have to learn. I like
                Backend way more than Frontend but I need to do both in order to
                survive xD. I hated the FullStack Javascript idea and all the
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "stupid" JS Frameworks as I thought they were a trend that will
                fade out, but after trying React and Node.js I found out that
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I've never been more wrong in my life ^^ .
              </p>
              <p className="aboutParagraph">
                My hobbies include snowboarding in winter, gaming, watching
                anime / reading manga and learning new technologies, frameworks
                or programming languages
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
