import React, {useEffect, useState, useRef} from "react";
import TrackVisibility from 'react-on-screen';
import styles from "./Blog.module.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GlitchClip from 'react-glitch-effect/core/Clip';
import GlitchText from 'react-glitch-effect/core/Text';
const BlogSection = () => {
    const [isVisible, setIsVisible] = useState(null);
    const [seconds, setSeconds] = useState(5);
    const [started, setStarted] = useState(false);
    const [glitchIsDisabled, setGlitchIsDisabled] = useState(true);
    const visibleObserver = useRef(null);

    // subscribe the observer
    useEffect(() => {

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

    }, [])

    useEffect(() => {
        const observer = visibleObserver.current;
        if (isVisible) {
            observer.observe(isVisible);
        }
        return () => {
            if (isVisible) {
                observer.unobserve(isVisible);
            }
        };
    }, [isVisible]);


    useEffect(() => {
        let intervalID;
        if (started) {
            intervalID = setInterval(() => {
                // when it reach 0 stop interval and start the glitches
                console.debug(seconds);
                if (seconds === 0 || seconds < 0) {
                    console.debug('got inside');
                    startGlitchingAndFading();
                    clearInterval(intervalID);
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000)
        }
        return () => clearInterval(intervalID);
    }, [started, seconds]);
    const startGlitchingAndFading = () => {
        // start the countdown
        setGlitchIsDisabled(false);

        console.debug(glitchIsDisabled);

        console.debug('glitching')
        // console.debug(glitchIsDisabled);
    }
    return (
       <GlitchClip disabled={glitchIsDisabled}>
            <Container className={styles.BlogContainer} id="blog" fluid>
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
                        <GlitchText color1="rgba(77, 171, 245, .5)" color2="rgba(245, 0, 87, .3)" disabled={glitchIsDisabled} component="h4" className="text-center">
                            Just Wait For it
                        </GlitchText>

                        <p className="text-center">{seconds}</p>
                    </Col>
                </Row>
            </Container>
        </GlitchClip>

    )
}
export default BlogSection
