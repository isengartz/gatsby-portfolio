import React, { useEffect, useState, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlitchClip from 'react-glitch-effect/core/Clip';
import GlitchText from 'react-glitch-effect/core/Text';
// eslint-disable-next-line import/no-duplicates
import gsap from 'gsap';
// eslint-disable-next-line import/no-duplicates
import { TimelineMax, Power2 } from 'gsap/dist/gsap';
import BlogItem from '../../BlogItem/blogItem';
import styles from './Blog.module.scss';
import EmptySpace from '../../typography/EmptySpace/emptySpace';
import SvgAnimal from '../BlogNew/SvgAnimal/svgAnimal';

const BlogSection = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isVisible, setIsVisible] = useState(null);
  const [shouldRenderAnimal, setShouldRenderAnimal] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const [started, setStarted] = useState(false);
  const [animationStart, setAnimationStart] = useState(false);
  const [glitchIsDisabled, setGlitchIsDisabled] = useState(true);
  const [animalClicked, setAnimalClicked] = useState(false);
  const [countDownRefClasses, setCountDownRefClasses] = useState([
    'text-center',
    styles.CountDownTimer,
  ]);
  const visibleObserver = useRef(null);
  let blogContainer = useRef(null);
  let countDownRef = useRef(null);

  const items = useRef([]);

  const { allBlog } = useStaticQuery(graphql`
    {
      allBlog {
        edges {
          node {
            blog_id
            id
            slug
            title
            shortDescription
            featuredImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  `);

  // subscribe the observer
  useEffect(() => {
    // Dont wanna run it every time and blaze your balls
    // So if it run once dont render it again
    // localStorage.removeItem('blogHaveRendered');
    if (!localStorage.getItem('blogHaveRendered')) {
      // Callback function for observer
      const callback = (entries, obs) => {
        const firstEntry = entries[0];
        // if the section is visible
        if (firstEntry.isIntersecting) {
          // we need to track it for 1 time so we disconnect it after
          obs.disconnect();
          setStarted(true);
          // startGlitchingAndFading();
        }
      };
      const observer = new IntersectionObserver(callback, { threshold: 0.25 });
      visibleObserver.current = observer;
    } else {
      setShouldRender(false);
    }
  }, []);

  // If element is visible start observing
  useEffect(() => {
    // if it hasn't run already once. Subscribe the observer
    if (shouldRender) {
      const observer = visibleObserver.current;
      if (isVisible) {
        observer.observe(isVisible);
      }
      return () => {
        if (isVisible) {
          observer.unobserve(isVisible);
        }
      };
    }
  }, [isVisible]);

  useEffect(() => {
    let intervalID;
    if (started) {
      intervalID = setInterval(() => {
        // when it reach 0 stop interval and start the glitches
        if (seconds === 0 || seconds < 0) {
          startGlitchingAndFading();
          clearInterval(intervalID);
        } else {
          setSeconds(seconds - 1);
          secondsHandler(seconds);
        }
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [started, seconds]);

  // Timeline animation to hide the div and update localStorage
  useEffect(() => {
    if (animationStart) {
      const tl = new TimelineMax();
      tl.to(blogContainer, 10, { autoAlpha: 0, ease: Power2.easeOut }).to(
        blogContainer,
        7,
        {
          height: '0px',
          display: 'none',
          ease: Power2.easeOut,
          onComplete: onHideFinish,
        },
        '-=5'
      );
      // when the animation finished set the localStorage so it wont run again after a page reload
    }
  }, [animationStart]);

  const onHideFinish = () => {
    localStorage.setItem('blogHaveRendered', 'true');
    setShouldRenderAnimal(true);
  };

  // Change classes based on the seconds remaining
  const secondsHandler = (secs) => {
    switch (secs) {
      case 3:
        setCountDownRefClasses([...countDownRefClasses, styles.CountDownThree]);
        break;
      case 2:
        setCountDownRefClasses([...countDownRefClasses, styles.CountDownTwo]);
        break;
      case 1:
        setCountDownRefClasses([...countDownRefClasses, styles.CountDownOne]);
        break;
      default:
        break;
    }
  };

  // Glitches
  const startGlitchingAndFading = () => {
    setGlitchIsDisabled(false);
    setAnimationStart(true);
  };

  // Animate BlogItem
  const handleBlogItemClick = (event, ref) => {
    // Wanted to animate it outside of Window
    // It works but the effect sucks
    // Keep it just in case

    // const windowWidth = window.innerWidth ;
    // const itemPos = ref.getBoundingClientRect();
    // const scrollTo = itemPos.x < (windowWidth/2) ? windowWidth * -1 : windowWidth;
    gsap.to(ref, {
      // x:scrollTo,
      duration: 3,
      autoAlpha: 0,
      rotate: 360,
      scale: 0.1,
    });
  };

  const reShowBlog = () => {
    localStorage.removeItem('blogHaveRendered');
    setAnimalClicked(true);
    const tl2 = new TimelineMax();
    tl2
      .to(blogContainer, 7, {
        height: '100vh',
        display: 'block',
        ease: Power2.easeOut,
      })
      .to(
        blogContainer,
        10,
        {
          autoAlpha: 1,
          ease: Power2.easeOut,
        },
        '-=7'
      );

    setGlitchIsDisabled(true);
  };

  return (
    <div className="position-relative">
      {shouldRender ? (
        <GlitchClip disabled={glitchIsDisabled}>
          <div
            ref={(el) => {
              blogContainer = el;
            }}
            className={styles.BlogContainer}
            id="blog"
          >
            <Container>
              <Row>
                <Col md={12}>
                  <h2 ref={setIsVisible} className="text-center customHeadings">
                    Blog
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  {!animalClicked ? (
                    <>
                      <GlitchText
                        disabled={glitchIsDisabled}
                        component="h4"
                        className="text-center"
                      >
                        Did you actually think I Blog? LOL xD
                      </GlitchText>
                      <GlitchText
                        color1="rgba(77, 171, 245, .5)"
                        color2="rgba(245, 0, 87, .3)"
                        disabled={glitchIsDisabled}
                        component="h4"
                        className="text-center"
                      >
                        Just Wait For it
                      </GlitchText>
                    </>
                  ) : null}

                  <p
                    ref={(el) => {
                      // eslint-disable-next-line no-unused-vars
                      countDownRef = el;
                    }}
                    className={countDownRefClasses.join(' ')}
                  >
                    {glitchIsDisabled && !animalClicked ? seconds : null}
                  </p>
                </Col>
              </Row>
              <EmptySpace space={30} />
              <Row className="mt-5">
                {allBlog.edges.map((blog, index) => (
                  <Col key={blog.node.blog_id}>
                    <BlogItem
                      ref={(el) => {
                        items.current[index] = el;
                      }}
                      onClick={(e) =>
                        handleBlogItemClick(e, items.current[index])
                      }
                      description={blog.node.shortDescription}
                      title={blog.node.title}
                      image={blog.node.featuredImg.childImageSharp.fluid}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </GlitchClip>
      ) : null}

      <SvgAnimal isVisible={shouldRenderAnimal} onClick={reShowBlog} />
    </div>
  );
};
export default BlogSection;
