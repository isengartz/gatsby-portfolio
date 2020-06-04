import React, {useEffect, useRef, useState} from 'react';
import {TweenMax, TimelineMax, Power3, Linear, Bounce} from "gsap/dist/gsap";
import SvgFooterStart from "./SvgParts/SvgFooterStart";
import SvgFooterEnd from "./SvgParts/SvgFooterEnd";

const SvgFooter = () => {
    const [isVisible, setIsVisible] = useState(null);
    const [started, setStarted] = useState(false);
    const visibleObserver = useRef(null);
    let footerContainer = useRef(null);

    // Initialization of vars
    let snowRef = useRef([]);
    let starOne = useRef(null);
    let starTwo = useRef(null);
    let smallCloud = useRef(null)
    let bigCloud = useRef(null)
    let moon = useRef(null)
    let moonCircle1 = useRef(null)
    let moonCircle2 = useRef(null)
    let moonCircle3 = useRef(null)
    let moonCircle4 = useRef(null)
    let moonCircle5 = useRef(null)

    const tlSnow = new TimelineMax();
    const tl = new TimelineMax();

    // Start the basic animations
    function startLoops() {

        // hide snow
        snowRef.current.forEach(snow => {
            tlSnow.set(snow, {autoAlpha: 0})
        });
        // start snowing
        snowRef.current.forEach(snow => {
            TweenMax.to(snow, 10 + Math.random() * 10, {
                y: '+=1200',
                autoAlpha: 1,
                ease: Linear.easeNone,
                onStart: doneFalling,
                onStartParams: [snow]
            }, '+=0.5');
        });

        // Moon comes in
        tl.to(moon, 5, {x: 0, y: 0, autoAlpha: 1, ease: Bounce.easeOut})
            .to(moonCircle1, 1, {autoAlpha: 0.15, delay: 1})
            .to(moonCircle2, 1, {autoAlpha: 0.04})
            .to(moonCircle3, 1, {autoAlpha: 0.04})
            .to(moonCircle4, 1, {autoAlpha: 0.04})
            .to(moonCircle5, 1, {autoAlpha: 0.04})

        // @todo: Move all this shit inside the loop function and just call the function instead
        let containerHeight = footerContainer.clientHeight;
        let randomX = Math.floor(Math.random() * 99) + 1;
        let randomPosNegX = randomX * (Math.floor(Math.random() * 2) === 1 ? 1 : -1);
        let randomDuration = Math.random() * (10 - 5 + 1) + 5


        // Rotate Stars
        TweenMax.set(starOne, {
            transformOrigin: "right center",
            rotation: -30,
            onComplete: cloudDoneMoving,
            onCompleteParams: [smallCloud]
        });

        TweenMax.set(starTwo, {
            transformOrigin: "right center", rotation: -30,
            onComplete: cloudDoneMoving,
            onCompleteParams: [bigCloud]
        });

        // StarOne Drop
        TweenMax.fromTo(starOne, {xPercent: randomPosNegX, y: "-750", ease: Power3.easeIn}, {
            xPercent: -300,
            y: containerHeight,
            duration: randomDuration,
            ease: Power3.easeInOut,
            onComplete: starDoneFalling,
            onCompleteParams: [starOne]
        })

        // StarTwo Drop
        TweenMax.fromTo(starTwo, {xPercent: randomX, y: "-750", ease: Power3.easeIn}, {
            delay: 10,
            xPercent: -300,
            y: containerHeight,
            duration: randomDuration,
            ease: Power3.easeInOut,
            onComplete: starDoneFalling,
            onCompleteParams: [starTwo]
        })

        // Loop clouds
        function cloudDoneMoving(cloudId) {
            let randomXCloud = 50 * (Math.floor(Math.random() * 2) === 1 ? 1 : -1);
            let randomDelay = Math.random() * (15 - 5 + 1) + 5
            let cloudRandomDuration = Math.floor(Math.random() * (5)) + 1;
            TweenMax.to(cloudId, cloudRandomDuration, {
                delay: randomDelay,
                xPercent: randomXCloud,
                ease: Linear.easeInOut,
                onComplete: cloudDoneMoving,
                onCompleteParams: [cloudId]
            });
        }

        // Loop stars
        function starDoneFalling(starId) {

            let containerHeight = footerContainer.clientHeight;
            let randomX = Math.floor(Math.random() * 99) + 1;
            let randomPosNegX = randomX * (Math.floor(Math.random() * 2) === 1 ? 1 : -1);
            let randomDuration = Math.random() * (10 - 5 + 1) + 5
            let randomDelay = Math.random() * (15 - 5 + 1) + 5

            TweenMax.set(starId, {transformOrigin: "right center", rotation: -30})
            TweenMax.fromTo(starId, {xPercent: randomPosNegX, y: "-750", ease: Power3.easeIn}, {
                delay: randomDelay,
                xPercent: -300,
                y: containerHeight,
                duration: randomDuration,
                ease: Power3.easeInOut,
                onComplete: starDoneFalling,
                onCompleteParams: [starId]
            })

        }

        // Loop Snow
        function doneFalling(snowId) {

            let range = Math.random() * 800;
            range = range - 400;

            TweenMax.set(snowId, {y: -100, x: range, autoAlpha: 0.5, rotation: Math.random() * 360});
            TweenMax.to(snowId, 3 + Math.random() * 10, {
                y: '+=1200',
                autoAlpha: 1,
                ease: Linear.easeNone,
                onComplete: doneFalling,
                onCompleteParams: [snowId]
            });
        }
    }

    // Initialize SVG item positions
    useEffect(() => {
        tl.set(moon, {y: '+=500', x: '+=300', autoAlpha: 0.5})
            .set(moonCircle1, {autoAlpha: 0})
            .set(moonCircle2, {autoAlpha: 0})
            .set(moonCircle3, {autoAlpha: 0})
            .set(moonCircle4, {autoAlpha: 0})
            .set(moonCircle5, {autoAlpha: 0})
            .set(starOne, {y: '-=700'})
            .set(starTwo, {y: '-=700'})
        // hide snowflakes
        snowRef.current.forEach(snow => {
            tlSnow.set(snow, {autoAlpha: 0, display: "block"});
        })

    }, [])

    // subscribe the observer
    useEffect(() => {
        // Callback function for observer
        const callback = (entries, obs) => {
            let firstEntry = entries[0];
            // if the section is visible
            if (firstEntry.isIntersecting) {
                // we need to track it for 1 time so we disconnect it after
                console.log('observing')
                obs.disconnect();
                setStarted(true);
                // startGlitchingAndFading();
            }
        };

        const observer = new IntersectionObserver(callback, {threshold: 0.25});
        visibleObserver.current = observer;

    }, [])

    // If element is visible start observing
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
        if (started) {
            // start snowflake looping
            setTimeout(() => startLoops(), 1500)
        }

    }, [started])
    return (
        <div ref={el => (footerContainer = el)}>
            <div ref={setIsVisible}/>
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 style={{width: "100%", height: 'auto', maxWidth: '100%', maxHeight: '100vh'}}
                 height="1000px" width="100%"
                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 2850 1800" enableBackground="new 0 0 2850 1800" xmlSpace="preserve"
                 preserveAspectRatio="xMidYMax slice">
                <g>
                    <SvgFooterStart/>
                    <rect y="0" fill="url(#SVGID_1_)" width="2850" height="1800"/>
                    <g>

                        <ellipse ref={el => {
                            moonCircle5 = el
                        }} transform="matrix(0.6447 -0.7644 0.7644 0.6447 442.5453 1987.4368)" opacity="0.04"
                                 fill="#E5EDD4"
                                 cx="2359.344" cy="517.631" rx="404.417" ry="401.064"/>

                        <ellipse ref={el => {
                            moonCircle4 = el
                        }} transform="matrix(0.6657 -0.7462 0.7462 0.6657 402.3781 1933.516)" opacity="0.04"
                                 fill="#E5EDD4"
                                 cx="2359.344" cy="517.631" rx="330.21" ry="326.151"/>
                        <ellipse ref={el => {
                            moonCircle3 = el
                        }} opacity="0.04" fill="#E5EDD4" cx="2359.344" cy="517.631" rx="254.296" ry="254.654"/>
                        <ellipse ref={el => {
                            moonCircle2 = el
                        }} opacity="0.04" fill="#E5EDD4" cx="2359.344" cy="517.631" rx="172.625" ry="172.867"/>
                        <ellipse ref={el => {
                            moonCircle1 = el
                        }} opacity="0.15" fill="#FFFFFF" cx="2360.545" cy="515.886" rx="125.383" ry="125.559"/>
                        <path ref={el => {
                            moon = el
                        }} fill="#FFFFFF" d="M2433.917,517.751c7.742-51.622-17.183-100.594-59.239-125.921c1.592,0.178,3.184,0.355,4.782,0.596
			c69.775,10.494,117.368,76.841,104.309,146.897c-11.998,64.361-72.348,108.862-137.287,101.272
			c-18.334-2.143-35.21-8.139-49.984-17.036C2362.944,630.986,2423.902,584.528,2433.917,517.751z"/>
                    </g>
                    <g>
                        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="472.6453" y1="382.6855"
                                        x2="472.6453"
                                        y2="640.852">
                            <stop offset="0.0077" stopColor="#FFFFFF;stop-opacity:0.5"/>
                            <stop offset="1" stopColor="#FFFFFF;stop-opacity:0.1"/>
                        </linearGradient>
                        <path ref={el => {
                            bigCloud = el
                        }} fill="url(#SVGID_2_)" d="M839.16,565.602c-34.977-13.594-75.437-7.988-108.898,9.007
			c-4.992-24.212-27.742-42.35-52.129-46.206c-24.386-3.856-49.527,4.775-69.666,19.076c1.702-41.938,2.372-87.479-22.37-121.359
			c-26-35.602-73.8-48.425-117.837-47.621c-66.184,1.208-130.423,27.839-183.122,67.951c-52.7,40.112-94.517,93.15-128.377,150.109
			c-19.336-11.952-44.143-14.583-65.55-6.952c-21.407,7.631-38.974,25.367-46.419,46.866l855.679,15.225
			C901.528,614.142,874.137,579.196,839.16,565.602z"/>
                        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="1939.3007" y1="525.1267"
                                        x2="1939.3007"
                                        y2="652.9054">
                            <stop offset="0.0077" stopColor="#FFFFFF;stop-opacity:0.5"/>
                            <stop offset="1" stopColor="#FFFFFF;stop-opacity:0.1"/>
                        </linearGradient>
                        <path ref={el => {
                            smallCloud = el
                        }} fill="url(#SVGID_3_)" d="M2190.792,616.194c-19.781-3.1-39.826,6.879-53.682,21.351
			c-5.821-26.939-15.417-53.057-28.417-77.351c-5.542-10.357-11.956-20.667-21.484-27.524
			c-17.531-12.616-41.459-10.853-62.475-5.906c-54.037,12.719-103.716,43.331-139.408,85.904
			c-14.838-24.716-48.379-32.914-76.365-26.11c-27.986,6.804-51.474,25.428-72.976,44.613
			c-11.672-11.739-29.347-17.147-45.578-13.947c-16.231,3.201-30.538,14.917-36.894,30.211l571.168,10.839
			C2227.991,638.5,2210.573,619.295,2190.792,616.194z"/>
                        <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="1139.0674" y1="817.6531"
                                        x2="1139.0674"
                                        y2="927.2411">
                            <stop offset="0.0077" stopColor="#FFFFFF;stop-opacity:0.5"/>
                            <stop offset="1" stopColor="#FFFFFF;stop-opacity:0.1"/>
                        </linearGradient>

                    </g>
                    <g>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[1] = el;
                                }} fill="#FFFFFF" d="M157.619,112.443c1.932,0,1.935-3.002,0-3.002C155.688,109.441,155.684,112.443,157.619,112.443
					L157.619,112.443z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[2] = el;
                                }} fill="#FFFFFF" d="M129.983,269.266c1.932,0,1.935-3.002,0-3.002C128.052,266.264,128.049,269.266,129.983,269.266
					L129.983,269.266z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[3] = el;
                        }} fill="#FFFFFF" d="M367.993,170.904c0,1.537,0,3.075,0,4.612c0,1.933,3,1.936,3,0c0-1.537,0-3.075,0-4.612
			C370.993,168.971,367.993,168.968,367.993,170.904L367.993,170.904z"/>
                        <path ref={el => {
                            snowRef.current[4] = el;
                        }} fill="#FFFFFF" d="M283.48,355.401c0-1.537,0-3.075,0-4.612c0-1.933-3-1.936-3,0c0,1.537,0,3.075,0,4.612
			C280.48,357.334,283.48,357.337,283.48,355.401L283.48,355.401z"/>
                        <path ref={el => {
                            snowRef.current[5] = el;
                        }} fill="#FFFFFF" d="M257.45,217.028c0,1.537,0,3.075,0,4.612c0,1.933,3,1.936,3,0c0-1.537,0-3.075,0-4.612
			C260.45,215.095,257.45,215.092,257.45,217.028L257.45,217.028z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[6] = el;
                                }} fill="#FFFFFF" d="M719.547,89.381c1.932,0,1.935-3.002,0-3.002C717.615,86.379,717.612,89.381,719.547,89.381
					L719.547,89.381z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[7] = el;
                                }} fill="#FFFFFF" d="M742.576,379.964c1.932,0,1.935-3.002,0-3.002C740.645,376.962,740.642,379.964,742.576,379.964
					L742.576,379.964z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[8] = el;
                        }} fill="#FFFFFF" d="M688.805,438.425c0-1.537,0-3.075,0-4.612c0-1.933-3-1.936-3,0c0,1.537,0,3.075,0,4.612
			C685.805,440.358,688.805,440.361,688.805,438.425L688.805,438.425z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[9] = el;
                                }} fill="#FFFFFF" d="M549.126,546.012c1.932,0,1.935-3.002,0-3.002C547.194,543.01,547.191,546.012,549.126,546.012
					L549.126,546.012z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[10] = el;
                        }} fill="#FFFFFF" d="M595.186,324.616c1.535,0,3.071,0,4.606,0c1.93,0,1.933-3.004,0-3.004c-1.535,0-3.071,0-4.606,0
			C593.255,321.612,593.252,324.616,595.186,324.616L595.186,324.616z"/>
                        <path ref={el => {
                            snowRef.current[11] = el;
                        }} fill="#FFFFFF" d="M1043.025,382.014c-1.535-1.538-3.071-3.075-4.606-4.612c-1.367-1.369-3.489,0.755-2.121,2.124
			c1.535,1.538,3.071,3.075,4.606,4.612C1042.27,385.507,1044.392,383.383,1043.025,382.014L1043.025,382.014z"/>
                        <path ref={el => {
                            snowRef.current[12] = el;
                        }} fill="#FFFFFF" d="M1006.616,687.497c0-1.537,0-3.075,0-4.612c0-1.933-3-1.936-3,0c0,1.537,0,3.075,0,4.612
			C1003.616,689.43,1006.616,689.433,1006.616,687.497L1006.616,687.497z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[13] = el;
                                }} fill="#FFFFFF" d="M779.424,813.533c1.932,0,1.935-3.002,0-3.002C777.493,810.531,777.489,813.533,779.424,813.533
					L779.424,813.533z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[14] = el;
                        }} fill="#FFFFFF" d="M555.232,987.305c0-1.537,0-3.075,0-4.612c0-1.933-3-1.936-3,0c0,1.537,0,3.075,0,4.612
			C552.232,989.238,555.232,989.241,555.232,987.305L555.232,987.305z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[15] = el;
                                }} fill="#FFFFFF" d="M691.911,688.998c1.932,0,1.935-3.002,0-3.002C689.979,685.996,689.976,688.998,691.911,688.998
					L691.911,688.998z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[16] = el;
                        }} fill="#FFFFFF" d="M248.678,808.482c1.535,1.538,3.071,3.075,4.606,4.612c1.367,1.369,3.489-0.755,2.121-2.124
			c-1.535-1.537-3.071-3.075-4.606-4.612C249.432,804.989,247.31,807.113,248.678,808.482L248.678,808.482z"/>
                        <path ref={el => {
                            snowRef.current[17] = el;
                        }} fill="#FFFFFF" d="M124.743,913.25c-0.657,4.819,7.614,4.444,6.653-0.135c-0.397-1.891-3.289-1.091-2.893,0.799
			c-0.072-0.342-0.042,0.067,0.009-0.134c0.039-0.155-0.077,0.087,0.07-0.16c-0.126,0.212,0.163-0.069,0.03-0.017
			c-0.095,0.037-0.18,0.28,0.022-0.003c-0.02,0.028-0.156,0.105-0.19,0.107c0.285-0.015,0.105-0.033-0.012-0.009
			c-0.095,0.019-0.19,0.048-0.285,0.068c0.201-0.041,0.161-0.001-0.017-0.01c-0.146-0.008-0.588-0.073-0.252,0.005
			c-0.094-0.022-0.186-0.043-0.278-0.071c-0.106-0.036-0.073-0.019,0.099,0.051c-0.032-0.016-0.064-0.033-0.096-0.049
			c-0.077-0.217,0.051,0.181,0.006,0.023c-0.026-0.022-0.05-0.046-0.072-0.072c-0.075-0.082-0.048-0.048,0.082,0.104
			c0.017,0.083,0.088,0.267,0.033,0.076c0.108,0.372,0.028-0.095-0.016,0.226c0.109-0.803-0.193-1.613-1.048-1.848
			C125.888,912.008,124.853,912.441,124.743,913.25L124.743,913.25z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[18] = el;
                                }} fill="#FFFFFF" d="M208.285,573.687c1.932,0,1.935-3.002,0-3.002C206.353,570.685,206.35,573.687,208.285,573.687
					L208.285,573.687z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[19] = el;
                        }} fill="#FFFFFF" d="M425.826,783.296c-1.535-1.537-3.071-3.075-4.606-4.612c-1.367-1.369-3.489,0.755-2.121,2.124
			c1.535,1.537,3.071,3.075,4.606,4.612C425.071,786.789,427.193,784.665,425.826,783.296L425.826,783.296z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[20] = el;
                                }} fill="#FFFFFF" d="M1037.358,121.668c1.932,0,1.935-3.002,0-3.002C1035.426,118.666,1035.423,121.668,1037.358,121.668
					L1037.358,121.668z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[21] = el;
                                }} fill="#FFFFFF" d="M1272.262,250.816c1.932,0,1.935-3.002,0-3.002C1270.331,247.814,1270.327,250.816,1272.262,250.816
					L1272.262,250.816z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[22] = el;
                                }} fill="#FFFFFF" d="M1216.991,555.237c1.932,0,1.935-3.002,0-3.002C1215.059,552.235,1215.056,555.237,1216.991,555.237
					L1216.991,555.237z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[23] = el;
                        }} fill="#FFFFFF" d="M1130.231,967.55c0-1.791,0-3.581,0-5.372c0-1.933-3-1.936-3,0c0,1.791,0,3.581,0,5.372
			C1127.231,969.483,1130.231,969.487,1130.231,967.55L1130.231,967.55z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[24] = el;
                                }} fill="#FFFFFF" d="M903.419,1253.773c1.932,0,1.935-3.002,0-3.002C901.488,1250.771,901.485,1253.773,903.419,1253.773
					L903.419,1253.773z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[25] = el;
                        }} fill="#FFFFFF" d="M345.505,1296.751c1.788,0,3.576,0,5.365,0c1.93,0,1.933-3.004,0-3.004c-1.788,0-3.576,0-5.365,0
			C343.575,1293.747,343.571,1296.751,345.505,1296.751L345.505,1296.751z"/>
                        <path ref={el => {
                            snowRef.current[26] = el;
                        }} fill="#FFFFFF" d="M276.826,1471.466c-1.788-1.791-3.576-3.581-5.365-5.372c-1.367-1.369-3.489,0.755-2.121,2.124
			c1.788,1.791,3.576,3.581,5.365,5.372C276.072,1474.959,278.194,1472.835,276.826,1471.466L276.826,1471.466z"/>
                        <path ref={el => {
                            snowRef.current[27] = el;
                        }} fill="#FFFFFF" d="M235.241,1122.776c0.05,0.367,0.039-0.205,0.024,0.056c-0.015,0.114-0.005,0.101,0.03-0.041
			c-0.017,0.048-0.033,0.097-0.05,0.145c0.1,0.179-0.265-0.045,0.027-0.012c0.109,0.012-0.204,0.103,0.043-0.012
			c0.134-0.062,0.12-0.048-0.007-0.003c0.103-0.037,0.213-0.068,0.321-0.089c0.171-0.033-0.215,0.003,0.076-0.013
			c0.116-0.006,0.232-0.004,0.348-0.004c0.18,0,0.554,0.069,0.712,0.215c-0.154-0.142-0.089-0.034,0.025,0.036
			c0.06,0.037-0.038-0.179,0.003,0.03c-0.024-0.12-0.067-0.186-0.037-0.021c-0.067-0.364-0.09,0.158-0.029-0.132
			c-0.396,1.886,2.495,2.693,2.893,0.799c1.039-4.948-7.98-5.35-7.272-0.157c0.11,0.805,1.139,1.244,1.845,1.049
			C235.06,1124.385,235.351,1123.583,235.241,1122.776L235.241,1122.776z"/>
                        <path ref={el => {
                            snowRef.current[28] = el;
                        }} fill="#FFFFFF" d="M110.964,1499.389c0-1.791,0-3.581,0-5.372c0-1.933-3-1.936-3,0c0,1.791,0,3.581,0,5.372
			C107.964,1501.322,110.964,1501.325,110.964,1499.389L110.964,1499.389z"/>
                        <path ref={el => {
                            snowRef.current[29] = el;
                        }} fill="#FFFFFF" d="M724.889,1177.062c0,1.791,0,3.581,0,5.372c0,1.933,3,1.936,3,0c0-1.791,0-3.581,0-5.372
			C727.889,1175.13,724.889,1175.126,724.889,1177.062L724.889,1177.062z"/>
                        <path ref={el => {
                            snowRef.current[30] = el;
                        }} fill="#FFFFFF" d="M652.785,1526.249c0-1.791,0-3.581,0-5.372c0-1.933-3-1.936-3,0c0,1.791,0,3.581,0,5.372
			C649.785,1528.182,652.785,1528.185,652.785,1526.249L652.785,1526.249z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[31] = el;
                                }} fill="#FFFFFF" d="M1432.224,728.913c1.932,0,1.935-3.002,0-3.002C1430.292,725.911,1430.289,728.913,1432.224,728.913
					L1432.224,728.913z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[32] = el;
                                }} fill="#FFFFFF" d="M1936.753,299.65c1.932,0,1.935-3.002,0-3.002C1934.822,296.648,1934.818,299.65,1936.753,299.65
					L1936.753,299.65z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[33] = el;
                        }} fill="#FFFFFF" d="M2324.746,595.516c1.264-1.266,2.529-2.533,3.793-3.799c1.367-1.369-0.754-3.494-2.121-2.124
			c-1.265,1.266-2.529,2.533-3.793,3.799C2321.258,594.761,2323.379,596.886,2324.746,595.516L2324.746,595.516z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[34] = el;
                                }} fill="#FFFFFF" d="M2050.557,907.456c1.932,0,1.935-3.002,0-3.002C2048.625,904.454,2048.622,907.456,2050.557,907.456
					L2050.557,907.456z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[35] = el;
                        }} fill="#FFFFFF" d="M2756.391,74.335c-0.767,0.768-1.534,1.536-2.301,2.304c-1.367,1.369,0.754,3.494,2.121,2.124
			c0.767-0.768,1.534-1.536,2.301-2.304C2759.879,75.091,2757.759,72.966,2756.391,74.335c-0.767,0.768-1.534,1.536-2.301,2.304
			c-1.367,1.369,0.754,3.494,2.121,2.124c0.767-0.768,1.534-1.536,2.301-2.304C2759.879,75.091,2757.759,72.966,2756.391,74.335
			L2756.391,74.335z"/>
                        <path ref={el => {
                            snowRef.current[36] = el;
                        }} fill="#FFFFFF" d="M2485.304,229.771c0,1.266,0,2.533,0,3.799c0,1.933,3,1.936,3,0c0-1.266,0-2.533,0-3.799
			C2488.304,227.838,2485.304,227.835,2485.304,229.771L2485.304,229.771z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[37] = el;
                                }} fill="#FFFFFF" d="M1557.408,189.485c1.932,0,1.935-3.002,0-3.002C1555.476,186.483,1555.473,189.485,1557.408,189.485
					L1557.408,189.485z"/>
                            </g>
                        </g>
                        <path ref={el => {
                            snowRef.current[38] = el;
                        }} fill="#FFFFFF" d="M1654.574,573.023c-1.265-1.266-2.529-2.532-3.793-3.799c-1.367-1.369-3.489,0.755-2.121,2.124
			c1.264,1.266,2.529,2.533,3.793,3.799C1653.82,576.516,1655.942,574.392,1654.574,573.023L1654.574,573.023z"/>
                        <path ref={el => {
                            snowRef.current[39] = el;
                        }} fill="#FFFFFF" d="M1699.339,871.946c0-2.649,0-5.298,0-7.947c0-1.933-3-1.936-3,0c0,2.649,0,5.298,0,7.947
			C1696.339,873.879,1699.339,873.882,1699.339,871.946L1699.339,871.946z"/>
                        <g>
                            <g>
                                <path ref={el => {
                                    snowRef.current[40] = el;
                                }} fill="#FFFFFF" d="M1451.819,1254.917c1.932,0,1.935-3.002,0-3.002C1449.887,1251.915,1449.884,1254.917,1451.819,1254.917
					L1451.819,1254.917z"/>
                            </g>
                        </g>
                    </g>
                    <SvgFooterEnd/>
                </g>

                <path ref={el => (starOne = el)} opacity="0.4" fill="#FFFFFF" d="M974.154,16.297l661.932-1.994c0.277,0,0.5,0.223,0.502,0.499
	c0,0.273-0.219,0.497-0.491,0.502L974.253,26.318c-2.767,0.046-5.048-2.16-5.093-4.927c-0.047-2.767,2.159-5.048,4.927-5.094
	C974.1,16.298,974.141,16.297,974.154,16.297z"/>
                <path ref={el => (starTwo = el)} opacity="0.4" fill="#FFFFFF" d="M1706.355,14.057l980.234-9.53c0.276-0.002,0.503,0.219,0.506,0.496
	c0.003,0.274-0.217,0.499-0.492,0.505L1706.5,24.078c-2.768,0.053-5.053-2.147-5.105-4.916c-0.053-2.766,2.147-5.052,4.914-5.104
	L1706.355,14.057z"/>
            </svg>

        </div>
    );
};

export default SvgFooter;
