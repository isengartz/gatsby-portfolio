import React, {useEffect, useState, useRef, Fragment} from "react";
import styles from "./Blog.module.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GlitchClip from 'react-glitch-effect/core/Clip';
import GlitchText from 'react-glitch-effect/core/Text';
import {TimelineMax, Power2} from "gsap/dist/gsap";

const BlogSection = () => {
    const [shouldRender, setShouldRender] = useState(true)
    const [isVisible, setIsVisible] = useState(null);
    const [seconds, setSeconds] = useState(5);
    const [started, setStarted] = useState(false);
    const [animationStart, setAnimationStart] = useState(false);
    const [glitchIsDisabled, setGlitchIsDisabled] = useState(true);
    const visibleObserver = useRef(null);
    let blogContainer = useRef(null);

    // subscribe the observer
    useEffect(() => {
        // Dont wanna run it every time and blaze your balls
        // So if it already rune once dont render it again

        if (!localStorage.getItem('blogHaveRendered')) {
            // Callback function for observer
            const callback = (entries, obs) => {
                let firstEntry = entries[0];
                // if the section is visible
                if (firstEntry.isIntersecting) {
                    // we need to track it for 1 time so we disconnect it after
                    obs.disconnect();
                    setStarted(true);
                    // startGlitchingAndFading();
                }
            };
            const observer = new IntersectionObserver(callback, {threshold: 0.25});
            visibleObserver.current = observer;
        } else {
            setShouldRender(false);
        }


    }, [])

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
                }
            }, 1000)
        }
        return () => clearInterval(intervalID);
    }, [started, seconds]);

    // Timeline animation to hide the div and update localStorage
    useEffect(() => {
        if (animationStart) {
            const tl = new TimelineMax();
            tl.to(blogContainer, 10, {autoAlpha: 0, ease: Power2.easeOut})
                .to(blogContainer, 7, {height: '0px', display: "none", ease: Power2.easeOut,onComplete:localStorage.setItem('blogHaveRendered','true')}, "-=5")
            // when the animation finished set the localStorage so it wont run again after a page reload
        }
    }, [animationStart]);

    // Glitches
    const startGlitchingAndFading = () => {
        setGlitchIsDisabled(false);
        setAnimationStart(true);
    }

    return (
        <Fragment>
            {
                shouldRender ? <GlitchClip disabled={glitchIsDisabled}>
                    <Container ref={el => (blogContainer = el)} className={styles.BlogContainer} id="blog" fluid>
                        <Row>
                            <Col md={12}>
                                <h2 ref={setIsVisible} className="text-center customHeadings">Blog</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <GlitchText disabled={glitchIsDisabled} component="h4" className="text-center">
                                    Did you actually think I Blog? LOL xD
                                </GlitchText>
                                <GlitchText color1="rgba(77, 171, 245, .5)" color2="rgba(245, 0, 87, .3)"
                                            disabled={glitchIsDisabled} component="h4" className="text-center">
                                    Just Wait For it
                                </GlitchText>

                                <p className="text-center">{glitchIsDisabled ? seconds : null}</p>
                            </Col>
                        </Row>
                    </Container>
                </GlitchClip> : null
            }

        </Fragment>


    )
}
export default BlogSection
