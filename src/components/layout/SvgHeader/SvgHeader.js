import React, {useEffect, useState, useRef} from 'react';

import {gsap, TweenMax, TimelineMax, Power2,Bounce,Elastic,Linear} from "gsap/dist/gsap";
import Typist from "react-typist"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const SvgHeader = () => {
    let myElement = React.createRef();
    let cloud2 = useRef(null);
    let cloud3 = useRef(null);
    let moon = useRef(null);
    let moonLight = useRef(null);
    let bigSnowRef = useRef([]);
    let smallSnowRef = useRef([]);

    useEffect(() => {
        const tl = new TimelineMax();
        const tlSnow = new TimelineMax();
        bigSnowRef.current.map(snow =>{
            tlSnow.set(snow,{autoAlpha:0})
        })
        smallSnowRef.current.map(snow =>{
            tlSnow.set(snow,{autoAlpha:0})
        })
        tl.set(cloud2, {x: '-=260'})
            .set(cloud3, {x: '+=260'})
            .set(moon, {y: '+=260'})
            .set(moonLight, {autoAlpha:0})
            .to(moon, 5, {y: '-=260', display: "block", ease: Power2.easeOut})
            .to(moonLight, 5, {autoAlpha:1,ease: Power2.easeOut},"-=3")
            .to(cloud2, 2.5, {x: '+=260', display: "block", autoAlpha: 0.05},"-=2")
            .to(cloud3, 2.5, {x: '-=260', display: "block", autoAlpha: 0.03,onComplete: startLoops},"-=1")

        function startLoops() {
            bigSnowRef.current.map(snow =>{
                tlSnow.set(snow,{autoAlpha:0})
            })
            bigSnowRef.current.map(snow =>{
                TweenMax.to(snow, 10 + Math.random()*10, {y:'+=1200', autoAlpha:1, ease: Linear.easeNone, onComplete: doneFalling, onCompleteParams: [snow],yoyo:true },'+=0.5');

            })

            smallSnowRef.current.map(snow =>{
                tlSnow.set(snow,{autoAlpha:0})
            })
            smallSnowRef.current.map(snow =>{
                TweenMax.to(snow, 10 + Math.random()*10, {y:'+=1200', autoAlpha:1, ease: Linear.easeNone, onComplete: doneFalling, onCompleteParams: [snow],yoyo:true },'+=1');
            })
            function doneFalling(snowId) {
                let range = Math.random() * 800;
                range = range - 400;

                TweenMax.set(snowId, {y: -100, x: range, autoAlpha: 0.2, rotation: Math.random()*360});
                TweenMax.to(snowId, 10 + Math.random()*10, {y:'+=1200', autoAlpha:1, ease: Linear.easeNone, onComplete: doneFalling, onCompleteParams: [snowId],yoyo:true });
            }
        }

    }, []); // Only re-run the effect if count changes
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 style={{minHeight: "800px"}}
                 height="1000px" width="100%"
                 xmlSpace="preserve"
                 viewBox="0 0 720 503.999"
                 preserveAspectRatio="xMidYMax slice"
                // preserveAspectRatio="none"
            >
                <g id="Layer_1" ref={el => (moonLight = el)}>
                    <radialGradient id="SVGID_1_" cx="319.5029" cy="253.5" r="643.6034" fx="674.3281" fy="370.3917"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#D2998B"/>
                        <stop offset="0.0793" stopColor="#D68798"/>
                        <stop offset="0.1749" stopColor="#894774"/>
                        <stop offset="0.1814" stopColor="#844672"/>
                        <stop offset="0.231" stopColor="#603B66"/>
                        <stop offset="0.2775" stopColor="#46345C"/>
                        <stop offset="0.3194" stopColor="#363057"/>
                        <stop offset="0.3524" stopColor="#312E55"/>
                        <stop offset="0.5688" stopColor="#171838"/>
                        <stop offset="0.7855" stopColor="#090923"/>
                    </radialGradient>
                    <rect fill="url(#SVGID_1_)" width="720" height="503.999"/>
                </g>
                <g id="Layer_7" ref={el => (moon = el)}>
                    <circle fill="#F4D6BC" cx="653.985" cy="364.586" r="39.089"/>
                </g>
                <g id="Layer_8">
                    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="437.8301" x2="720.2998"
                                    y2="437.8301">
                        <stop offset="0.0441" stopColor="#030B26"/>
                        <stop offset="0.2646" stopColor="#070E29"/>
                        <stop offset="0.4912" stopColor="#131633"/>
                        <stop offset="0.7206" stopColor="#282442"/>
                        <stop offset="0.9506" stopColor="#453858"/>
                        <stop offset="0.9604" stopColor="#463959"/>
                    </linearGradient>
                    <path fill="url(#SVGID_2_)" d="M720.3,417.666c0,0-13.3-17.333-60.633-5.333c-47.799,12.118-59.619,70.229-297.874,7.513
		c-58.238-15.332-139.481-27.058-202.175-27.264C73.275,392.299,10.463,419.106,0,423.865v59.215h719.332L720.3,417.666z"/>
                </g>
                <g id="Layer_2">
                    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="453.9492" x2="1059.0681"
                                    y2="453.9492">
                        <stop offset="0.0441" stopColor="#030B26"/>
                        <stop offset="1" stopColor="#363359"/>
                    </linearGradient>
                    <path fill="url(#SVGID_3_)" d="M31.477,435.701c35.768-14.617,94.574-35.057,136.256-31.362
		c37.853,3.354,130.875,28.254,210.533,46.978c54.605,12.836,102.928,22.771,122.897,20.876
		C603.491,462.486,688.098,402.46,720,430.854v73.145H240.793H0.514L0,449.575C0,449.575,12.494,443.458,31.477,435.701z"/>
                </g>
                <g id="Layer_4">
                    <g>
                        {/*<circle fill="#FFFFFF" cx="130.602" cy="123.098" r="1.5"/>*/}
                        <g>
                            <g>
                                <g ref={el => {bigSnowRef.current[0] = el;}}>
                                    <circle fill="#FFFFFF" cx="58.092" cy="192.717" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[1] = el;}}>
                                    <circle fill="#FFFFFF" cx="75.982" cy="265.248" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[2] = el;}}>
                                    <circle fill="#FFFFFF" cx="136.613" cy="257.79" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[3] = el;}}>
                                    <circle fill="#FFFFFF" cx="175.531" cy="185.103" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[4] = el;}}>
                                    <circle fill="#FFFFFF" cx="202.724" cy="103.64" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[5] = el;}}>
                                    <circle fill="#FFFFFF" cx="288.973" cy="104.966" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[6] = el;}}>
                                    <circle fill="#FFFFFF" cx="328.834" cy="164.033" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[7] = el;}}>
                                    <circle fill="#FFFFFF" cx="297.977" cy="176.162" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[8] = el;}}>
                                    <circle fill="#FFFFFF" cx="382.961" cy="150.691" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[9] = el;}}>
                                    <circle fill="#FFFFFF" cx="445.771" cy="122.104" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[10] = el;}}>
                                    <circle fill="#FFFFFF" cx="487.92" cy="94.587" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[11] = el;}}>
                                    <circle fill="#FFFFFF" cx="542.819" cy="103.128" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[12] = el;}}>
                                    <circle fill="#FFFFFF" cx="548.333" cy="116.887" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[13] = el;}}>
                                    <circle fill="#FFFFFF" cx="539.816" cy="152.369" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[14] = el;}}>
                                    <circle fill="#FFFFFF" cx="529.554" cy="166.325" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[15] = el;}}>
                                    <circle fill="#FFFFFF" cx="525.367" cy="162.475" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[16] = el;}}>
                                    <circle fill="#FFFFFF" cx="18.973" cy="78.634" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[17] = el;}}>
                                    <circle fill="#FFFFFF" cx="37.655" cy="56.76" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[18] = el;}}>
                                    <circle fill="#FFFFFF" cx="115.738" cy="16.064" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[19] = el;}}>
                                    <circle fill="#FFFFFF" cx="202.852" cy="26.102" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[20] = el;}}>
                                    <circle fill="#FFFFFF" cx="233.402" cy="48.968" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[21] = el;}}>
                                    <circle fill="#FFFFFF" cx="311.73" cy="59.241" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[22] = el;}}>
                                    <circle fill="#FFFFFF" cx="366.077" cy="50.269" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[23] = el;}}>
                                    <circle fill="#FFFFFF" cx="427.769" cy="42.668" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[24] = el;}}>
                                    <circle fill="#FFFFFF" cx="508.98" cy="47.033" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[25] = el;}}>
                                    <circle fill="#FFFFFF" cx="548.642" cy="50.287" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[26] = el;}}>
                                    <circle fill="#FFFFFF" cx="586.144" cy="50.876" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[27] = el;}}>
                                    <circle fill="#FFFFFF" cx="605.716" cy="48.374" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[28] = el;}}>
                                    <circle fill="#FFFFFF" cx="613.396" cy="45.716" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[29] = el;}}>
                                    <circle fill="#FFFFFF" cx="487.814" cy="246.846" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[30] = el;}}>
                                    <circle fill="#FFFFFF" cx="459.738" cy="234.233" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[31] = el;}}>
                                    <circle fill="#FFFFFF" cx="293.75" cy="221.96" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[32] = el;}}>
                                    <circle fill="#FFFFFF" cx="296.779" cy="304.069" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[33] = el;}}>
                                    <circle fill="#FFFFFF" cx="313.304" cy="305.816" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[34] = el;}}>
                                    <circle fill="#FFFFFF" cx="262.054" cy="348.416" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[35] = el;}}>
                                    <circle fill="#FFFFFF" cx="426.901" cy="363.268" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[36] = el;}}>
                                    <circle fill="#FFFFFF" cx="412.957" cy="300.851" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[37] = el;}}>
                                    <circle fill="#FFFFFF" cx="274.885" cy="300.758" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[38] = el;}}>
                                    <circle fill="#FFFFFF" cx="441.027" cy="310.204" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[39] = el;}}>
                                    <circle fill="#FFFFFF" cx="243.484" cy="201.891" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[40] = el;}}>
                                    <circle fill="#FFFFFF" cx="339.628" cy="252.262" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[41] = el;}}>
                                    <circle fill="#FFFFFF" cx="208.963" cy="256.631" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[42] = el;}}>
                                    <circle fill="#FFFFFF" cx="177.722" cy="326.35" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[43] = el;}}>
                                    <circle fill="#FFFFFF" cx="97.442" cy="312.51" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[44] = el;}}>
                                    <circle fill="#FFFFFF" cx="155.007" cy="360.051" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[45] = el;}}>
                                    <circle fill="#FFFFFF" cx="46.062" cy="383.83" r="1.5"/>
                                </g>
                                <g ref={el => {bigSnowRef.current[46] = el;}}>
                                    <circle fill="#FFFFFF" cx="63.242" cy="366.622" r="1.5"/>
                                </g>
                            </g>
                            <g>
                                <g ref={el => {smallSnowRef.current[0] = el;}}>
                                    <circle fill="#FFFFFF" cx="463.393" cy="2.114" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[1] = el;}}>
                                    <circle fill="#FFFFFF" cx="525.113" cy="14.209" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[2] = el;}}>
                                    <circle fill="#FFFFFF" cx="604.517" cy="17.178" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[3] = el;}} >
                                    <circle fill="#FFFFFF" cx="640.529" cy="27.831" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[4] = el;}}>
                                    <circle fill="#FFFFFF" cx="668.561" cy="27.886" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[5] = el;}}>
                                    <circle fill="#FFFFFF" cx="678.483" cy="25.13" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[6] = el;}}>
                                    <circle fill="#FFFFFF" cx="682.359" cy="30.335" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[7] = el;}}>
                                    <circle fill="#FFFFFF" cx="692.342" cy="29.442" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[8] = el;}}>
                                    <circle fill="#FFFFFF" cx="678.889" cy="108.938" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[9] = el;}}>
                                    <circle fill="#FFFFFF" cx="674.461" cy="139.263" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[10] = el;}}>
                                    <circle fill="#FFFFFF" cx="673.934" cy="136.728" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[11] = el;}}>
                                    <circle fill="#FFFFFF" cx="709.508" cy="169.318" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[12] = el;}}>
                                    <circle fill="#FFFFFF" cx="704.613" cy="182.252" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[13] = el;}}>
                                    <circle fill="#FFFFFF" cx="667.863" cy="227.093" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[14] = el;}}>
                                    <circle fill="#FFFFFF" cx="660.097" cy="227.03" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[15] = el;}}>
                                    <circle fill="#FFFFFF" cx="620.241" cy="245.146" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[16] = el;}}>
                                    <circle fill="#FFFFFF" cx="550.821" cy="246.54" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[17] = el;}}>
                                    <circle fill="#FFFFFF" cx="544.239" cy="246.505" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[18] = el;}}>
                                    <circle fill="#FFFFFF" cx="552.701" cy="206.729" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[19] = el;}}>
                                    <circle fill="#FFFFFF" cx="336.548" cy="204.588" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[20] = el;}}>
                                    <circle fill="#FFFFFF" cx="402.839" cy="194.623" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[21] = el;}}>
                                    <circle fill="#FFFFFF" cx="427.744" cy="219.654" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[22] = el;}}>
                                    <circle fill="#FFFFFF" cx="398.23" cy="243.904" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[23] = el;}}>
                                    <circle fill="#FFFFFF" cx="399.351" cy="263.28" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[24] = el;}}>
                                    <circle fill="#FFFFFF" cx="412.195" cy="266.457" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[25] = el;}}>
                                    <circle fill="#FFFFFF" cx="373.031" cy="289.627" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[26] = el;}}>
                                    <circle fill="#FFFFFF" cx="363.575" cy="294.938" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[27] = el;}}>
                                    <circle fill="#FFFFFF" cx="302.158" cy="289.912" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[28] = el;}}>
                                    <circle fill="#FFFFFF" cx="300.28" cy="245.895" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[29] = el;}}>
                                    <circle fill="#FFFFFF" cx="313.734" cy="251.354" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[30] = el;}}>
                                    <circle fill="#FFFFFF" cx="320.766" cy="232.103" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[31] = el;}}>
                                    <circle fill="#FFFFFF" cx="353.658" cy="230.698" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[32] = el;}}>
                                    <circle fill="#FFFFFF" cx="376.04" cy="225.045" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[33] = el;}}>
                                    <circle fill="#FFFFFF" cx="380.878" cy="228.954" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[34] = el;}}>
                                    <circle fill="#FFFFFF" cx="382.286" cy="235.315" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[35] = el;}}>
                                    <circle fill="#FFFFFF" cx="380.516" cy="253.526" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[36] = el;}}>
                                    <circle fill="#FFFFFF" cx="369.703" cy="265.954" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[37] = el;}}>
                                    <circle fill="#FFFFFF" cx="347.388" cy="267.378" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[38] = el;}}>
                                    <circle fill="#FFFFFF" cx="349.023" cy="255.755" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[39] = el;}}>
                                    <circle fill="#FFFFFF" cx="302.199" cy="258.067" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[40] = el;}}>
                                    <circle fill="#FFFFFF" cx="337.972" cy="235.541" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[41] = el;}}>
                                    <circle fill="#FFFFFF" cx="288.059" cy="267.13" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[42] = el;}}>
                                    <circle fill="#FFFFFF" cx="267.227" cy="285.75" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[43] = el;}}>
                                    <circle fill="#FFFFFF" cx="303.723" cy="298.88" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[44] = el;}}>
                                    <circle fill="#FFFFFF" cx="312.151" cy="308.356" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[45] = el;}}>
                                    <circle fill="#FFFFFF" cx="331.791" cy="296.062" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[46] = el;}}>
                                    <circle fill="#FFFFFF" cx="310.527" cy="324" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[47] = el;}}>
                                    <circle fill="#FFFFFF" cx="348.012" cy="311.834" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[48] = el;}}>
                                    <circle fill="#FFFFFF" cx="351.222" cy="331.628" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[49] = el;}}>
                                    <circle fill="#FFFFFF" cx="380.634" cy="289.901" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[50] = el;}}>
                                    <circle fill="#FFFFFF" cx="350.944" cy="289.467" r="0.693"/>
                                </g>
                                <g ref={el => {smallSnowRef.current[51] = el;}}>
                                    <circle fill="#FFFFFF" cx="334.911" cy="285.615" r="0.693"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Layer_3">
                    <g>
                        <g>
                            <path fill="#090E24"
                                  d="M290.849,503h-2.587c-0.009,0.333-0.015,0.667-0.024,1h2.619L290.849,503z"/>
                            <path fill="#090E24" d="M289.619,342.626h-1.654c0.163,2.816,0.124,5.632,0.222,8.447c0.138,5.218-0.413,10.436-0.413,15.405
				c0.138,22.111,0.963,44.475,1.375,66.586c0,3.231-0.137,6.213-0.275,9.442c-0.274,7.951-0.274,15.901,0,23.852
				c0.222,12.213-0.268,24.428-0.611,36.642h2.587L289.619,342.626z"/>
                            <path fill="#090E24" d="M288.873,466.358c-0.274-7.95-0.274-15.9,0-23.852c0.139-3.229,0.275-6.211,0.275-9.442
				c-0.412-22.111-1.237-44.475-1.375-66.586c0-4.97,0.551-10.188,0.413-15.405c-0.098-2.815-0.059-5.631-0.222-8.447h-1.887
				L284.296,503h3.965C288.605,490.786,289.095,478.571,288.873,466.358z"/>
                            <path fill="#090E24"
                                  d="M288.262,503h-3.965l-0.011,1h3.953C288.247,503.667,288.252,503.333,288.262,503z"/>
                            <path fill="#090E24" d="M288.238,504h-3.953"/>
                            <polygon fill="#090E24"
                                     points="290.461,452.436 292.174,459.401 291.486,460.644 289.974,456.54 			"/>
                            <polygon fill="#090E24"
                                     points="289.361,410.907 291.073,417.872 290.387,419.114 288.873,415.011 			"/>
                            <polygon fill="#090E24"
                                     points="284.541,474.406 282.828,481.373 283.515,482.614 285.027,478.51 			"/>
                            <polygon fill="#090E24"
                                     points="285.489,425.889 283.777,432.854 284.464,434.096 285.977,429.993 			"/>
                        </g>
                        <g>
                            <polygon fill="#090E24"
                                     points="286.826,473.939 282.623,478.643 282.623,479.74 286.818,475.499 			"/>
                            <path fill="#090E24" d="M257.338,494.801c0,0,6.398-0.607,13.515-5.131c7.116-4.527,11.816-11.33,11.816-11.33
				s0.449,0.433,0.457,1.765c0.011,1.745-0.521,4.735-1.632,7.307c-1.959,4.534-3.249,8.167-5.354,9.405
				c-2.285,1.344-2.089,0.169-1.828-1.68c0.262-1.848-0.131-3.022-1.697-0.841c0,0-4.148,5.136-6.867,6.419
				c-2.898,1.367-4.281,1.025-4.645,0.02c-0.279-0.772,1.533-2.141,1.915-3.749c0,0,0-1.261-1.632,0
				c-1.633,1.259-3.806,1.075-5.053,0.138C255.879,496.781,255.059,495.209,257.338,494.801z"/>
                        </g>
                        <g>
                            <polygon fill="#090E24"
                                     points="287.328,447.339 279.695,453.444 279.412,455.123 286.914,449.721 			"/>
                            <path fill="#090E24" d="M214.134,473.786c0,0,15.507,1.445,33.96-4.11c18.453-5.557,31.834-16.323,31.834-16.323
				s0.942,0.983,0.543,3.466c-0.522,3.251-2.73,8.602-6.194,12.94c-6.108,7.652-10.335,13.893-15.761,15.351
				c-5.891,1.58-5.054-0.53-3.851-3.863c1.204-3.333,0.634-5.68-3.801-2.247c0,0-11.54,7.888-18.45,9.181
				c-7.367,1.38-10.57,0.186-11.127-1.833c-0.426-1.552,4.342-3.367,5.761-6.209c0,0,0.395-2.345-3.907-0.657
				c-4.302,1.686-9.446,0.471-12.139-1.775C210.02,476.885,208.547,473.627,214.134,473.786z"/>
                        </g>
                        <g>
                            <polygon fill="#090E24"
                                     points="285.04,425.763 277.859,431.506 277.594,433.087 284.65,428.003 			"/>
                            <path fill="#090E24" d="M216.182,450.644c0,0,14.588,1.36,31.948-3.866c17.358-5.229,29.948-15.357,29.948-15.357
				s0.887,0.925,0.511,3.262c-0.493,3.057-2.569,8.092-5.828,12.174c-5.747,7.198-9.724,13.069-14.826,14.439
				c-5.543,1.486-4.755-0.498-3.623-3.634c1.133-3.135,0.597-5.342-3.575-2.113c0,0-10.856,7.419-17.357,8.638
				c-6.932,1.297-9.945,0.173-10.468-1.726c-0.401-1.46,4.085-3.168,5.419-5.842c0,0,0.371-2.206-3.676-0.619
				s-8.887,0.444-11.42-1.668C212.311,453.559,210.926,450.493,216.182,450.644z"/>
                        </g>
                        <g>
                            <polygon fill="#090E24"
                                     points="287.521,395.334 280.82,400.692 280.572,402.168 287.156,397.425 			"/>
                            <path fill="#090E24" d="M223.271,418.549c0,0,13.612,1.27,29.811-3.607c16.196-4.877,27.943-14.329,27.943-14.329
				s0.826,0.864,0.475,3.044c-0.459,2.854-2.396,7.55-5.436,11.357c-5.363,6.717-9.073,12.195-13.835,13.474
				c-5.171,1.388-4.437-0.464-3.38-3.392c1.057-2.924,0.557-4.982-3.336-1.971c0,0-10.13,6.924-16.195,8.059
				c-6.468,1.211-9.279,0.163-9.767-1.608c-0.375-1.362,3.812-2.955,5.056-5.451c0,0,0.346-2.058-3.43-0.576
				c-3.776,1.48-8.292,0.412-10.654-1.558C219.66,421.27,218.368,418.408,223.271,418.549z"/>
                        </g>
                        <g>
                            <polygon fill="#090E24"
                                     points="287.75,464.371 293.09,470.346 293.09,471.742 287.761,466.353 			"/>
                            <path fill="#090E24" d="M334.48,491.254c0,0-10.454-0.771-22.082-6.52s-19.309-14.389-19.309-14.389s-0.734,0.547-0.746,2.239
				c-0.017,2.218,0.852,6.016,2.666,9.281c3.201,5.762,5.311,10.378,8.748,11.947c3.733,1.707,3.414,0.213,2.987-2.134
				c-0.427-2.346,0.213-3.839,2.773-1.066c0,0,6.778,6.523,11.222,8.153c4.736,1.739,6.996,1.304,7.59,0.026
				c0.456-0.982-2.506-2.719-3.131-4.767c0,0,0-1.6,2.668,0c2.666,1.603,6.217,1.368,8.254,0.178
				C336.865,493.771,338.207,491.772,334.48,491.254z"/>
                        </g>
                        <g>
                            <polygon fill="#090E24"
                                     points="289.135,443.169 297.156,449.586 297.453,451.351 289.57,445.673 			"/>
                            <path fill="#090E24" d="M353.929,467.218c0,0-13.381,1.247-29.304-3.548c-15.922-4.793-27.469-14.084-27.469-14.084
				s-0.812,0.848-0.467,2.991c0.45,2.804,2.355,7.422,5.344,11.164c5.271,6.603,8.918,11.989,13.6,13.245
				c5.083,1.364,4.36-0.455,3.322-3.331c-1.039-2.878-0.547-4.9,3.279-1.939c0,0,9.957,6.805,15.921,7.923
				c6.356,1.189,9.121,0.158,9.601-1.584c0.368-1.338-3.746-2.904-4.97-5.357c0,0-0.341-2.022,3.37-0.567
				c3.713,1.456,8.151,0.405,10.475-1.531C357.479,469.892,358.75,467.08,353.929,467.218z"/>
                        </g>
                        <path fill="#090E24" d="M229.08,390.731c0,0,13.293,1.239,29.11-3.523c15.817-4.762,27.289-13.992,27.289-13.992
			s0.806,0.843,0.465,2.972c-0.449,2.787-2.342,7.373-5.311,11.092c-5.235,6.559-8.86,11.91-13.51,13.156
			c-5.05,1.356-4.332-0.452-3.301-3.31c1.032-2.856,0.544-4.868-3.258-1.926c0,0-9.893,6.761-15.816,7.87
			c-6.313,1.183-9.061,0.159-9.536-1.571c-0.367-1.33,3.721-2.886,4.938-5.324c0,0,0.338-2.009-3.35-0.563
			c-3.688,1.447-8.098,0.403-10.404-1.52C225.553,393.389,224.291,390.595,229.08,390.731z"/>
                        <path fill="#090E24" d="M250.51,367.72c0,0,8.639,0.806,18.919-2.29c10.279-3.095,17.735-9.094,17.735-9.094
			s0.523,0.548,0.302,1.932c-0.292,1.811-1.521,4.792-3.452,7.208c-3.402,4.264-5.758,7.74-8.779,8.551
			c-3.281,0.881-2.815-0.294-2.145-2.151c0.67-1.856,0.354-3.163-2.117-1.251c0,0-6.43,4.395-10.279,5.114
			c-4.104,0.769-5.889,0.104-6.197-1.021c-0.238-0.864,2.418-1.875,3.208-3.459c0,0,0.22-1.307-2.177-0.366
			s-5.262,0.263-6.762-0.988C248.219,369.445,247.397,367.631,250.51,367.72z"/>
                        <path fill="#090E24" d="M261.393,350.634c0,0,6.078,0.567,13.31-1.61c7.231-2.177,12.477-6.397,12.477-6.397
			s0.368,0.386,0.212,1.359c-0.204,1.273-1.07,3.371-2.428,5.071c-2.394,2.998-4.051,5.444-6.177,6.015
			c-2.308,0.619-1.98-0.207-1.509-1.514c0.473-1.306,0.249-2.226-1.489-0.88c0,0-4.522,3.091-7.231,3.598
			c-2.887,0.54-4.143,0.072-4.359-0.719c-0.168-0.607,1.701-1.319,2.257-2.434c0,0,0.155-0.918-1.531-0.258
			c-1.686,0.662-3.702,0.185-4.757-0.695C259.781,351.849,259.203,350.572,261.393,350.634z"/>
                        <path fill="#090E24" d="M326.938,371.227c0,0-9.101,0.849-19.932-2.412c-10.828-3.262-18.682-9.58-18.682-9.58
			s-0.554,0.576-0.318,2.034c0.307,1.907,1.603,5.049,3.636,7.595c3.584,4.49,6.064,8.154,9.249,9.009
			c3.457,0.927,2.966-0.312,2.261-2.268c-0.707-1.956-0.373-3.332,2.229-1.318c0,0,6.772,4.628,10.828,5.388
			c4.323,0.81,6.203,0.108,6.53-1.076c0.25-0.91-2.549-1.976-3.381-3.644c0,0-0.231-1.377,2.293-0.387
			c2.524,0.991,5.543,0.276,7.123-1.041C329.353,373.045,330.217,371.133,326.938,371.227z"/>
                        <path fill="#090E24" d="M317.383,352.454c0,0-7.016,0.654-15.363-1.859c-8.348-2.515-14.401-7.384-14.401-7.384
			s-0.427,0.443-0.245,1.567c0.235,1.471,1.234,3.892,2.803,5.854c2.763,3.462,4.675,6.286,7.129,6.944
			c2.665,0.716,2.287-0.238,1.742-1.746c-0.544-1.51-0.287-2.57,1.719-1.018c0,0,5.221,3.568,8.348,4.153
			c3.333,0.624,4.781,0.084,5.033-0.83c0.193-0.701-1.965-1.522-2.605-2.809c0,0-0.179-1.061,1.768-0.298
			c1.945,0.764,4.273,0.213,5.491-0.803C319.244,353.856,319.91,352.382,317.383,352.454z"/>
                        <path fill="#090E24" d="M348.645,418.257c0,0-14.051,1.31-30.771-3.724c-16.72-5.035-28.847-14.791-28.847-14.791
			s-0.852,0.892-0.49,3.141c0.474,2.945,2.475,7.795,5.613,11.726c5.534,6.933,9.364,12.589,14.28,13.907
			c5.337,1.434,4.579-0.479,3.488-3.499c-1.09-3.02-0.573-5.146,3.444-2.036c0,0,10.456,7.147,16.717,8.318
			c6.676,1.251,9.579,0.169,10.082-1.661c0.387-1.405-3.934-3.05-5.219-5.626c0,0-0.358-2.123,3.54-0.596
			c3.897,1.528,8.56,0.426,10.999-1.608C352.372,421.065,353.707,418.112,348.645,418.257z"/>
                        <path fill="#090E24" d="M340.402,390.557c0,0-12.292,1.146-26.919-3.259c-14.627-4.405-25.235-12.939-25.235-12.939
			s-0.744,0.78-0.429,2.748c0.415,2.576,2.165,6.819,4.91,10.258c4.843,6.065,8.192,11.013,12.493,12.166
			c4.669,1.253,4.006-0.419,3.053-3.061c-0.954-2.642-0.503-4.502,3.012-1.782c0,0,9.147,6.252,14.625,7.277
			c5.84,1.095,8.38,0.147,8.818-1.453c0.34-1.23-3.44-2.668-4.564-4.922c0,0-0.312-1.858,3.097-0.521
			c3.41,1.337,7.487,0.372,9.622-1.407C343.664,393.013,344.831,390.43,340.402,390.557z"/>
                        <path fill="#090E24" d="M357.472,443.362c0,0-16.296,1.519-35.687-4.319c-19.391-5.839-33.453-17.152-33.453-17.152
			s-0.988,1.033-0.569,3.643c0.55,3.416,2.87,9.039,6.51,13.598c6.419,8.04,10.86,14.6,16.562,16.129
			c6.19,1.662,5.311-0.555,4.047-4.058c-1.266-3.502-0.667-5.968,3.993-2.361c0,0,12.126,8.288,19.388,9.647
			c7.742,1.45,11.108,0.194,11.691-1.928c0.449-1.63-4.562-3.536-6.053-6.524c0,0-0.414-2.463,4.106-0.69s9.927,0.493,12.755-1.865
			C361.795,446.619,363.343,443.194,357.472,443.362z"/>
                    </g>
                    <g>
                        <g>
                            <path fill="#070D26" d="M196.528,469.87c0-17.611-0.666-35.221-0.499-52.831c0.333-16.276,1.331-32.554,0.998-48.83
				c-0.332-8.537-0.332-17.075,0-25.614c0.167-3.469,0.333-6.67,0.333-10.141c-0.499-23.746-1.497-47.763-1.664-71.508
				c0-5.338,0.667-10.941,0.5-16.545c-0.118-3.023-0.071-6.047-0.268-9.071h2.002l2.255,260.951
				c-0.565-2.709-1.144-5.354-1.659-8.001C197.526,482.145,196.694,476.007,196.528,469.87z"/>
                            <path fill="#070D26" d="M190.371,496.819l3.273-261.489h2.283c0.197,3.024,0.15,6.048,0.268,9.071
				c0.167,5.604-0.5,11.207-0.5,16.545c0.167,23.745,1.165,47.762,1.664,71.508c0,3.471-0.166,6.672-0.333,10.141
				c-0.332,8.539-0.332,17.077,0,25.614c0.333,16.276-0.664,32.554-0.998,48.83c-0.167,17.61,0.499,35.22,0.499,52.831
				c0.167,6.137,0.999,12.274,1.997,18.41c0.515,2.647,1.094,5.292,1.659,8.001l0.005,0.538H190.371z"/>
                            <polygon fill="#070D26"
                                     points="198.948,353.257 201.021,360.738 200.189,362.072 198.358,357.665 			"/>
                            <polygon fill="#070D26"
                                     points="197.617,308.659 199.689,316.139 198.858,317.473 197.026,313.065 			"/>
                            <polygon fill="#070D26"
                                     points="191.784,376.853 189.711,384.334 190.542,385.667 192.373,381.259 			"/>
                            <polygon fill="#070D26"
                                     points="192.932,324.748 190.86,332.228 191.69,333.562 193.521,329.156 			"/>
                            <polygon fill="#070D26"
                                     points="199.29,411.822 202.561,422.079 201.248,423.908 198.358,417.864 			"/>
                            <polygon fill="#070D26"
                                     points="191.384,444.262 188.553,453.138 189.69,454.72 192.19,449.491 			"/>
                        </g>
                        <g>
                            <polygon fill="#070D26"
                                     points="194.549,376.351 189.463,381.401 189.463,382.58 194.54,378.025 			"/>
                            <path fill="#070D26" d="M158.864,398.755c0,0,7.743-0.652,16.355-5.511c8.611-4.862,14.299-12.168,14.299-12.168
				s0.543,0.465,0.553,1.896c0.013,1.874-0.631,5.086-1.975,7.847c-2.371,4.869-3.932,8.771-6.479,10.101
				c-2.765,1.443-2.528,0.182-2.212-1.804c0.317-1.984-0.158-3.246-2.054-0.903c0,0-5.02,5.516-8.31,6.894
				c-3.508,1.469-5.181,1.102-5.621,0.021c-0.338-0.83,1.855-2.299,2.317-4.026c0,0,0-1.354-1.975,0
				c-1.976,1.352-4.605,1.154-6.115,0.147C157.099,400.881,156.106,399.192,158.864,398.755z"/>
                        </g>
                        <g>
                            <polygon fill="#070D26"
                                     points="195.157,347.784 185.92,354.341 185.577,356.144 194.656,350.342 			"/>
                            <path fill="#070D26" d="M106.582,376.187c0,0,18.765,1.552,41.096-4.414c22.331-5.968,38.523-17.53,38.523-17.53
				s1.141,1.056,0.657,3.722c-0.632,3.491-3.304,9.237-7.496,13.897c-7.392,8.218-12.507,14.92-19.073,16.485
				c-7.128,1.697-6.116-0.569-4.66-4.149c1.457-3.579,0.767-6.099-4.6-2.413c0,0-13.965,8.471-22.327,9.859
				c-8.916,1.482-12.792,0.199-13.465-1.968c-0.515-1.667,5.254-3.616,6.972-6.668c0,0,0.477-2.519-4.729-0.706
				c-5.206,1.81-11.431,0.505-14.689-1.907C101.603,379.514,99.82,376.016,106.582,376.187z"/>
                        </g>
                        <g>
                            <polygon fill="#070D26"
                                     points="192.388,324.612 183.698,330.78 183.377,332.479 191.917,327.019 			"/>
                            <path fill="#070D26" d="M109.06,351.333c0,0,17.653,1.461,38.662-4.152c21.006-5.615,36.242-16.492,36.242-16.492
				s1.073,0.993,0.618,3.503c-0.597,3.282-3.109,8.689-7.053,13.073c-6.955,7.73-11.767,14.035-17.942,15.507
				c-6.708,1.597-5.754-0.535-4.384-3.902c1.371-3.366,0.722-5.736-4.327-2.27c0,0-13.138,7.968-21.005,9.276
				c-8.388,1.393-12.035,0.186-12.667-1.854c-0.486-1.567,4.943-3.401,6.558-6.273c0,0,0.449-2.369-4.448-0.665
				c-4.897,1.704-10.754,0.478-13.82-1.791C104.375,354.464,102.699,351.171,109.06,351.333z"/>
                        </g>
                        <g>
                            <polygon fill="#070D26"
                                     points="195.391,291.935 187.281,297.689 186.981,299.273 194.949,294.18 			"/>
                            <path fill="#070D26" d="M117.639,316.865c0,0,16.473,1.363,36.075-3.874c19.6-5.237,33.815-15.388,33.815-15.388
				s1,0.928,0.574,3.269c-0.556,3.064-2.9,8.107-6.578,12.197c-6.49,7.213-10.979,13.097-16.742,14.47
				c-6.257,1.49-5.369-0.498-4.09-3.643c1.279-3.14,0.673-5.351-4.037-2.116c0,0-12.258,7.436-19.599,8.654
				c-7.827,1.3-11.229,0.175-11.819-1.728c-0.454-1.463,4.613-3.174,6.118-5.854c0,0,0.418-2.209-4.15-0.618
				c-4.57,1.59-10.035,0.442-12.893-1.673C113.269,319.787,111.706,316.715,117.639,316.865z"/>
                        </g>
                        <g>
                            <polygon fill="#070D26"
                                     points="195.667,366.075 202.129,372.491 202.129,373.991 195.68,368.203 			"/>
                            <path fill="#070D26" d="M252.217,394.945c0,0-12.65-0.827-26.722-7.001c-14.071-6.175-23.366-15.453-23.366-15.453
				s-0.889,0.588-0.903,2.405c-0.02,2.382,1.031,6.46,3.227,9.967c3.874,6.188,6.426,11.146,10.586,12.831
				c4.518,1.833,4.131,0.229,3.615-2.292c-0.516-2.519,0.258-4.122,3.356-1.145c0,0,8.203,7.005,13.58,8.756
				c5.732,1.867,8.466,1.399,9.185,0.028c0.552-1.056-3.033-2.92-3.789-5.119c0,0,0-1.718,3.229,0
				c3.227,1.721,7.523,1.469,9.989,0.19C255.104,397.648,256.727,395.502,252.217,394.945z"/>
                        </g>
                        <g>
                            <polygon fill="#070D26"
                                     points="197.343,343.306 207.05,350.197 207.409,352.092 197.87,345.995 			"/>
                            <path fill="#070D26" d="M275.752,369.132c0,0-16.192,1.34-35.461-3.81c-19.268-5.147-33.241-15.125-33.241-15.125
				s-0.983,0.91-0.565,3.212c0.544,3.011,2.85,7.971,6.466,11.989c6.379,7.091,10.792,12.876,16.458,14.225
				c6.151,1.465,5.277-0.488,4.021-3.577c-1.257-3.091-0.662-5.263,3.968-2.083c0,0,12.049,7.308,19.267,8.509
				c7.692,1.277,11.038,0.17,11.618-1.701c0.445-1.437-4.533-3.119-6.014-5.754c0,0-0.413-2.172,4.078-0.609
				c4.493,1.564,9.864,0.436,12.676-1.645C280.048,372.004,281.587,368.984,275.752,369.132z"/>
                        </g>
                        <path fill="#070D26" d="M124.668,286.992c0,0,16.086,1.33,35.228-3.784s33.023-15.026,33.023-15.026s0.975,0.904,0.562,3.191
			c-0.543,2.993-2.833,7.918-6.426,11.911c-6.335,7.044-10.722,12.791-16.349,14.129c-6.111,1.457-5.243-0.485-3.995-3.554
			c1.249-3.068,0.658-5.229-3.942-2.068c0,0-11.971,7.261-19.14,8.452c-7.641,1.27-10.965,0.171-11.54-1.688
			c-0.444-1.429,4.502-3.1,5.975-5.718c0,0,0.409-2.157-4.053-0.605c-4.462,1.554-9.799,0.433-12.591-1.632
			C120.4,289.846,118.873,286.845,124.668,286.992z"/>
                        <path fill="#070D26" d="M150.602,262.279c0,0,10.454,0.865,22.895-2.46c12.439-3.323,21.462-9.766,21.462-9.766
			s0.634,0.588,0.365,2.074c-0.353,1.944-1.841,5.146-4.177,7.741c-4.118,4.578-6.968,8.312-10.625,9.183
			c-3.971,0.946-3.407-0.315-2.595-2.311c0.811-1.993,0.428-3.396-2.562-1.344c0,0-7.781,4.72-12.439,5.493
			c-4.966,0.825-7.126,0.11-7.5-1.098c-0.288-0.928,2.926-2.014,3.882-3.715c0,0,0.266-1.403-2.634-0.393
			c-2.9,1.01-6.367,0.282-8.183-1.062C147.829,264.132,146.835,262.184,150.602,262.279z"/>
                        <path fill="#070D26" d="M163.771,243.93c0,0,7.355,0.609,16.106-1.729c8.751-2.338,15.099-6.87,15.099-6.87
			s0.445,0.414,0.256,1.46c-0.247,1.367-1.295,3.62-2.938,5.446c-2.896,3.22-4.902,5.847-7.475,6.459
			c-2.792,0.665-2.396-0.223-1.826-1.626c0.572-1.401,0.302-2.39-1.802-0.944c0,0-5.473,3.319-8.751,3.863
			c-3.493,0.58-5.013,0.078-5.275-0.771c-0.203-0.652,2.059-1.417,2.731-2.613c0,0,0.188-0.986-1.853-0.277
			c-2.04,0.711-4.48,0.198-5.757-0.747C161.821,245.234,161.122,243.864,163.771,243.93z"/>
                        <path fill="#070D26" d="M243.091,266.045c0,0-11.013,0.911-24.12-2.591c-13.104-3.502-22.607-10.288-22.607-10.288
			s-0.67,0.619-0.385,2.185c0.371,2.049,1.939,5.422,4.4,8.156c4.337,4.822,7.339,8.757,11.192,9.675
			c4.184,0.995,3.589-0.335,2.736-2.436c-0.855-2.101-0.451-3.578,2.698-1.415c0,0,8.195,4.97,13.104,5.785
			c5.231,0.87,7.506,0.117,7.902-1.155c0.303-0.978-3.084-2.122-4.091-3.913c0,0-0.28-1.479,2.775-0.415
			c3.055,1.064,6.708,0.297,8.62-1.118C246.012,267.998,247.058,265.944,243.091,266.045z"/>
                        <path fill="#070D26" d="M231.527,245.885c0,0-8.49,0.702-18.591-1.997c-10.102-2.7-17.428-7.93-17.428-7.93
			s-0.517,0.477-0.297,1.684c0.285,1.579,1.494,4.18,3.392,6.286c3.343,3.718,5.657,6.751,8.627,7.458
			c3.225,0.769,2.768-0.256,2.108-1.875c-0.658-1.622-0.347-2.761,2.08-1.094c0,0,6.318,3.833,10.102,4.461
			c4.033,0.67,5.786,0.09,6.091-0.892c0.234-0.753-2.378-1.635-3.153-3.017c0,0-0.216-1.139,2.139-0.319
			c2.354,0.82,5.171,0.229,6.645-0.862C233.779,247.391,234.585,245.808,231.527,245.885z"/>
                        <path fill="#070D26" d="M269.358,316.552c0,0-17.003,1.406-37.236-3.999c-20.233-5.407-34.909-15.884-34.909-15.884
			s-1.03,0.957-0.593,3.372c0.573,3.163,2.995,8.371,6.793,12.593c6.697,7.445,11.332,13.52,17.281,14.936
			c6.458,1.539,5.541-0.514,4.221-3.758c-1.319-3.243-0.694-5.526,4.168-2.187c0,0,12.653,7.676,20.23,8.933
			c8.078,1.344,11.592,0.182,12.2-1.783c0.468-1.51-4.76-3.275-6.315-6.042c0,0-0.434-2.28,4.284-0.64
			c4.716,1.641,10.358,0.457,13.311-1.728C273.869,319.568,275.484,316.396,269.358,316.552z"/>
                        <path fill="#070D26" d="M259.384,286.804c0,0-14.875,1.23-32.576-3.499c-17.701-4.731-30.538-13.896-30.538-13.896
			s-0.9,0.838-0.519,2.951c0.502,2.767,2.62,7.323,5.942,11.017c5.861,6.514,9.914,11.826,15.119,13.065
			c5.65,1.345,4.848-0.45,3.694-3.287c-1.155-2.837-0.609-4.835,3.645-1.914c0,0,11.07,6.714,17.698,7.815
			c7.067,1.176,10.141,0.158,10.671-1.561c0.411-1.321-4.163-2.865-5.523-5.286c0,0-0.378-1.995,3.747-0.559
			c4.127,1.436,9.061,0.399,11.645-1.512C263.331,289.441,264.743,286.668,259.384,286.804z"/>
                        <path fill="#070D26" d="M280.04,343.514c0,0-19.72,1.631-43.186-4.639c-23.465-6.271-40.483-18.421-40.483-18.421
			s-1.196,1.109-0.689,3.912c0.666,3.669,3.473,9.707,7.877,14.603c7.768,8.635,13.143,15.68,20.042,17.321
			c7.491,1.785,6.427-0.596,4.897-4.357c-1.532-3.761-0.807-6.409,4.832-2.536c0,0,14.674,8.901,23.462,10.361
			c9.369,1.557,13.442,0.208,14.148-2.07c0.544-1.751-5.52-3.798-7.325-7.007c0,0-0.501-2.646,4.97-0.741
			c5.47,1.903,12.013,0.529,15.435-2.004C285.272,347.011,287.145,343.333,280.04,343.514z"/>
                    </g>
                    <g>
                        <g>
                            <path fill="#050814"
                                  d="M31.938,179.471c-0.3,0.084-0.6,0.171-0.912,0.251C31.305,179.647,31.614,179.56,31.938,179.471z"/>
                            <path fill="#050814"
                                  d="M32.168,179.406c-0.079,0.021-0.154,0.042-0.23,0.065C32.014,179.449,32.094,179.427,32.168,179.406z"/>
                            <path fill="#050814"
                                  d="M72.218,179.471c0.323,0.089,0.633,0.176,0.912,0.251C72.817,179.642,72.517,179.556,72.218,179.471z"/>
                            <path fill="#050814"
                                  d="M71.987,179.406c0.075,0.021,0.155,0.042,0.23,0.065C72.14,179.449,72.066,179.427,71.987,179.406z"/>
                            <path fill="#050814" d="M164.613,439.58c1.557-1.148,3.601-3.395,5.72-4.029c-7.631-2.326-14.389-8.992-20.537-14.076
				c-11.734-9.66-0.939-8.555,6.163-17.484c-12.398-12.311-26.189,2.842-40.916-1.838c0.485-1.098,0.972-2.195,1.484-2.758
				c-2.271-2.578-4.004-5.184-6.274-7.764c7.018,0.746,12.864-0.6,19.121-4.656c-18.453-3.971-34.633-5.357-45.775-25.25
				c7.957,9.295,20.999,12.443,32.256,11.916c5.378,0.283,11.769-0.553,15.423-2.863c0.216-0.311,4.124-5.08,4.596-5.598
				c1.53-1.684,4.187-2.344,6.28-3.518c-1.682-1.531-2.369-4.725-3.542-6.818c3.166-1.223,5.208-3.467,5.618-6.174
				c-6.967,0.328-12.403-1.029-19.883-0.141c-6.943,0.863-13.377,1.166-20.907,0.982c-9.698-0.621-29.884-7.195-28.343-20.16
				c4.406,13.762,28.678,15.846,39.685,9.955c-0.052-1.072-1.148-1.557-1.71-2.068c1.021-1.121,2.045-2.242,3.066-3.365
				c-1.222-3.164-0.711-3.727,2.429-5.486c-1.122-1.021-1.198-2.629-2.857-3.629c4.162-2.881,7.178-7.318,10.755-11.248
				c-9.24-2.25-21.057-2.234-30.171-1.809c-10.184,0.48-28.385,1.871-33.225-9.721c8.778,3.885,14.541,12.209,25.034,6.883
				c6.818-3.543,15.965-14.715,17.782-21.785c-18.862-1.264-29.18,7.814-39.86-13.711c9.541,8.688,25.848,12.758,32.698-1.533
				c-3.753,0.178-7.556-0.721-10.872-2.713c6.457,0.234,12.127-4.869,12.361-11.326c-6.791,4.082-32.579,15.5-36.476,1.174
				c4.464,3.551,10.797,1.105,13.837-2.793c-6.048-2.943-10.077-8.665-13.034-14.433c4.08,6.793,14.802,6.288,21.693,4.353
				c-1.146-1.555-1.246-3.698-1.858-5.284c0.536-0.025,1.096,0.485,2.169,0.438c-6.073-3.476-13.679-5.27-17.221-12.089
				c5.997,1.871,16.843,4.049,21.442-1.001c-5.921-0.262-12.121-6.418-18.656-8.26c-4.35-0.968-8.968-1.645-13.475-2.66v-1.422
				c11.102,0.291,24.215,3.1,27.296-10.532c-6.919,1.396-14.325,3.893-20.931,0.443c-13.753-6.878,3.015-4.44,6.004-9.415
				c-4.363-1.406-9.29-3.322-10.562-7.562c5.537,3.501,10.771,0.57,14.298-4.432c-5.499,1.27-12.734-1.638-15.611-7.254
				c4.583-0.257,10.344,1.358,13.859,2.343c-11.335-3.349-13.416-10.201-15.493-20.076c-0.022-0.127-0.045-0.251-0.068-0.376
				l0.604,1.45c0-3.098-1.491-9.174-4.952-6.757c-3.461-2.417-4.953,3.659-4.953,6.757l0.605-1.452
				c-0.023,0.125-0.046,0.251-0.068,0.378c-2.079,9.875-4.158,16.727-15.493,20.076c3.567-1,9.45-2.652,14.066-2.333
				c-3.223,4.734-9.253,7.762-14.151,6.716c3.608,4.941,8.891,7.785,14.368,4.194c-1.202,4.258-6.094,6.257-10.434,7.737
				c2.147,3.445,10.97,3.152,11.42,5.096v0.325c-0.179,0.829-1.662,2.02-5.259,3.893c-6.55,3.558-13.995,1.188-20.935-0.096
				c3.82,15.686,14.374,9.251,26.158,10.143c-5.966,1.966-6.15,2.812-12.099,4.243c-6.501,1.95-12.597,8.21-18.511,8.565
				c4.679,4.974,15.491,2.618,21.454,0.649c-3.43,6.878-11.002,8.793-17.017,12.373c1.074,0.028,1.626-0.49,2.163-0.474
				c-0.586,1.594-0.652,3.738-1.772,5.315c6.925,1.819,17.651,2.144,21.618-4.715c-2.861,5.817-6.793,11.606-12.792,14.645
				c3.105,3.852,9.477,6.193,13.881,2.568c-3.655,14.385-29.629,3.398-36.49-0.568c0.341,6.455,6.096,11.461,12.549,11.119
				c-3.282,2.047-7.07,3.008-10.825,2.891c7.087,14.174,23.325,9.836,32.721,0.99c-10.32,21.701-20.79,12.791-39.627,14.371
				c1.935,7.039,11.264,18.059,18.14,21.486c10.583,5.152,16.207-3.268,24.918-7.299c-4.647,11.672-22.87,10.582-33.061,10.275
				c-4.012-0.122-8.547-0.154-13.151,0.052v29.645c12.141,3.088,31.003-0.351,34.64-12.405c1.758,12.941-18.315,19.85-28.003,20.629
				c-2.301,0.096-4.493,0.138-6.636,0.137v24.066c9.819-0.738,20.094-4.365,26.68-12.32c-6.955,12.916-16.127,18.206-26.68,21.478
				v8.926c0.176-0.02,0.351-0.034,0.528-0.056c-0.186,0.218-0.35,0.437-0.528,0.654v42.673c10.624-6.461,23.38-14.442,32.909-13.358
				c-0.905,14.935-19.822,17.84-32.909,22.043L0,503.999h131.667c-2.396-5.262-15.815-15.931-13.948-21.927
				c1.358-5.436,10.01-4.23,15.371-4.482c-0.025-0.535-0.587-1.047-0.613-1.582c4.291-0.203,8.017-0.914,11.693-2.697
				c-1.073,0.047-2.168-0.438-2.731-0.949c4.29-0.199,9.648-0.451,13.838-2.795c-1.424-7.457-17.531-7.236-24.039-8.543
				c-3.803-0.896-9.725-1.156-12.505-3.174c-6.686-5.061-2.907-4.699-0.553-11.795c-12.094-5.877-38.437-6.252-39.803-23.918
				c12.816-1.676,31.771,13.014,43.304,18.383c7.706,3.936,14.289,6.854,21.51,11.883c10.537,7.027,11.918,2.131,3.937-7.705
				c6.432-0.301,13.325-2.236,19.146-4.121C165.71,440.066,165.173,440.092,164.613,439.58z"/>
                            <path fill="#050814"
                                  d="M130.3,370.766c-0.006,0.004-0.014,0.006-0.022,0.012C130.261,370.805,130.259,370.811,130.3,370.766z"/>
                        </g>
                    </g>
                    <g>
                        <path fill="#101429" d="M339.471,378.093c-0.163,0.047-0.327,0.094-0.497,0.138C339.125,378.189,339.294,378.142,339.471,378.093z
			"/>
                        <path fill="#101429" d="M339.597,378.058c-0.043,0.012-0.084,0.023-0.126,0.035C339.513,378.081,339.556,378.069,339.597,378.058z
			"/>
                        <path fill="#101429"
                              d="M361.453,378.093c0.178,0.049,0.346,0.097,0.498,0.138C361.781,378.187,361.617,378.14,361.453,378.093z"
                        />
                        <path fill="#101429"
                              d="M361.328,378.058c0.041,0.012,0.084,0.023,0.125,0.035C361.412,378.081,361.371,378.069,361.328,378.058z"
                        />
                        <path fill="#101429" d="M310.395,482.709c-0.004-0.002-0.008-0.005-0.012-0.007C310.405,482.726,310.405,482.723,310.395,482.709z
			"/>
                        <path fill="#101429" d="M406.607,500.623c-6.766-6.719-14.291,1.55-22.328-1.005c0.266-0.599,0.531-1.197,0.811-1.504
			c-1.24-1.407-2.186-2.829-3.424-4.237c3.828,0.406,7.02-0.328,10.434-2.541c-10.07-2.167-18.9-2.925-24.98-13.78
			c4.342,5.073,11.459,6.792,17.604,6.503c2.934,0.155,6.422-0.301,8.416-1.562c0.119-0.17,2.252-2.773,2.508-3.056
			c0.836-0.918,2.285-1.279,3.428-1.92c-0.918-0.836-1.293-2.578-1.934-3.721c1.729-0.667,2.844-1.892,3.066-3.368
			c-3.803,0.178-6.768-0.562-10.85-0.077c-3.791,0.471-7.301,0.635-11.41,0.535c-5.293-0.338-16.309-3.926-15.469-11.002
			c2.404,7.51,15.65,8.647,21.658,5.434c-0.029-0.585-0.627-0.85-0.934-1.129c0.557-0.612,1.117-1.225,1.674-1.837
			c-0.668-1.728-0.389-2.034,1.326-2.995c-0.613-0.557-0.654-1.435-1.561-1.979c2.271-1.572,3.918-3.995,5.869-6.139
			c-5.041-1.229-11.49-1.221-16.465-0.987c-5.557,0.262-15.491,1.021-18.132-5.306c4.79,2.12,7.935,6.664,13.662,3.757
			c3.721-1.934,8.713-8.031,9.705-11.89c-10.295-0.689-15.926,4.266-21.754-7.481c5.208,4.74,14.106,6.961,17.846-0.838
			c-2.049,0.097-4.125-0.393-5.934-1.479c3.523,0.128,6.617-2.657,6.746-6.182c-3.707,2.228-17.78,8.458-19.907,0.641
			c2.437,1.938,5.893,0.604,7.551-1.525c-3.3-1.604-5.5-4.728-7.113-7.876c2.226,3.707,8.078,3.432,11.839,2.376
			c-0.627-0.85-0.682-2.02-1.016-2.884c0.293-0.015,0.6,0.265,1.184,0.238c-3.314-1.897-7.465-2.876-9.397-6.597
			c3.272,1.02,9.192,2.208,11.702-0.548c-3.232-0.143-6.615-3.502-10.181-4.507c-2.374-0.529-4.895-0.898-7.354-1.453v-0.775
			c6.059,0.159,13.215,1.691,14.897-5.748c-3.775,0.763-7.817,2.125-11.422,0.242c-7.506-3.753,1.645-2.423,3.276-5.138
			c-2.381-0.768-5.069-1.813-5.764-4.127c3.021,1.91,5.878,0.311,7.802-2.419c-3,0.692-6.95-0.894-8.519-3.959
			c2.501-0.141,5.646,0.741,7.564,1.278c-6.186-1.827-7.322-5.567-8.456-10.956c-0.012-0.069-0.025-0.137-0.037-0.205l0.33,0.791
			c0-1.69-0.814-5.007-2.703-3.688c-1.889-1.319-2.703,1.997-2.703,3.688l0.33-0.792c-0.013,0.068-0.025,0.137-0.037,0.206
			c-1.135,5.389-2.27,9.129-8.455,10.956c1.946-0.546,5.157-1.447,7.676-1.273c-1.758,2.584-5.049,4.236-7.723,3.665
			c1.969,2.697,4.852,4.249,7.841,2.289c-0.655,2.324-3.325,3.415-5.694,4.223c1.172,1.88,5.987,1.72,6.232,2.78v0.178
			c-0.098,0.452-0.906,1.102-2.869,2.124c-3.575,1.942-7.638,0.648-11.426-0.052c2.085,8.56,7.845,5.048,14.275,5.534
			c-3.256,1.074-3.355,1.535-6.603,2.315c-3.548,1.064-6.874,4.48-10.103,4.676c2.555,2.714,8.454,1.428,11.709,0.354
			c-1.872,3.753-6.005,4.799-9.287,6.752c0.586,0.017,0.887-0.267,1.18-0.258c-0.319,0.869-0.355,2.04-0.967,2.9
			c3.779,0.993,9.633,1.171,11.798-2.573c-1.562,3.176-3.708,6.334-6.981,7.993c1.695,2.102,5.172,3.38,7.576,1.401
			c-1.994,7.851-16.17,1.854-19.914-0.31c0.187,3.521,3.327,6.253,6.849,6.066c-1.791,1.118-3.858,1.642-5.908,1.579
			c3.868,7.735,12.729,5.366,17.857,0.54c-5.632,11.843-11.346,6.981-21.626,7.843c1.056,3.842,6.147,9.855,9.9,11.727
			c5.774,2.812,8.844-1.783,13.598-3.983c-2.535,6.369-12.48,5.775-18.042,5.607c-4.977-0.15-11.426-0.052-16.445,1.261
			c1.987,2.11,3.672,4.506,5.969,6.041c-0.895,0.559-0.922,1.437-1.524,2.004c1.729,0.932,2.014,1.233,1.375,2.972
			c0.567,0.604,1.136,1.206,1.703,1.81c-0.302,0.284-0.896,0.559-0.914,1.145c6.06,3.112,19.285,1.755,21.564-5.795
			c0.959,7.062-9.996,10.832-15.283,11.258c-4.106,0.17-7.619,0.062-11.416-0.345c-4.089-0.416-7.044,0.373-10.849,0.259
			c0.248,1.472,1.385,2.679,3.123,3.317c-0.621,1.152-0.967,2.9-1.871,3.752c1.152,0.62,2.607,0.958,3.459,1.862
			c0.262,0.278,2.438,2.846,2.559,3.014c2.015,1.228,5.51,1.625,8.441,1.421c6.147,0.186,13.233-1.651,17.492-6.796
			c-5.898,10.955-14.716,11.861-24.748,14.194c3.451,2.156,6.653,2.838,10.477,2.367c-1.216,1.429-2.139,2.866-3.354,4.294
			c0.284,0.302,0.56,0.896,0.834,1.491c-7.99,2.688-15.656-5.455-22.309,1.375c0.638,0.775,1.327,1.407,2.006,1.944h104.892
			C404.957,502.368,405.823,501.609,406.607,500.623z"/>
                        <path fill="#101429" d="M404.127,503H299.235c0.473,0.375,0.94,0.701,1.384,1h102.102
			C403.162,503.698,403.636,503.373,404.127,503z"/>
                        <path fill="#101429"
                              d="M393.15,482.49c-0.002,0.002-0.006,0.004-0.012,0.007C393.131,482.512,393.129,482.515,393.15,482.49z"/>
                    </g>
                    <g>
                        <path fill="#050814"
                              d="M176.205,305.105c-0.193,0.056-0.386,0.11-0.587,0.162C175.796,305.22,175.996,305.163,176.205,305.105z"
                        />
                        <path fill="#050814" d="M176.353,305.063c-0.051,0.015-0.099,0.028-0.148,0.042C176.254,305.092,176.305,305.078,176.353,305.063z
			"/>
                        <path fill="#050814"
                              d="M202.164,305.105c0.208,0.058,0.408,0.114,0.587,0.162C202.55,305.216,202.356,305.161,202.164,305.105z"
                        />
                        <path fill="#050814"
                              d="M202.015,305.063c0.049,0.015,0.1,0.028,0.149,0.042C202.114,305.092,202.066,305.078,202.015,305.063z"/>
                        <path fill="#050814"
                              d="M141.868,428.648c-0.004-0.003-0.01-0.006-0.014-0.008C141.88,428.668,141.88,428.664,141.868,428.648z"/>
                        <path fill="#050814" d="M261.065,472.739c1.004-0.741,2.321-2.187,3.687-2.597c-4.918-1.5-9.273-5.797-13.235-9.073
			c-7.563-6.225-0.605-5.512,3.972-11.267c-7.99-7.934-16.878,1.831-26.369-1.187c0.312-0.707,0.626-1.413,0.956-1.775
			c-1.463-1.662-2.58-3.341-4.043-5.004c4.522,0.479,8.29-0.388,12.322-3.001c-11.892-2.559-22.32-3.454-29.5-16.273
			c5.128,5.991,13.533,8.021,20.788,7.68c3.466,0.184,7.585-0.355,9.94-1.844c0.139-0.201,2.658-3.275,2.961-3.609
			c0.987-1.084,2.699-1.511,4.047-2.267c-1.084-0.987-1.527-3.045-2.283-4.394c2.04-0.788,3.357-2.234,3.621-3.979
			c-4.49,0.21-7.994-0.664-12.814-0.091c-4.476,0.556-8.621,0.75-13.474,0.632c-6.25-0.398-19.26-4.636-18.266-12.992
			c2.839,8.868,18.482,10.212,25.575,6.417c-0.033-0.691-0.74-1.004-1.102-1.333c0.658-0.724,1.318-1.446,1.976-2.17
			c-0.788-2.04-0.458-2.402,1.566-3.537c-0.723-0.657-0.772-1.693-1.841-2.336c2.682-1.856,4.626-4.718,6.931-7.249
			c-5.955-1.452-13.571-1.441-19.444-1.166c-6.563,0.309-18.293,1.205-21.413-6.266c5.657,2.504,9.371,7.869,16.134,4.437
			c4.394-2.283,10.289-9.484,11.459-14.041c-12.156-0.814-18.806,5.037-25.689-8.835c6.148,5.598,16.658,8.221,21.073-0.989
			c-2.419,0.114-4.87-0.464-7.006-1.747c4.161,0.151,7.815-3.138,7.966-7.3c-4.377,2.63-20.996,9.988-23.507,0.756
			c2.877,2.289,6.958,0.713,8.917-1.801c-3.897-1.895-6.495-5.583-8.4-9.301c2.629,4.377,9.539,4.052,13.98,2.806
			c-0.738-1.003-0.803-2.385-1.197-3.405c0.345-0.018,0.706,0.312,1.397,0.281c-3.914-2.241-8.815-3.396-11.098-7.79
			c3.865,1.204,10.855,2.607,13.819-0.647c-3.817-0.168-7.812-4.136-12.023-5.322c-2.804-0.625-5.78-1.061-8.685-1.716v-0.916
			c7.155,0.188,15.606,1.998,17.592-6.787c-4.459,0.9-9.231,2.509-13.489,0.285c-8.864-4.432,1.943-2.86,3.869-6.066
			c-2.812-0.907-5.986-2.142-6.806-4.874c3.568,2.256,6.941,0.367,9.214-2.856c-3.544,0.817-8.207-1.056-10.061-4.675
			c2.954-0.166,6.667,0.875,8.932,1.509c-7.305-2.157-8.646-6.574-9.984-12.938c-0.014-0.082-0.03-0.162-0.044-0.242l0.389,0.934
			c0-1.996-0.961-5.912-3.191-4.354c-2.23-1.558-3.192,2.358-3.192,4.354l0.39-0.935c-0.015,0.08-0.03,0.161-0.043,0.243
			c-1.34,6.363-2.68,10.78-9.985,12.938c2.299-0.645,6.091-1.709,9.065-1.504c-2.077,3.052-5.963,5.003-9.12,4.328
			c2.326,3.186,5.73,5.019,9.26,2.703c-0.774,2.745-3.928,4.033-6.724,4.987c1.384,2.22,7.07,2.03,7.36,3.283v0.21
			c-0.115,0.534-1.071,1.301-3.389,2.508c-4.222,2.294-9.019,0.766-13.492-0.061c2.461,10.107,9.263,5.961,16.858,6.535
			c-3.845,1.269-3.964,1.812-7.797,2.734c-4.19,1.257-8.119,5.291-11.93,5.521c3.016,3.205,9.983,1.687,13.826,0.418
			c-2.21,4.432-7.091,5.667-10.967,7.973c0.692,0.021,1.047-0.314,1.394-0.304c-0.378,1.026-0.42,2.409-1.143,3.425
			c4.463,1.173,11.376,1.383,13.933-3.039c-1.844,3.751-4.378,7.48-8.244,9.439c2.001,2.481,6.107,3.991,8.946,1.655
			c-2.355,9.271-19.095,2.189-23.517-0.366c0.22,4.159,3.928,7.385,8.087,7.164c-2.115,1.32-4.556,1.938-6.977,1.865
			c4.567,9.135,15.032,6.337,21.088,0.638c-6.651,13.985-13.398,8.244-25.539,9.262c1.247,4.536,7.26,11.639,11.691,13.848
			c6.82,3.32,10.444-2.105,16.059-4.704c-2.995,7.521-14.739,6.82-21.307,6.622c-5.876-0.178-13.492-0.062-19.42,1.489
			c2.346,2.491,4.336,5.32,7.049,7.134c-1.057,0.659-1.089,1.696-1.801,2.366c2.043,1.101,2.378,1.456,1.624,3.509
			c0.671,0.713,1.342,1.425,2.011,2.138c-0.356,0.335-1.057,0.659-1.079,1.352c7.156,3.675,22.774,2.072,25.465-6.844
			c1.133,8.339-11.804,12.792-18.048,13.295c-4.85,0.2-8.998,0.073-13.481-0.407c-4.829-0.491-8.317,0.44-12.811,0.306
			c0.293,1.737,1.634,3.163,3.688,3.917c-0.733,1.361-1.142,3.426-2.21,4.432c1.361,0.731,3.079,1.131,4.085,2.199
			c0.309,0.328,2.88,3.36,3.021,3.559c2.379,1.449,6.507,1.919,9.968,1.678c7.26,0.219,15.628-1.95,20.657-8.025
			c-6.966,12.938-17.378,14.007-29.226,16.763c4.076,2.546,7.857,3.351,12.372,2.795c-1.435,1.688-2.524,3.385-3.96,5.071
			c0.336,0.356,0.661,1.058,0.986,1.761c-9.437,3.175-18.489-6.442-26.345,1.624c4.672,5.677,11.618,4.851,4.16,11.199
			c-3.908,3.341-8.193,7.71-13.083,9.291c1.373,0.389,2.714,1.813,3.73,2.535c-0.357,0.335-0.703,0.325-1.058,0.66
			c3.771,1.152,8.233,2.324,12.382,2.45c-5.037,6.422-4.095,9.564,2.619,4.924c4.6-3.321,8.811-5.271,13.732-7.889
			c7.375-3.583,19.431-13.253,27.707-12.312c-0.69,11.397-17.66,11.923-25.391,15.841c1.593,4.547,4.022,4.273-0.229,7.606
			c-1.771,1.329-5.583,1.56-8.024,2.178c-4.18,0.911-14.561,0.943-15.398,5.763c2.724,1.467,6.181,1.571,8.946,1.655
			c-0.356,0.336-1.058,0.658-1.749,0.639c2.388,1.109,4.798,1.528,7.563,1.612c-0.011,0.346-0.367,0.682-0.377,1.026
			c3.456,0.105,9.019-0.765,9.951,2.724c0.352,1.065,0.048,2.273-0.588,3.532h8.684c1.3-1.371,2.53-2.711,3.678-3.868
			c3.562-3.353,13.146-11.368,18.667-10.854c-0.398,1.718-0.984,9.658,1.08,10.067c2.409,0.419,7.134-7.051,7.531-8.769
			c0.116-0.362,0.218-0.737,0.312-1.118c0.134,0.577,0.289,1.139,0.471,1.676c0.427,1.712,5.274,9.102,7.677,8.642
			c2.057-0.443,1.338-8.372,0.911-10.083c5.512-0.605,15.228,7.249,18.845,10.542c1.227,1.197,2.546,2.593,3.946,4.016h8.667
			c-0.788-1.375-1.201-2.703-0.836-3.876c0.875-3.504,6.451-2.727,9.906-2.89c-0.016-0.345-0.379-0.674-0.395-1.02
			c2.765-0.13,5.167-0.589,7.536-1.738c-0.692,0.032-1.398-0.28-1.761-0.61c2.765-0.129,6.218-0.291,8.918-1.803
			c-0.917-4.805-11.298-4.663-15.493-5.506c-2.45-0.577-6.267-0.744-8.059-2.044c-4.309-3.262-1.874-3.03-0.356-7.602
			c-7.794-3.788-24.771-4.03-25.652-15.415c8.259-1.079,20.475,8.388,27.908,11.847c4.966,2.536,9.209,4.416,13.862,7.659
			c6.791,4.528,7.681,1.372,2.537-4.966c4.145-0.195,8.588-1.441,12.339-2.656C261.772,473.052,261.427,473.067,261.065,472.739z"/>
                        <path fill="#050814"
                              d="M239.596,428.39c-0.004,0.003-0.008,0.005-0.014,0.009C239.571,428.415,239.57,428.419,239.596,428.39z"/>
                    </g>
                    <g>
                        <g>
                            <path fill="#050814" d="M304.611,414.941c-0.164,0.047-0.327,0.094-0.498,0.138C304.266,415.038,304.435,414.99,304.611,414.941z
				"/>
                            <path fill="#050814" d="M304.737,414.906c-0.043,0.012-0.083,0.023-0.125,0.035C304.653,414.93,304.696,414.918,304.737,414.906z
				"/>
                            <path fill="#050814" d="M326.594,414.941c0.176,0.049,0.345,0.097,0.498,0.138C326.921,415.035,326.757,414.988,326.594,414.941z
				"/>
                            <path fill="#050814"
                                  d="M326.468,414.906c0.041,0.012,0.084,0.023,0.126,0.035C326.551,414.93,326.511,414.918,326.468,414.906z"
                            />
                            <path fill="#050814" d="M347.274,503h-12.136C339.114,504.179,343.808,504.107,347.274,503z"/>
                            <path fill="#050814" d="M297.824,503h-11.667C289.485,504.029,293.954,504.083,297.824,503z"/>
                            <path fill="#050814" d="M330.467,503h-27.682c-0.425,0.354-0.882,0.687-1.362,1h30.381
				C331.332,503.686,330.881,503.354,330.467,503z"/>
                            <path fill="#050814" d="M327.619,496.737c1.019,3.181,3.984,5.215,7.519,6.263h12.136c0.727-0.232,1.402-0.508,2.002-0.829
				c-0.028-0.585-0.626-0.85-0.933-1.129c0.557-0.612,1.116-1.225,1.673-1.837c-0.667-1.728-0.388-2.034,1.326-2.995
				c-0.612-0.557-0.654-1.435-1.559-1.979c2.271-1.572,3.917-3.995,5.869-6.139c-5.042-1.229-11.492-1.221-16.465-0.987
				c-5.558,0.262-15.491,1.021-18.132-5.306c4.791,2.12,7.936,6.664,13.662,3.757c3.721-1.934,8.712-8.031,9.704-11.89
				c-10.294-0.689-15.925,4.266-21.753-7.481c5.207,4.74,14.106,6.961,17.845-0.838c-2.048,0.097-4.124-0.393-5.933-1.479
				c3.524,0.128,6.618-2.657,6.746-6.182c-3.707,2.228-17.78,8.458-19.906,0.641c2.437,1.938,5.892,0.604,7.551-1.525
				c-3.3-1.604-5.5-4.728-7.113-7.876c2.226,3.707,8.078,3.432,11.838,2.376c-0.625-0.85-0.68-2.02-1.014-2.884
				c0.292-0.015,0.598,0.265,1.184,0.238c-3.314-1.897-7.465-2.876-9.398-6.597c3.273,1.02,9.192,2.208,11.702-0.548
				c-3.232-0.143-6.615-3.502-10.181-4.507c-2.374-0.529-4.895-0.898-7.354-1.453v-0.775c6.059,0.159,13.215,1.691,14.897-5.748
				c-3.776,0.763-7.817,2.125-11.423,0.242c-7.506-3.753,1.645-2.423,3.276-5.138c-2.381-0.768-5.069-1.813-5.764-4.127
				c3.021,1.91,5.878,0.311,7.803-2.419c-3.001,0.692-6.95-0.894-8.52-3.959c2.501-0.141,5.646,0.741,7.563,1.278
				c-6.186-1.827-7.321-5.567-8.455-10.956c-0.012-0.069-0.025-0.137-0.037-0.205l0.33,0.791c0-1.69-0.814-5.007-2.703-3.688
				c-1.889-1.319-2.703,1.997-2.703,3.688l0.33-0.792c-0.013,0.068-0.025,0.137-0.037,0.206c-1.135,5.389-2.27,9.129-8.456,10.956
				c1.947-0.546,5.158-1.447,7.676-1.273c-1.758,2.584-5.049,4.236-7.723,3.665c1.969,2.697,4.852,4.249,7.841,2.289
				c-0.656,2.324-3.326,3.415-5.694,4.223c1.172,1.88,5.987,1.72,6.232,2.78v0.178c-0.098,0.452-0.907,1.102-2.87,2.124
				c-3.575,1.942-7.637,0.648-11.425-0.052c2.084,8.56,7.844,5.048,14.275,5.534c-3.256,1.074-3.356,1.535-6.603,2.315
				c-3.548,1.064-6.875,4.48-10.102,4.676c2.554,2.714,8.454,1.428,11.708,0.354c-1.872,3.753-6.004,4.799-9.287,6.752
				c0.586,0.017,0.887-0.267,1.18-0.258c-0.32,0.869-0.355,2.04-0.967,2.9c3.779,0.993,9.633,1.171,11.798-2.573
				c-1.561,3.176-3.708,6.334-6.981,7.993c1.695,2.102,5.172,3.38,7.576,1.401c-1.995,7.851-16.17,1.854-19.914-0.31
				c0.187,3.521,3.327,6.253,6.849,6.066c-1.791,1.118-3.858,1.642-5.908,1.579c3.868,7.735,12.729,5.366,17.857,0.54
				c-5.632,11.843-11.346,6.981-21.626,7.843c1.056,3.842,6.147,9.855,9.9,11.727c5.775,2.812,8.844-1.783,13.599-3.983
				c-2.536,6.369-12.481,5.775-18.042,5.607c-4.977-0.15-11.425-0.052-16.445,1.261c1.987,2.11,3.671,4.506,5.969,6.041
				c-0.895,0.559-0.922,1.437-1.525,2.004c1.73,0.932,2.014,1.233,1.375,2.972c0.568,0.604,1.136,1.206,1.703,1.81
				c-0.302,0.284-0.896,0.559-0.914,1.145c0.576,0.296,1.218,0.551,1.909,0.765h11.667c3.77-1.056,6.972-3.188,7.989-6.56
				c0.36,2.651-0.959,4.839-3.028,6.56h27.682C328.539,501.351,327.318,499.269,327.619,496.737z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#050814"
                                  d="M356.855,438.68c-0.163,0.047-0.327,0.094-0.497,0.138C356.51,438.776,356.679,438.729,356.855,438.68z"
                            />
                            <path fill="#050814" d="M356.981,438.645c-0.043,0.012-0.084,0.023-0.126,0.035C356.897,438.668,356.94,438.656,356.981,438.645z
				"/>
                            <path fill="#050814"
                                  d="M378.838,438.68c0.177,0.049,0.345,0.097,0.497,0.138C379.165,438.773,379.001,438.727,378.838,438.68z"
                            />
                            <path fill="#050814" d="M378.712,438.645c0.041,0.012,0.084,0.023,0.126,0.035C378.796,438.668,378.755,438.656,378.712,438.645z
				"/>
                            <path fill="#050814" d="M396.665,497.405c-10.294-0.689-15.925,4.266-21.754-7.481c5.207,4.74,14.106,6.961,17.846-0.838
				c-2.049,0.097-4.124-0.393-5.934-1.479c3.523,0.128,6.618-2.657,6.746-6.182c-3.707,2.228-17.779,8.458-19.906,0.641
				c2.437,1.938,5.893,0.604,7.551-1.525c-3.3-1.604-5.499-4.728-7.112-7.876c2.226,3.707,8.077,3.432,11.839,2.376
				c-0.626-0.85-0.681-2.02-1.015-2.884c0.292-0.015,0.599,0.265,1.184,0.238c-3.314-1.897-7.465-2.876-9.397-6.597
				c3.272,1.02,9.191,2.208,11.701-0.548c-3.231-0.143-6.614-3.502-10.181-4.507c-2.374-0.529-4.895-0.898-7.354-1.453v-0.775
				c6.059,0.159,13.216,1.691,14.897-5.748c-3.776,0.763-7.817,2.125-11.423,0.242c-7.506-3.753,1.645-2.423,3.276-5.138
				c-2.381-0.768-5.069-1.813-5.764-4.127c3.021,1.91,5.878,0.311,7.803-2.419c-3.001,0.692-6.95-0.894-8.52-3.959
				c2.501-0.141,5.646,0.741,7.563,1.278c-6.186-1.827-7.321-5.567-8.455-10.956c-0.012-0.069-0.025-0.137-0.037-0.205l0.33,0.791
				c0-1.69-0.814-5.007-2.703-3.688c-1.889-1.319-2.703,1.997-2.703,3.688l0.33-0.792c-0.013,0.068-0.025,0.137-0.037,0.206
				c-1.135,5.389-2.27,9.129-8.455,10.956c1.946-0.546,5.157-1.447,7.676-1.273c-1.758,2.584-5.049,4.236-7.723,3.665
				c1.969,2.697,4.852,4.249,7.841,2.289c-0.655,2.324-3.325,3.415-5.694,4.223c1.172,1.88,5.987,1.72,6.232,2.78v0.178
				c-0.098,0.452-0.906,1.102-2.869,2.124c-3.575,1.942-7.638,0.648-11.426-0.052c2.085,8.56,7.845,5.048,14.275,5.534
				c-3.256,1.074-3.355,1.535-6.603,2.315c-3.548,1.064-6.874,4.48-10.103,4.676c2.555,2.714,8.454,1.428,11.709,0.354
				c-1.872,3.753-6.005,4.799-9.287,6.752c0.586,0.017,0.887-0.267,1.18-0.258c-0.319,0.869-0.355,2.04-0.967,2.9
				c3.779,0.993,9.633,1.171,11.798-2.573c-1.562,3.176-3.708,6.334-6.981,7.993c1.695,2.102,5.172,3.38,7.576,1.401
				c-1.994,7.851-16.17,1.854-19.914-0.31c0.187,3.521,3.327,6.253,6.849,6.066c-1.791,1.118-3.858,1.642-5.908,1.579
				c3.868,7.735,12.729,5.366,17.857,0.54c-5.632,11.843-11.346,6.981-21.626,7.843c0.45,1.638,1.637,3.67,3.138,5.608h49.656
				C395.113,501.057,396.247,499.032,396.665,497.405z"/>
                            <path fill="#050814" d="M393.668,503h-49.656c0.261,0.337,0.532,0.671,0.811,1h48.068
				C393.157,503.671,393.418,503.337,393.668,503z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#090E24" d="M392.562,409.768c-0.163,0.047-0.327,0.094-0.497,0.138C392.216,409.864,392.385,409.816,392.562,409.768
				z"/>
                            <path fill="#090E24" d="M392.688,409.732c-0.043,0.012-0.084,0.023-0.126,0.035C392.604,409.756,392.646,409.744,392.688,409.732
				z"/>
                            <path fill="#090E24" d="M414.544,409.768c0.177,0.049,0.345,0.097,0.497,0.138C414.871,409.861,414.707,409.814,414.544,409.768z
				"/>
                            <path fill="#090E24" d="M414.418,409.732c0.041,0.012,0.084,0.023,0.126,0.035C414.502,409.756,414.461,409.744,414.418,409.732z
				"/>
                            <path fill="#090E24" d="M453.298,502.107c-3.803,0.178-6.769-0.562-10.851-0.077c-3.79,0.471-7.301,0.635-11.41,0.535
				c-5.293-0.338-16.309-3.926-15.468-11.002c2.404,7.51,15.65,8.647,21.657,5.434c-0.028-0.585-0.627-0.85-0.934-1.129
				c0.558-0.612,1.117-1.225,1.674-1.837c-0.667-1.728-0.388-2.034,1.326-2.995c-0.612-0.557-0.654-1.435-1.56-1.979
				c2.271-1.572,3.917-3.995,5.869-6.139c-5.042-1.229-11.491-1.221-16.466-0.987c-5.557,0.262-15.49,1.021-18.132-5.306
				c4.79,2.12,7.936,6.664,13.662,3.757c3.721-1.934,8.712-8.031,9.704-11.89c-10.294-0.689-15.925,4.266-21.754-7.481
				c5.207,4.74,14.106,6.961,17.846-0.838c-2.049,0.097-4.124-0.393-5.934-1.479c3.523,0.128,6.618-2.657,6.746-6.182
				c-3.707,2.228-17.779,8.458-19.906,0.641c2.437,1.938,5.893,0.604,7.551-1.525c-3.3-1.604-5.499-4.728-7.112-7.876
				c2.226,3.707,8.077,3.432,11.839,2.376c-0.626-0.85-0.681-2.02-1.015-2.884c0.292-0.015,0.599,0.265,1.184,0.238
				c-3.314-1.897-7.465-2.876-9.397-6.597c3.272,1.02,9.191,2.208,11.701-0.548c-3.231-0.143-6.614-3.502-10.181-4.507
				c-2.374-0.529-4.895-0.898-7.354-1.453v-0.775c6.059,0.159,13.216,1.691,14.897-5.748c-3.776,0.763-7.817,2.125-11.423,0.242
				c-7.506-3.753,1.645-2.423,3.276-5.138c-2.381-0.768-5.069-1.813-5.764-4.127c3.021,1.91,5.878,0.311,7.803-2.419
				c-3.001,0.692-6.95-0.894-8.52-3.959c2.501-0.141,5.646,0.741,7.563,1.278c-6.186-1.827-7.321-5.567-8.455-10.956
				c-0.012-0.069-0.025-0.137-0.037-0.205l0.33,0.791c0-1.69-0.814-5.007-2.703-3.688c-1.889-1.319-2.703,1.997-2.703,3.688
				l0.33-0.792c-0.013,0.068-0.025,0.137-0.037,0.206c-1.135,5.389-2.27,9.129-8.455,10.956c1.946-0.546,5.157-1.447,7.676-1.273
				c-1.758,2.584-5.049,4.236-7.723,3.665c1.969,2.697,4.852,4.249,7.841,2.289c-0.655,2.324-3.325,3.415-5.694,4.223
				c1.172,1.88,5.987,1.72,6.232,2.78v0.178c-0.098,0.452-0.906,1.102-2.869,2.124c-3.575,1.942-7.638,0.648-11.426-0.052
				c2.085,8.56,7.845,5.048,14.275,5.534c-3.256,1.074-3.355,1.535-6.603,2.315c-3.548,1.064-6.874,4.48-10.103,4.676
				c2.555,2.714,8.454,1.428,11.709,0.354c-1.872,3.753-6.005,4.799-9.287,6.752c0.586,0.017,0.887-0.267,1.18-0.258
				c-0.319,0.869-0.355,2.04-0.967,2.9c3.779,0.993,9.633,1.171,11.798-2.573c-1.562,3.176-3.708,6.334-6.981,7.993
				c1.695,2.102,5.172,3.38,7.576,1.401c-1.994,7.851-16.17,1.854-19.914-0.31c0.187,3.521,3.327,6.253,6.849,6.066
				c-1.791,1.118-3.858,1.642-5.908,1.579c3.868,7.735,12.729,5.366,17.857,0.54c-5.632,11.843-11.346,6.981-21.626,7.843
				c1.056,3.842,6.147,9.855,9.9,11.727c5.774,2.812,8.844-1.783,13.598-3.983c-2.535,6.369-12.48,5.775-18.042,5.607
				c-4.977-0.15-11.426-0.052-16.445,1.261c1.987,2.11,3.672,4.506,5.969,6.041c-0.895,0.559-0.922,1.437-1.524,2.004
				c1.729,0.932,2.014,1.233,1.375,2.972c0.567,0.604,1.136,1.206,1.703,1.81c-0.302,0.284-0.896,0.559-0.914,1.145
				c6.06,3.112,19.285,1.755,21.564-5.795c0.959,7.062-9.996,10.832-15.283,11.258c-4.106,0.17-7.619,0.062-11.416-0.345
				c-4.089-0.416-7.044,0.373-10.849,0.259c0.032,0.192,0.082,0.379,0.144,0.562h96.673
				C453.156,502.715,453.251,502.418,453.298,502.107z"/>
                            <path fill="#090E24" d="M453.032,503h-96.673c0.121,0.355,0.303,0.688,0.529,1h95.486
				C452.643,503.689,452.876,503.361,453.032,503z"/>
                        </g>
                    </g>
                    <path fill="#191F40"
                          d="M707.409,422.623c-0.163,0.047-0.327,0.094-0.497,0.138C707.063,422.72,707.232,422.672,707.409,422.623z"
                    />
                    <path fill="#191F40"
                          d="M707.535,422.588c-0.043,0.012-0.084,0.023-0.126,0.035C707.451,422.611,707.494,422.6,707.535,422.588z"/>
                    <path fill="#191F40" d="M720,408.59c-0.409-0.408-0.938-0.522-1.6-0.06c-1.889-1.319-2.703,1.997-2.703,3.688l0.33-0.792
		c-0.013,0.068-0.025,0.137-0.037,0.206c-1.135,5.389-2.27,9.129-8.455,10.956c1.946-0.546,5.157-1.447,7.676-1.273
		c-1.758,2.584-5.049,4.236-7.723,3.665c1.969,2.697,4.852,4.249,7.841,2.289c-0.655,2.324-3.325,3.415-5.694,4.223
		c1.172,1.88,5.987,1.72,6.232,2.78v0.178c-0.098,0.452-0.906,1.102-2.869,2.124c-3.575,1.942-7.638,0.648-11.426-0.052
		c2.085,8.56,7.845,5.048,14.275,5.534c-3.256,1.074-3.355,1.535-6.603,2.315c-3.548,1.064-6.874,4.48-10.103,4.676
		c2.555,2.714,8.454,1.428,11.709,0.354c-1.872,3.753-6.005,4.799-9.287,6.752c0.586,0.017,0.887-0.267,1.18-0.258
		c-0.319,0.869-0.355,2.04-0.967,2.9c3.779,0.993,9.633,1.171,11.798-2.573c-1.562,3.176-3.708,6.334-6.981,7.993
		c1.695,2.102,5.172,3.38,7.576,1.401c-1.994,7.851-16.17,1.854-19.914-0.31c0.187,3.521,3.327,6.253,6.849,6.066
		c-1.791,1.118-3.858,1.642-5.908,1.579c3.868,7.735,12.729,5.366,17.857,0.54c-5.632,11.843-11.346,6.981-21.626,7.843
		c1.056,3.842,6.147,9.855,9.9,11.727c5.774,2.812,8.844-1.783,13.598-3.983c-2.535,6.369-12.48,5.775-18.042,5.607
		c-4.977-0.15-11.426-0.052-16.445,1.261c1.987,2.11,3.672,4.506,5.969,6.041c-0.453,0.283-0.684,0.647-0.879,1.013H720V408.59z"/>
                    <path fill="#191F40"
                          d="M720,503h-34.472c-0.19,0.355-0.349,0.711-0.646,0.991c0.006,0.003,0.01,0.006,0.016,0.009H720V503z"/>
                    <g>
                        <path fill="#191F40" d="M602.304,423.768c-0.163,0.047-0.327,0.094-0.497,0.138C601.958,423.864,602.127,423.816,602.304,423.768z
			"/>
                        <path fill="#191F40"
                              d="M602.43,423.732c-0.043,0.012-0.084,0.023-0.126,0.035C602.346,423.756,602.389,423.744,602.43,423.732z"
                        />
                        <path fill="#191F40"
                              d="M624.286,423.768c0.177,0.049,0.345,0.097,0.497,0.138C624.613,423.861,624.449,423.814,624.286,423.768z"
                        />
                        <path fill="#191F40"
                              d="M624.16,423.732c0.041,0.012,0.084,0.023,0.126,0.035C624.244,423.756,624.203,423.744,624.16,423.732z"/>
                        <path fill="#191F40" d="M647.476,503.058c0.026-0.019,0.05-0.039,0.075-0.058h-66.428c0.061,0.042,0.117,0.091,0.179,0.132
			c-0.393,0.245-0.616,0.553-0.796,0.868h67.834C648.145,503.657,647.91,503.318,647.476,503.058z"/>
                        <path fill="#191F40" d="M653.345,496.919c-5.042-1.229-11.491-1.221-16.466-0.987c-5.557,0.262-15.49,1.021-18.132-5.306
			c4.79,2.12,7.936,6.664,13.662,3.757c3.721-1.934,8.712-8.031,9.704-11.89c-10.294-0.689-15.925,4.266-21.754-7.481
			c5.207,4.74,14.106,6.961,17.846-0.838c-2.049,0.097-4.124-0.393-5.934-1.479c3.523,0.128,6.618-2.657,6.746-6.182
			c-3.707,2.228-17.779,8.458-19.906,0.641c2.437,1.938,5.893,0.604,7.551-1.525c-3.3-1.604-5.499-4.728-7.112-7.876
			c2.226,3.707,8.077,3.432,11.839,2.376c-0.626-0.85-0.681-2.02-1.015-2.884c0.292-0.015,0.599,0.265,1.184,0.238
			c-3.314-1.897-7.465-2.876-9.397-6.597c3.272,1.02,9.191,2.208,11.701-0.548c-3.231-0.143-6.614-3.502-10.181-4.507
			c-2.374-0.529-4.895-0.898-7.354-1.453v-0.775c6.059,0.159,13.216,1.691,14.897-5.748c-3.776,0.763-7.817,2.125-11.423,0.242
			c-7.506-3.753,1.645-2.423,3.276-5.138c-2.381-0.768-5.069-1.813-5.764-4.127c3.021,1.91,5.878,0.311,7.803-2.419
			c-3.001,0.692-6.95-0.894-8.52-3.959c2.501-0.141,5.646,0.741,7.563,1.278c-6.186-1.827-7.321-5.567-8.455-10.956
			c-0.012-0.069-0.025-0.137-0.037-0.205l0.33,0.791c0-1.69-0.814-5.007-2.703-3.688c-1.889-1.319-2.703,1.997-2.703,3.688
			l0.33-0.792c-0.013,0.068-0.025,0.137-0.037,0.206c-1.135,5.389-2.27,9.129-8.455,10.956c1.946-0.546,5.157-1.447,7.676-1.273
			c-1.758,2.584-5.049,4.236-7.723,3.665c1.969,2.697,4.852,4.249,7.841,2.289c-0.655,2.324-3.325,3.415-5.694,4.223
			c1.172,1.88,5.987,1.72,6.232,2.78v0.178c-0.098,0.452-0.906,1.102-2.869,2.124c-3.575,1.942-7.638,0.648-11.426-0.052
			c2.085,8.56,7.845,5.048,14.275,5.534c-3.256,1.074-3.355,1.535-6.603,2.315c-3.548,1.064-6.874,4.48-10.103,4.676
			c2.555,2.714,8.454,1.428,11.709,0.354c-1.872,3.753-6.005,4.799-9.287,6.752c0.586,0.017,0.887-0.267,1.18-0.258
			c-0.319,0.869-0.355,2.04-0.967,2.9c3.779,0.993,9.633,1.171,11.798-2.573c-1.562,3.176-3.708,6.334-6.981,7.993
			c1.695,2.102,5.172,3.38,7.576,1.401c-1.994,7.851-16.17,1.854-19.914-0.31c0.187,3.521,3.327,6.253,6.849,6.066
			c-1.791,1.118-3.858,1.642-5.908,1.579c3.868,7.735,12.729,5.366,17.857,0.54c-5.632,11.843-11.346,6.981-21.626,7.843
			c1.056,3.842,6.147,9.855,9.9,11.727c5.774,2.812,8.844-1.783,13.598-3.983c-2.535,6.369-12.48,5.775-18.042,5.607
			c-4.977-0.15-11.426-0.052-16.445,1.261c1.934,2.054,3.586,4.371,5.79,5.909h66.428
			C649.781,501.427,651.415,499.038,653.345,496.919z"/>
                    </g>
                    <g>
                        <path fill="#101429" d="M426.834,403.466c-0.163,0.047-0.327,0.094-0.497,0.138C426.488,403.562,426.657,403.515,426.834,403.466z
			"/>
                        <path fill="#101429"
                              d="M426.96,403.431c-0.043,0.012-0.084,0.023-0.126,0.035C426.876,403.454,426.919,403.442,426.96,403.431z"
                        />
                        <path fill="#101429"
                              d="M448.816,403.466c0.177,0.049,0.345,0.097,0.497,0.138C449.144,403.56,448.979,403.513,448.816,403.466z"
                        />
                        <path fill="#101429"
                              d="M448.69,403.431c0.041,0.012,0.084,0.023,0.126,0.035C448.774,403.454,448.733,403.442,448.69,403.431z"/>
                        <path fill="#101429" d="M397.758,508.082c-0.004-0.002-0.008-0.005-0.012-0.007C397.768,508.099,397.768,508.096,397.758,508.082z
			"/>
                        <path fill="#101429" d="M423.429,503h-31.508c-0.06,0.07-0.115,0.145-0.181,0.206c0.554,0.298,1.177,0.532,1.771,0.794h28.959
			C422.801,503.681,423.123,503.351,423.429,503z"/>
                        <path fill="#101429" d="M486.234,503h-31.687c0.304,0.351,0.624,0.682,0.953,1h28.637C484.807,503.64,485.557,503.353,486.234,503
			z"/>
                        <path fill="#101429" d="M454.523,503h-30.997c-0.189,0.344-0.383,0.676-0.578,1h32.164
			C454.914,503.677,454.717,503.344,454.523,503z"/>
                        <path fill="#101429" d="M454.481,502.929c0.021,0.024,0.045,0.047,0.066,0.071h31.687c0.067-0.035,0.138-0.068,0.203-0.105
			c-0.918-0.836-1.293-2.578-1.934-3.721c1.728-0.667,2.843-1.892,3.066-3.368c-3.803,0.178-6.769-0.562-10.851-0.077
			c-3.79,0.471-7.301,0.635-11.41,0.535c-5.293-0.338-16.309-3.926-15.468-11.002c2.404,7.51,15.65,8.647,21.657,5.434
			c-0.028-0.585-0.627-0.85-0.934-1.129c0.558-0.612,1.117-1.225,1.674-1.837c-0.667-1.728-0.388-2.034,1.326-2.995
			c-0.612-0.557-0.654-1.435-1.56-1.979c2.271-1.572,3.917-3.995,5.869-6.139c-5.042-1.229-11.491-1.221-16.466-0.987
			c-5.557,0.262-15.49,1.021-18.132-5.306c4.79,2.12,7.936,6.664,13.662,3.757c3.721-1.934,8.712-8.031,9.704-11.89
			c-10.294-0.689-15.925,4.266-21.754-7.481c5.207,4.74,14.106,6.961,17.846-0.838c-2.049,0.097-4.124-0.393-5.934-1.479
			c3.523,0.128,6.618-2.657,6.746-6.182c-3.707,2.228-17.779,8.458-19.906,0.641c2.437,1.938,5.893,0.604,7.551-1.525
			c-3.3-1.604-5.499-4.728-7.112-7.876c2.226,3.707,8.077,3.432,11.839,2.376c-0.626-0.85-0.681-2.02-1.015-2.884
			c0.292-0.015,0.599,0.265,1.184,0.238c-3.314-1.897-7.465-2.876-9.397-6.597c3.272,1.02,9.191,2.208,11.701-0.548
			c-3.231-0.143-6.614-3.502-10.181-4.507c-2.374-0.529-4.895-0.898-7.354-1.453v-0.775c6.059,0.159,13.216,1.691,14.897-5.748
			c-3.776,0.763-7.817,2.125-11.423,0.242c-7.506-3.753,1.645-2.423,3.276-5.138c-2.381-0.768-5.069-1.813-5.764-4.127
			c3.021,1.91,5.878,0.311,7.803-2.419c-3.001,0.692-6.95-0.894-8.52-3.959c2.501-0.141,5.646,0.741,7.563,1.278
			c-6.186-1.827-7.321-5.567-8.455-10.956c-0.012-0.069-0.025-0.137-0.037-0.205l0.33,0.791c0-1.69-0.814-5.007-2.703-3.688
			c-1.889-1.319-2.703,1.997-2.703,3.688l0.33-0.792c-0.013,0.068-0.025,0.137-0.037,0.206c-1.135,5.389-2.27,9.129-8.455,10.956
			c1.946-0.546,5.157-1.447,7.676-1.273c-1.758,2.584-5.049,4.236-7.723,3.665c1.969,2.697,4.852,4.249,7.841,2.289
			c-0.655,2.324-3.325,3.415-5.694,4.223c1.172,1.88,5.987,1.72,6.232,2.78v0.178c-0.098,0.452-0.906,1.102-2.869,2.124
			c-3.575,1.942-7.638,0.648-11.426-0.052c2.085,8.56,7.845,5.048,14.275,5.534c-3.256,1.074-3.355,1.535-6.603,2.315
			c-3.548,1.064-6.874,4.48-10.103,4.676c2.555,2.714,8.454,1.428,11.709,0.354c-1.872,3.753-6.005,4.799-9.287,6.752
			c0.586,0.017,0.887-0.267,1.18-0.258c-0.319,0.869-0.355,2.04-0.967,2.9c3.779,0.993,9.633,1.171,11.798-2.573
			c-1.562,3.176-3.708,6.334-6.981,7.993c1.695,2.102,5.172,3.38,7.576,1.401c-1.994,7.851-16.17,1.854-19.914-0.31
			c0.187,3.521,3.327,6.253,6.849,6.066c-1.791,1.118-3.858,1.642-5.908,1.579c3.868,7.735,12.729,5.366,17.857,0.54
			c-5.632,11.843-11.346,6.981-21.626,7.843c1.056,3.842,6.147,9.855,9.9,11.727c5.774,2.812,8.844-1.783,13.598-3.983
			c-2.535,6.369-12.48,5.775-18.042,5.607c-4.977-0.15-11.426-0.052-16.445,1.261c1.987,2.11,3.672,4.506,5.969,6.041
			c-0.895,0.559-0.922,1.437-1.524,2.004c1.729,0.932,2.014,1.233,1.375,2.972c0.567,0.604,1.136,1.206,1.703,1.81
			c-0.302,0.284-0.896,0.559-0.914,1.145c6.06,3.112,19.285,1.755,21.564-5.795c0.959,7.062-9.996,10.832-15.283,11.258
			c-4.106,0.17-7.619,0.062-11.416-0.345c-4.089-0.416-7.044,0.373-10.849,0.259c0.248,1.472,1.385,2.679,3.123,3.317
			c-0.576,1.069-0.922,2.644-1.69,3.546h31.508c0.086-0.1,0.179-0.191,0.263-0.293c-0.054,0.101-0.11,0.194-0.165,0.293h30.997
			C454.51,502.976,454.495,502.953,454.481,502.929z"/>
                        <path fill="#101429" d="M480.514,507.863c-0.003,0.002-0.007,0.004-0.012,0.007C480.493,507.885,480.491,507.888,480.514,507.863z
			"/>
                    </g>
                    <g>
                        <g>
                            <path fill="#050814" d="M109.283,284.474c-0.223,0.063-0.446,0.128-0.679,0.188C108.811,284.605,109.042,284.54,109.283,284.474z
				"/>
                            <path fill="#050814" d="M109.454,284.426c-0.059,0.016-0.114,0.031-0.171,0.048C109.339,284.457,109.398,284.441,109.454,284.426
				z"/>
                            <path fill="#050814" d="M139.251,284.474c0.241,0.066,0.471,0.132,0.679,0.188C139.697,284.602,139.474,284.537,139.251,284.474z
				"/>
                            <path fill="#050814"
                                  d="M139.08,284.426c0.056,0.016,0.115,0.031,0.171,0.048C139.193,284.457,139.138,284.441,139.08,284.426z"
                            />
                            <path fill="#050814"
                                  d="M69.643,427.097c-0.005-0.002-0.012-0.006-0.016-0.009C69.657,427.12,69.656,427.116,69.643,427.097z"/>
                            <path fill="#050814" d="M190.007,502.388c3.191-0.149,7.179-0.336,10.295-2.081c-1.059-5.546-13.043-5.384-17.885-6.355
				c-2.829-0.667-7.235-0.86-9.304-2.36c-4.974-3.766-2.163-3.498-0.411-8.775c-8.999-4.373-28.598-4.653-29.614-17.796
				c9.535-1.246,23.637,9.683,32.218,13.677c5.733,2.928,10.631,5.098,16.003,8.842c7.84,5.228,8.868,1.584,2.929-5.733
				c4.785-0.225,9.914-1.664,14.245-3.065c-0.417-0.381-0.817-0.362-1.234-0.742c1.159-0.854,2.679-2.524,4.255-2.997
				c-5.678-1.731-10.706-6.692-15.279-10.475c-8.731-7.186-0.699-6.362,4.585-13.006c-9.225-9.16-19.485,2.112-30.441-1.37
				c0.361-0.816,0.723-1.633,1.104-2.051c-1.689-1.918-2.979-3.856-4.667-5.776c5.221,0.554,9.57-0.447,14.225-3.464
				c-13.729-2.954-25.767-3.987-34.057-18.787c5.92,6.917,15.624,9.26,23.999,8.865c4.001,0.212,8.756-0.41,11.476-2.129
				c0.16-0.231,3.068-3.78,3.419-4.165c1.139-1.252,3.115-1.744,4.672-2.618c-1.251-1.139-1.763-3.515-2.636-5.072
				c2.355-0.909,3.876-2.578,4.181-4.592c-5.184,0.242-9.228-0.767-14.793-0.104c-5.166,0.642-9.952,0.865-15.555,0.729
				c-7.215-0.461-22.234-5.353-21.087-14.999c3.278,10.237,21.336,11.789,29.525,7.407c-0.039-0.798-0.854-1.158-1.272-1.539
				c0.759-0.835,1.522-1.669,2.281-2.504c-0.909-2.355-0.528-2.773,1.807-4.083c-0.834-0.76-0.891-1.956-2.125-2.698
				c3.096-2.143,5.341-5.446,8.001-8.368c-6.874-1.677-15.667-1.664-22.447-1.347c-7.577,0.357-21.118,1.392-24.72-7.232
				c6.531,2.89,10.818,9.085,18.625,5.121c5.073-2.636,11.878-10.949,13.23-16.209c-14.034-0.939-21.71,5.815-29.657-10.199
				c7.098,6.462,19.231,9.489,24.328-1.143c-2.792,0.132-5.622-0.535-8.088-2.017c4.804,0.174,9.022-3.623,9.197-8.428
				c-5.053,3.037-24.239,11.531-27.138,0.873c3.322,2.643,8.033,0.823,10.295-2.079c-4.5-2.188-7.498-6.445-9.697-10.737
				c3.035,5.054,11.012,4.678,16.14,3.239c-0.853-1.158-0.927-2.754-1.383-3.932c0.399-0.021,0.815,0.36,1.614,0.324
				c-4.519-2.586-10.177-3.92-12.812-8.993c4.462,1.391,12.531,3.011,15.954-0.746c-4.406-0.194-9.018-4.774-13.88-6.145
				c-3.237-0.722-6.673-1.225-10.026-1.981v-1.057c8.26,0.217,18.017,2.306,20.309-7.837c-5.148,1.04-10.657,2.897-15.573,0.331
				c-10.232-5.117,2.243-3.304,4.467-7.005c-3.246-1.046-6.911-2.472-7.857-5.626c4.119,2.604,8.013,0.423,10.637-3.298
				c-4.091,0.944-9.475-1.218-11.615-5.397c3.41-0.191,7.697,1.011,10.312,1.743c-8.434-2.491-9.981-7.59-11.527-14.937
				c-0.016-0.095-0.034-0.187-0.051-0.279l0.449,1.078c0-2.305-1.109-6.826-3.684-5.027c-2.575-1.799-3.686,2.723-3.686,5.027
				l0.45-1.08c-0.018,0.094-0.035,0.187-0.051,0.281c-1.547,7.347-3.094,12.445-11.527,14.937c2.654-0.744,7.031-1.974,10.465-1.736
				c-2.397,3.522-6.884,5.775-10.528,4.996c2.685,3.678,6.615,5.793,10.689,3.121c-0.894,3.169-4.534,4.656-7.762,5.757
				c1.598,2.562,8.162,2.345,8.497,3.79v0.242c-0.133,0.617-1.236,1.502-3.913,2.896c-4.873,2.647-10.412,0.884-15.575-0.071
				c2.842,11.67,10.694,6.882,19.462,7.545c-4.439,1.465-4.576,2.093-9.002,3.157c-4.837,1.451-9.372,6.107-13.772,6.374
				c3.481,3.7,11.525,1.946,15.962,0.482c-2.552,5.116-8.186,6.542-12.661,9.204c0.799,0.023,1.209-0.363,1.609-0.351
				c-0.436,1.185-0.485,2.78-1.319,3.954c5.152,1.354,13.133,1.596,16.084-3.509c-2.128,4.33-5.054,8.636-9.517,10.897
				c2.311,2.865,7.051,4.607,10.328,1.91c-2.719,10.703-22.044,2.528-27.149-0.422c0.254,4.801,4.535,8.524,9.337,8.271
				c-2.442,1.524-5.26,2.238-8.054,2.152c5.273,10.546,17.354,7.316,24.344,0.736c-7.678,16.146-15.467,9.519-29.482,10.692
				c1.439,5.237,8.381,13.436,13.497,15.986c7.873,3.833,12.057-2.431,18.539-5.43c-3.458,8.683-17.016,7.873-24.598,7.645
				c-6.785-0.205-15.576-0.071-22.419,1.719c2.708,2.877,5.005,6.143,8.137,8.235c-1.22,0.762-1.256,1.958-2.079,2.732
				c2.358,1.27,2.745,1.681,1.875,4.051c0.774,0.823,1.549,1.645,2.322,2.467c-0.411,0.388-1.221,0.762-1.246,1.561
				c8.262,4.243,26.292,2.393,29.398-7.9c1.308,9.627-13.627,14.768-20.835,15.348c-5.599,0.232-10.387,0.086-15.563-0.47
				c-5.575-0.567-9.603,0.509-14.79,0.353c0.339,2.007,1.887,3.652,4.257,4.523c-0.847,1.57-1.318,3.954-2.551,5.114
				c1.571,0.846,3.554,1.307,4.716,2.539c0.356,0.38,3.324,3.88,3.488,4.108c2.747,1.674,7.512,2.216,11.507,1.938
				c8.381,0.253,18.042-2.251,23.848-9.265c-8.041,14.935-20.062,16.17-33.739,19.351c4.705,2.939,9.07,3.869,14.282,3.228
				c-1.657,1.948-2.914,3.907-4.571,5.854c0.387,0.412,0.763,1.222,1.138,2.033c-10.895,3.665-21.345-7.437-30.414,1.875
				c5.393,6.554,13.412,5.6,4.802,12.929c-4.511,3.856-9.458,8.901-15.104,10.727c1.584,0.448,3.133,2.093,4.306,2.926
				c-0.412,0.388-0.812,0.376-1.221,0.764c4.353,1.33,9.504,2.683,14.294,2.827c-5.815,7.415-4.728,11.042,3.023,5.685
				c5.31-3.834,10.171-6.084,15.854-9.107c8.513-4.137,22.432-15.3,31.986-14.212c-0.798,13.157-20.388,13.764-29.312,18.287
				c1.838,5.248,4.644,4.933-0.265,8.78c-2.045,1.535-6.445,1.802-9.263,2.516c-4.826,1.051-16.811,1.089-17.777,6.652
				c3.145,1.693,7.135,1.813,10.328,1.91c-0.076,0.071-0.177,0.14-0.278,0.208h39.27c4.663-3.414,10.12-6.552,13.915-6.199
				c-0.225,0.97-0.499,3.652-0.444,6.199h7.828c1.337-1.959,2.37-3.887,2.558-4.7c0.133-0.418,0.251-0.851,0.36-1.289
				c0.155,0.665,0.333,1.313,0.543,1.934c0.181,0.726,1.053,2.336,2.217,4.056h8.243h53.705
				C190.748,502.876,190.287,502.642,190.007,502.388z"/>
                            <path fill="#050814" d="M182.464,426.799c-0.005,0.003-0.01,0.005-0.016,0.009C182.436,426.828,182.434,426.832,182.464,426.799z
				"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#050814" d="M214.981,333.598c-0.223,0.063-0.446,0.128-0.679,0.188C214.509,333.729,214.74,333.664,214.981,333.598z
				"/>
                            <path fill="#050814"
                                  d="M215.152,333.55c-0.059,0.016-0.114,0.031-0.171,0.048C215.037,333.581,215.097,333.565,215.152,333.55z"
                            />
                            <path fill="#050814" d="M244.949,333.598c0.241,0.066,0.471,0.132,0.679,0.188C245.396,333.726,245.172,333.661,244.949,333.598z
				"/>
                            <path fill="#050814"
                                  d="M244.778,333.55c0.056,0.016,0.115,0.031,0.171,0.048C244.892,333.581,244.836,333.565,244.778,333.55z"
                            />
                            <path fill="#050814" d="M175.341,476.221c-0.005-0.002-0.012-0.006-0.016-0.009C175.355,476.244,175.354,476.24,175.341,476.221z
				"/>
                            <path fill="#050814" d="M306.509,500.644c-9.225-9.16-19.485,2.112-30.441-1.37c0.361-0.816,0.723-1.633,1.104-2.051
				c-1.689-1.918-2.979-3.856-4.667-5.776c5.221,0.554,9.57-0.447,14.225-3.464c-13.729-2.954-25.767-3.987-34.057-18.787
				c5.92,6.917,15.624,9.26,23.999,8.865c4.001,0.212,8.756-0.41,11.476-2.129c0.16-0.231,3.068-3.78,3.419-4.165
				c1.139-1.252,3.115-1.744,4.672-2.618c-1.251-1.139-1.763-3.515-2.636-5.072c2.355-0.909,3.876-2.578,4.181-4.592
				c-5.184,0.242-9.228-0.767-14.793-0.104c-5.166,0.642-9.952,0.865-15.555,0.729c-7.215-0.461-22.234-5.353-21.087-14.999
				c3.278,10.237,21.336,11.789,29.525,7.407c-0.039-0.798-0.854-1.158-1.272-1.539c0.759-0.835,1.522-1.669,2.281-2.504
				c-0.909-2.355-0.528-2.773,1.807-4.083c-0.834-0.76-0.891-1.956-2.125-2.698c3.096-2.143,5.341-5.446,8.001-8.368
				c-6.874-1.677-15.667-1.664-22.447-1.347c-7.577,0.357-21.118,1.392-24.72-7.232c6.531,2.89,10.818,9.085,18.625,5.121
				c5.073-2.636,11.878-10.949,13.23-16.209c-14.034-0.939-21.71,5.815-29.657-10.199c7.098,6.462,19.231,9.489,24.328-1.143
				c-2.792,0.132-5.622-0.535-8.088-2.017c4.804,0.174,9.022-3.623,9.197-8.428c-5.053,3.037-24.239,11.531-27.138,0.873
				c3.322,2.643,8.033,0.823,10.295-2.079c-4.5-2.188-7.498-6.445-9.697-10.737c3.035,5.054,11.012,4.678,16.14,3.239
				c-0.853-1.158-0.927-2.754-1.383-3.932c0.399-0.021,0.815,0.36,1.614,0.324c-4.519-2.586-10.177-3.92-12.812-8.993
				c4.462,1.391,12.531,3.011,15.954-0.746c-4.406-0.194-9.018-4.774-13.88-6.145c-3.237-0.722-6.673-1.225-10.026-1.981v-1.057
				c8.26,0.217,18.017,2.306,20.309-7.837c-5.148,1.04-10.657,2.897-15.573,0.331c-10.232-5.117,2.243-3.304,4.467-7.005
				c-3.246-1.046-6.911-2.472-7.857-5.626c4.119,2.604,8.013,0.423,10.637-3.298c-4.091,0.944-9.475-1.218-11.615-5.397
				c3.41-0.191,7.697,1.011,10.312,1.743c-8.434-2.491-9.981-7.59-11.527-14.937c-0.016-0.095-0.034-0.187-0.051-0.279l0.449,1.078
				c0-2.305-1.109-6.826-3.684-5.027c-2.575-1.799-3.686,2.723-3.686,5.027l0.45-1.08c-0.018,0.094-0.035,0.187-0.051,0.281
				c-1.547,7.347-3.094,12.445-11.527,14.937c2.654-0.744,7.031-1.974,10.465-1.736c-2.397,3.522-6.884,5.775-10.528,4.996
				c2.685,3.678,6.615,5.793,10.689,3.121c-0.894,3.169-4.534,4.656-7.762,5.757c1.598,2.562,8.162,2.345,8.497,3.79v0.242
				c-0.133,0.617-1.236,1.502-3.913,2.896c-4.873,2.647-10.412,0.884-15.575-0.071c2.842,11.67,10.694,6.882,19.462,7.545
				c-4.439,1.465-4.576,2.093-9.002,3.157c-4.837,1.451-9.372,6.107-13.772,6.374c3.481,3.7,11.525,1.946,15.962,0.482
				c-2.552,5.116-8.186,6.542-12.661,9.204c0.799,0.023,1.209-0.363,1.609-0.351c-0.436,1.185-0.485,2.78-1.319,3.954
				c5.152,1.354,13.133,1.596,16.084-3.509c-2.128,4.33-5.054,8.636-9.517,10.897c2.311,2.865,7.051,4.607,10.328,1.91
				c-2.719,10.703-22.044,2.528-27.149-0.422c0.254,4.801,4.535,8.524,9.337,8.271c-2.442,1.524-5.26,2.238-8.054,2.152
				c5.273,10.546,17.354,7.316,24.344,0.736c-7.678,16.146-15.467,9.519-29.482,10.692c1.439,5.237,8.381,13.436,13.497,15.986
				c7.873,3.833,12.057-2.431,18.539-5.43c-3.458,8.683-17.016,7.873-24.598,7.645c-6.785-0.205-15.576-0.071-22.419,1.719
				c2.708,2.877,5.005,6.143,8.137,8.235c-1.22,0.762-1.256,1.958-2.079,2.732c2.358,1.27,2.745,1.681,1.875,4.051
				c0.774,0.823,1.549,1.645,2.322,2.467c-0.411,0.388-1.221,0.762-1.246,1.561c8.262,4.243,26.292,2.393,29.398-7.9
				c1.308,9.627-13.627,14.768-20.835,15.348c-5.599,0.232-10.387,0.086-15.563-0.47c-5.575-0.567-9.603,0.509-14.79,0.353
				c0.339,2.007,1.887,3.652,4.257,4.523c-0.847,1.57-1.318,3.954-2.551,5.114c1.571,0.846,3.554,1.307,4.716,2.539
				c0.356,0.38,3.324,3.88,3.488,4.108c2.747,1.674,7.512,2.216,11.507,1.938c8.381,0.253,18.042-2.251,23.848-9.265
				c-8.041,14.935-20.062,16.17-33.739,19.351c4.705,2.939,9.07,3.869,14.282,3.228c-1.657,1.948-2.914,3.907-4.571,5.854
				c0.387,0.412,0.763,1.222,1.138,2.033c-10.895,3.665-21.345-7.437-30.414,1.875c0.544,0.661,1.115,1.242,1.692,1.767h145.137
				C305.002,502.328,305.782,501.559,306.509,500.644z"/>
                            <path fill="#050814" d="M304.221,503H159.084c0.397,0.361,0.798,0.69,1.196,1h142.69
				C303.382,503.691,303.801,503.361,304.221,503z"/>
                            <path fill="#050814" d="M288.163,475.923c-0.005,0.003-0.01,0.005-0.016,0.009C288.134,475.952,288.132,475.956,288.163,475.923z
				"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path fill="#0B122E" d="M501.401,407.253h-1.654c0.163,2.816,0.124,5.632,0.222,8.447c0.138,5.218-0.413,10.436-0.413,15.405
				c0.138,22.111,0.963,44.475,1.375,66.586c0,1.818-0.045,3.56-0.107,5.309h1.312L501.401,407.253z"/>
                            <path fill="#0B122E"
                                  d="M502.136,503h-1.312c-0.012,0.332-0.026,0.667-0.039,1h1.359L502.136,503z"/>
                            <path fill="#0B122E" d="M500.931,497.691c-0.412-22.111-1.237-44.475-1.375-66.586c0-4.97,0.551-10.188,0.413-15.405
				c-0.098-2.815-0.059-5.631-0.222-8.447h-1.887L496.797,503h4.026C500.886,501.251,500.931,499.51,500.931,497.691z"/>
                            <path fill="#0B122E"
                                  d="M500.823,503h-4.026l-0.011,1h3.998C500.797,503.667,500.812,503.332,500.823,503z"/>
                            <polygon fill="#0B122E"
                                     points="501.144,475.534 502.855,482.499 502.169,483.741 500.655,479.638 			"/>
                            <polygon fill="#0B122E"
                                     points="497.271,490.516 495.56,497.48 496.246,498.723 497.759,494.62 			"/>
                        </g>
                        <g>
                            <polygon fill="#0B122E"
                                     points="496.822,490.39 489.642,496.133 489.376,497.714 496.433,492.63 			"/>
                            <path fill="#0B122E" d="M490.371,499.309c0.376-2.337-0.511-3.262-0.511-3.262s-3.993,3.213-10.583,6.953h10.046
				C489.84,501.621,490.204,500.346,490.371,499.309z"/>
                            <path fill="#0B122E" d="M489.323,503h-10.046c-0.58,0.33-1.187,0.664-1.807,1h11.457C489.068,503.661,489.2,503.327,489.323,503z
				"/>
                        </g>
                        <g>
                            <polygon fill="#0B122E"
                                     points="499.304,459.961 492.603,465.319 492.354,466.795 498.938,462.052 			"/>
                            <path fill="#0B122E" d="M435.054,483.176c0,0,13.612,1.27,29.811-3.607c16.196-4.877,27.943-14.329,27.943-14.329
				s0.826,0.864,0.475,3.044c-0.459,2.854-2.396,7.55-5.436,11.357c-5.363,6.717-9.073,12.195-13.835,13.474
				c-5.171,1.388-4.437-0.464-3.38-3.392c1.057-2.924,0.557-4.982-3.336-1.971c0,0-10.13,6.924-16.195,8.059
				c-6.468,1.211-9.279,0.163-9.767-1.608c-0.375-1.362,3.812-2.955,5.056-5.451c0,0,0.346-2.058-3.43-0.576
				c-3.776,1.48-8.292,0.412-10.654-1.558C431.442,485.896,430.15,483.035,435.054,483.176z"/>
                        </g>
                        <g>
                            <path fill="#0B122E" d="M500.917,507.796"/>
                        </g>
                        <path fill="#0B122E" d="M440.862,455.358c0,0,13.293,1.239,29.11-3.523c15.817-4.762,27.289-13.992,27.289-13.992
			s0.806,0.843,0.465,2.972c-0.449,2.787-2.342,7.373-5.311,11.092c-5.235,6.559-8.86,11.91-13.51,13.156
			c-5.05,1.356-4.332-0.452-3.301-3.31c1.032-2.856,0.544-4.868-3.258-1.926c0,0-9.893,6.761-15.816,7.87
			c-6.313,1.183-9.061,0.159-9.536-1.571c-0.367-1.33,3.721-2.886,4.938-5.324c0,0,0.338-2.009-3.35-0.563
			c-3.688,1.447-8.098,0.403-10.404-1.52C437.335,458.016,436.073,455.222,440.862,455.358z"/>
                        <path fill="#0B122E" d="M462.292,432.347c0,0,8.639,0.806,18.919-2.29c10.279-3.095,17.735-9.094,17.735-9.094
			s0.523,0.548,0.302,1.932c-0.292,1.811-1.521,4.792-3.452,7.208c-3.402,4.264-5.758,7.74-8.779,8.551
			c-3.281,0.881-2.815-0.294-2.145-2.151c0.67-1.856,0.354-3.163-2.117-1.251c0,0-6.43,4.395-10.279,5.114
			c-4.104,0.769-5.889,0.104-6.197-1.021c-0.238-0.864,2.418-1.875,3.208-3.459c0,0,0.22-1.307-2.177-0.366
			s-5.262,0.263-6.762-0.988C460.001,434.072,459.18,432.258,462.292,432.347z"/>
                        <path fill="#0B122E" d="M473.175,415.261c0,0,6.078,0.567,13.31-1.61c7.231-2.177,12.477-6.397,12.477-6.397
			s0.368,0.386,0.212,1.359c-0.204,1.273-1.07,3.371-2.428,5.071c-2.394,2.998-4.051,5.444-6.177,6.015
			c-2.308,0.619-1.98-0.207-1.509-1.514c0.473-1.306,0.249-2.226-1.489-0.88c0,0-4.522,3.091-7.231,3.598
			c-2.887,0.54-4.143,0.072-4.359-0.719c-0.168-0.607,1.701-1.319,2.257-2.434c0,0,0.155-0.918-1.531-0.258
			c-1.686,0.662-3.702,0.185-4.757-0.695C471.563,416.476,470.985,415.199,473.175,415.261z"/>
                        <path fill="#0B122E" d="M538.721,435.854c0,0-9.101,0.849-19.932-2.412c-10.828-3.262-18.682-9.58-18.682-9.58
			s-0.554,0.576-0.318,2.034c0.307,1.907,1.603,5.049,3.636,7.595c3.584,4.49,6.064,8.154,9.249,9.009
			c3.457,0.927,2.966-0.312,2.261-2.268c-0.707-1.956-0.373-3.332,2.229-1.318c0,0,6.772,4.628,10.828,5.388
			c4.323,0.81,6.203,0.108,6.53-1.076c0.25-0.91-2.549-1.976-3.381-3.644c0,0-0.231-1.377,2.293-0.387
			c2.524,0.991,5.543,0.276,7.123-1.041C541.135,437.672,541.999,435.76,538.721,435.854z"/>
                        <path fill="#0B122E" d="M529.165,417.081c0,0-7.016,0.654-15.363-1.859c-8.348-2.515-14.401-7.384-14.401-7.384
			s-0.427,0.443-0.245,1.567c0.235,1.471,1.234,3.892,2.803,5.854c2.763,3.462,4.675,6.286,7.129,6.944
			c2.665,0.716,2.287-0.238,1.742-1.746c-0.544-1.51-0.287-2.57,1.719-1.018c0,0,5.221,3.568,8.348,4.153
			c3.333,0.624,4.781,0.084,5.033-0.83c0.193-0.701-1.965-1.522-2.605-2.809c0,0-0.179-1.061,1.768-0.298
			c1.945,0.764,4.273,0.213,5.491-0.803C531.026,418.483,531.692,417.009,529.165,417.081z"/>
                        <path fill="#0B122E" d="M560.427,482.884c0,0-14.051,1.31-30.771-3.724c-16.72-5.035-28.847-14.791-28.847-14.791
			s-0.852,0.892-0.49,3.141c0.474,2.945,2.475,7.795,5.613,11.726c5.534,6.933,9.364,12.589,14.28,13.907
			c5.337,1.434,4.579-0.479,3.488-3.499c-1.09-3.02-0.573-5.146,3.444-2.036c0,0,10.456,7.147,16.717,8.318
			c6.676,1.251,9.579,0.169,10.082-1.661c0.387-1.405-3.934-3.05-5.219-5.626c0,0-0.358-2.123,3.54-0.596
			c3.897,1.528,8.56,0.426,10.999-1.608C564.154,485.692,565.489,482.739,560.427,482.884z"/>
                        <path fill="#0B122E" d="M552.185,455.184c0,0-12.292,1.146-26.919-3.259c-14.627-4.405-25.235-12.939-25.235-12.939
			s-0.744,0.78-0.429,2.748c0.415,2.576,2.165,6.819,4.91,10.258c4.843,6.065,8.192,11.013,12.493,12.166
			c4.669,1.253,4.006-0.419,3.053-3.061c-0.954-2.642-0.503-4.502,3.012-1.782c0,0,9.147,6.252,14.625,7.277
			c5.84,1.095,8.38,0.147,8.818-1.453c0.34-1.23-3.44-2.668-4.564-4.922c0,0-0.312-1.858,3.097-0.521
			c3.41,1.337,7.487,0.372,9.622-1.407C555.446,457.64,556.613,455.057,552.185,455.184z"/>
                        <path fill="#0B122E" d="M500.114,486.518c0,0-0.988,1.033-0.569,3.643c0.521,3.231,2.64,8.428,5.947,12.84h25.953
			C513.161,497.01,500.114,486.518,500.114,486.518z"/>
                        <path fill="#0B122E" d="M533.567,503.67c-0.716-0.216-1.421-0.44-2.122-0.67h-25.953c0.188,0.252,0.366,0.512,0.562,0.758
			c0.065,0.082,0.127,0.161,0.192,0.242h28.455C534.324,503.891,533.947,503.784,533.567,503.67z"/>
                    </g>
                    <g>
                        <g>
                            <path fill="#0B1330" d="M561.717,427.249h-1.654c0.163,2.816,0.124,5.632,0.222,8.447c0.138,5.218-0.413,10.436-0.413,15.405
				c0.107,17.227,0.63,34.604,1.052,51.898h1.375L561.717,427.249z"/>
                            <path fill="#0B1330"
                                  d="M562.298,503h-1.375c0.008,0.334,0.014,0.666,0.022,1h1.36L562.298,503z"/>
                            <path fill="#0B1330" d="M559.871,451.102c0-4.97,0.551-10.188,0.413-15.405c-0.098-2.815-0.059-5.631-0.222-8.447h-1.887
				L557.334,503h3.589C560.501,485.706,559.979,468.328,559.871,451.102z"/>
                            <path fill="#0B1330"
                                  d="M560.923,503h-3.589l-0.011,1h3.622C560.937,503.666,560.931,503.334,560.923,503z"/>
                            <polygon fill="#0B1330"
                                     points="563.171,502.495 561.459,495.53 560.971,499.634 562.213,503 562.892,503 			"/>
                            <polygon fill="#0B1330" points="562.892,503 562.213,503 562.484,503.737 			"/>
                        </g>
                        <g>
                            <polygon fill="#0B1330"
                                     points="559.619,479.957 552.918,485.315 552.67,486.791 559.254,482.048 			"/>
                            <path fill="#0B1330" d="M548.162,499.637c3.039-3.808,4.977-8.504,5.436-11.357c0.352-2.18-0.475-3.044-0.475-3.044
				s-11.747,9.452-27.943,14.329c-6.782,2.042-13.105,3.004-18.172,3.436h38.502C546.354,501.925,547.232,500.802,548.162,499.637z"
                            />
                            <path fill="#0B1330" d="M545.51,503h-38.502c-7.034,0.599-11.639,0.172-11.639,0.172c-1.828-0.053-2.793,0.312-3.242,0.828
				h52.594C544.98,503.672,545.243,503.339,545.51,503z"/>
                        </g>
                        <path fill="#0B1330" d="M501.178,475.354c0,0,13.293,1.239,29.11-3.523c15.817-4.762,27.289-13.992,27.289-13.992
			s0.806,0.843,0.465,2.972c-0.449,2.787-2.342,7.373-5.311,11.092c-5.235,6.559-8.86,11.91-13.51,13.156
			c-5.05,1.356-4.332-0.452-3.301-3.31c1.032-2.856,0.544-4.868-3.258-1.926c0,0-9.893,6.761-15.816,7.87
			c-6.313,1.183-9.061,0.159-9.536-1.571c-0.367-1.33,3.721-2.886,4.938-5.324c0,0,0.338-2.009-3.35-0.563
			c-3.688,1.447-8.098,0.403-10.404-1.52C497.65,478.012,496.389,475.218,501.178,475.354z"/>
                        <path fill="#0B1330" d="M522.607,452.343c0,0,8.639,0.806,18.919-2.29c10.279-3.095,17.735-9.094,17.735-9.094
			s0.523,0.548,0.302,1.932c-0.292,1.811-1.521,4.792-3.452,7.208c-3.402,4.264-5.758,7.74-8.779,8.551
			c-3.281,0.881-2.815-0.294-2.145-2.151c0.67-1.856,0.354-3.163-2.117-1.251c0,0-6.43,4.395-10.279,5.114
			c-4.104,0.769-5.889,0.104-6.197-1.021c-0.238-0.864,2.418-1.875,3.208-3.459c0,0,0.22-1.307-2.177-0.366
			s-5.262,0.263-6.762-0.988C520.316,454.068,519.495,452.254,522.607,452.343z"/>
                        <path fill="#0B1330" d="M533.49,435.257c0,0,6.078,0.567,13.31-1.61c7.231-2.177,12.477-6.397,12.477-6.397
			s0.368,0.386,0.212,1.359c-0.204,1.273-1.07,3.371-2.428,5.071c-2.394,2.998-4.051,5.444-6.177,6.015
			c-2.308,0.619-1.98-0.207-1.509-1.514c0.473-1.306,0.249-2.226-1.489-0.88c0,0-4.522,3.091-7.231,3.598
			c-2.887,0.54-4.143,0.072-4.359-0.719c-0.168-0.607,1.701-1.319,2.257-2.434c0,0,0.155-0.918-1.531-0.258
			c-1.686,0.662-3.702,0.185-4.757-0.695C531.879,436.472,531.301,435.195,533.49,435.257z"/>
                        <path fill="#0B1330" d="M599.036,455.85c0,0-9.101,0.849-19.932-2.412c-10.828-3.262-18.682-9.58-18.682-9.58
			s-0.554,0.576-0.318,2.034c0.307,1.907,1.603,5.049,3.636,7.595c3.584,4.49,6.064,8.154,9.249,9.009
			c3.457,0.927,2.966-0.312,2.261-2.268c-0.707-1.956-0.373-3.332,2.229-1.318c0,0,6.772,4.628,10.828,5.388
			c4.323,0.81,6.203,0.108,6.53-1.076c0.25-0.91-2.549-1.976-3.381-3.644c0,0-0.231-1.377,2.293-0.387
			c2.524,0.991,5.543,0.276,7.123-1.041C601.45,457.668,602.314,455.756,599.036,455.85z"/>
                        <path fill="#0B1330" d="M589.48,437.077c0,0-7.016,0.654-15.363-1.859c-8.348-2.515-14.401-7.384-14.401-7.384
			s-0.427,0.443-0.245,1.567c0.235,1.471,1.234,3.892,2.803,5.854c2.763,3.462,4.675,6.286,7.129,6.944
			c2.665,0.716,2.287-0.238,1.742-1.746c-0.544-1.51-0.287-2.57,1.719-1.018c0,0,5.221,3.568,8.348,4.153
			c3.333,0.624,4.781,0.084,5.033-0.83c0.193-0.701-1.965-1.522-2.605-2.809c0,0-0.179-1.061,1.768-0.298
			c1.945,0.764,4.273,0.213,5.491-0.803C591.342,438.479,592.008,437.005,589.48,437.077z"/>
                        <path fill="#0B1330" d="M589.972,499.156c-16.72-5.035-28.847-14.791-28.847-14.791s-0.852,0.892-0.49,3.141
			c0.474,2.945,2.475,7.795,5.613,11.726c1.045,1.309,2.028,2.571,2.971,3.769h44.75
			C608.283,502.844,599.57,502.046,589.972,499.156z"/>
                        <path fill="#0B1330"
                              d="M620.742,502.88c0,0-0.815,0.075-2.275,0.12h4.072C622.055,502.908,621.472,502.859,620.742,502.88z"/>
                        <path fill="#0B1330" d="M622.539,503h-4.072c-1.132,0.035-2.655,0.051-4.498,0h-44.75c0.267,0.339,0.529,0.672,0.79,1h54.245
			C624.018,503.559,623.504,503.183,622.539,503z"/>
                        <path fill="#0B1330" d="M612.5,475.18c0,0-12.292,1.146-26.919-3.259c-14.627-4.405-25.235-12.939-25.235-12.939
			s-0.744,0.78-0.429,2.748c0.415,2.576,2.165,6.819,4.91,10.258c4.843,6.065,8.192,11.013,12.493,12.166
			c4.669,1.253,4.006-0.419,3.053-3.061c-0.954-2.642-0.503-4.502,3.012-1.782c0,0,9.147,6.252,14.625,7.277
			c5.84,1.095,8.38,0.147,8.818-1.453c0.34-1.23-3.44-2.668-4.564-4.922c0,0-0.312-1.858,3.097-0.521
			c3.41,1.337,7.487,0.372,9.622-1.407C615.762,477.636,616.929,475.053,612.5,475.18z"/>
                    </g>
                    <g>
                        <g>
                            <path fill="#0B1330" d="M662.331,418.271h-1.654c0.163,2.816,0.124,5.632,0.222,8.447c0.138,5.218-0.413,10.436-0.413,15.405
				c0.126,20.211,0.823,40.629,1.257,60.876h1.238L662.331,418.271z"/>
                            <path fill="#0B1330"
                                  d="M662.98,503h-1.238c0.007,0.334,0.014,0.666,0.021,1h1.226L662.98,503z"/>
                            <path fill="#0B1330" d="M660.485,442.124c0-4.97,0.551-10.188,0.413-15.405c-0.098-2.815-0.059-5.631-0.222-8.447h-1.887
				L657.849,503h3.894C661.309,482.753,660.611,462.335,660.485,442.124z"/>
                            <path fill="#0B1330"
                                  d="M661.742,503h-3.894l-0.011,1h3.925C661.756,503.666,661.749,503.334,661.742,503z"/>
                            <polygon fill="#0B1330"
                                     points="662.073,486.553 663.785,493.518 663.099,494.76 661.585,490.656 			"/>
                            <polygon fill="#0B1330" points="658.201,501.534 657.841,503 658.375,503 			"/>
                            <polygon fill="#0B1330"
                                     points="658.375,503 657.841,503 657.595,504 658.494,504 			"/>
                        </g>
                        <g>
                            <polygon fill="#0B1330" points="657.752,501.408 655.762,503 657.475,503 			"/>
                            <polygon fill="#0B1330"
                                     points="657.362,503.648 657.475,503 655.762,503 654.512,504 656.874,504 			"/>
                        </g>
                        <g>
                            <polygon fill="#0B1330"
                                     points="660.233,470.979 653.532,476.338 653.284,477.813 659.868,473.07 			"/>
                            <path fill="#0B1330" d="M621.281,503H604.08c-0.465,0.354-0.885,0.686-1.21,1h16.514
				C620.027,503.673,620.664,503.339,621.281,503z"/>
                            <path fill="#0B1330"
                                  d="M637.51,503h-6.653c-0.072,0.402-0.067,0.738,0.044,1h4.414C636.065,503.76,636.797,503.437,637.51,503z"
                            />
                            <path fill="#0B1330"
                                  d="M630.9,504c0.299,0.699,1.393,0.844,4.041,0.133c0.127-0.034,0.248-0.093,0.373-0.133H630.9z"/>
                            <path fill="#0B1330" d="M648.776,490.659c3.039-3.808,4.977-8.504,5.436-11.357c0.352-2.18-0.475-3.044-0.475-3.044
				s-11.747,9.452-27.943,14.329c-16.198,4.877-29.811,3.607-29.811,3.607c-4.903-0.141-3.611,2.721-2.748,3.441
				c2.362,1.97,6.878,3.038,10.654,1.558c3.775-1.481,3.43,0.576,3.43,0.576c-0.642,1.286-2.062,2.332-3.239,3.23h17.201
				c3.818-2.094,6.944-4.229,6.944-4.229c3.893-3.012,4.393-0.953,3.336,1.971c-0.313,0.867-0.594,1.637-0.705,2.259h6.653
				C641.143,500.771,644.412,496.125,648.776,490.659z"/>
                        </g>
                        <path fill="#0B1330" d="M601.792,466.377c0,0,13.293,1.239,29.11-3.523c15.817-4.762,27.289-13.992,27.289-13.992
			s0.806,0.843,0.465,2.972c-0.449,2.787-2.342,7.373-5.311,11.092c-5.235,6.559-8.86,11.91-13.51,13.156
			c-5.05,1.356-4.332-0.452-3.301-3.31c1.032-2.856,0.544-4.868-3.258-1.926c0,0-9.893,6.761-15.816,7.87
			c-6.313,1.183-9.061,0.159-9.536-1.571c-0.367-1.33,3.721-2.886,4.938-5.324c0,0,0.338-2.009-3.35-0.563
			c-3.688,1.447-8.098,0.403-10.404-1.52C598.265,469.034,597.003,466.24,601.792,466.377z"/>
                        <path fill="#0B1330" d="M623.222,443.365c0,0,8.639,0.806,18.919-2.29c10.279-3.095,17.735-9.094,17.735-9.094
			s0.523,0.548,0.302,1.932c-0.292,1.811-1.521,4.792-3.452,7.208c-3.402,4.264-5.758,7.74-8.779,8.551
			c-3.281,0.881-2.815-0.294-2.145-2.151c0.67-1.856,0.354-3.163-2.117-1.251c0,0-6.43,4.395-10.279,5.114
			c-4.104,0.769-5.889,0.104-6.197-1.021c-0.238-0.864,2.418-1.875,3.208-3.459c0,0,0.22-1.307-2.177-0.366
			s-5.262,0.263-6.762-0.988C620.931,445.091,620.109,443.276,623.222,443.365z"/>
                        <path fill="#0B1330" d="M634.104,426.279c0,0,6.078,0.567,13.31-1.61c7.231-2.177,12.477-6.397,12.477-6.397
			s0.368,0.386,0.212,1.359c-0.204,1.273-1.07,3.371-2.428,5.071c-2.394,2.998-4.051,5.444-6.177,6.015
			c-2.308,0.619-1.98-0.207-1.509-1.514c0.473-1.306,0.249-2.226-1.489-0.88c0,0-4.522,3.091-7.231,3.598
			c-2.887,0.54-4.143,0.072-4.359-0.719c-0.168-0.607,1.701-1.319,2.257-2.434c0,0,0.155-0.918-1.531-0.258
			c-1.686,0.662-3.702,0.185-4.757-0.695C632.493,427.494,631.915,426.218,634.104,426.279z"/>
                        <path fill="#0B1330" d="M699.65,446.872c0,0-9.101,0.849-19.932-2.412c-10.828-3.262-18.682-9.58-18.682-9.58
			s-0.554,0.576-0.318,2.034c0.307,1.907,1.603,5.049,3.636,7.595c3.584,4.49,6.064,8.154,9.249,9.009
			c3.457,0.927,2.966-0.312,2.261-2.268c-0.707-1.956-0.373-3.332,2.229-1.318c0,0,6.772,4.628,10.828,5.388
			c4.323,0.81,6.203,0.108,6.53-1.076c0.25-0.91-2.549-1.976-3.381-3.644c0,0-0.231-1.377,2.293-0.387
			c2.524,0.991,5.543,0.276,7.123-1.041C702.064,448.69,702.929,446.778,699.65,446.872z"/>
                        <path fill="#0B1330" d="M690.095,428.1c0,0-7.016,0.654-15.363-1.859c-8.348-2.515-14.401-7.384-14.401-7.384
			s-0.427,0.443-0.245,1.567c0.235,1.471,1.234,3.892,2.803,5.854c2.763,3.462,4.675,6.286,7.129,6.944
			c2.665,0.716,2.287-0.238,1.742-1.746c-0.544-1.51-0.287-2.57,1.719-1.018c0,0,5.221,3.568,8.348,4.153
			c3.333,0.624,4.781,0.084,5.033-0.83c0.193-0.701-1.965-1.522-2.605-2.809c0,0-0.179-1.061,1.768-0.298
			c1.945,0.764,4.273,0.213,5.491-0.803C691.956,429.502,692.622,428.027,690.095,428.1z"/>
                        <path fill="#0B1330" d="M713.01,503h-17.752c0.617,0.338,1.254,0.673,1.896,1h17.069C713.895,503.685,713.473,503.354,713.01,503z
			"/>
                        <path fill="#0B1330"
                              d="M685.359,503h-6.854c0.71,0.434,1.438,0.756,2.185,1h4.636C685.429,503.735,685.43,503.398,685.359,503z"
                        />
                        <path fill="#0B1330"
                              d="M680.689,504c0.152,0.05,0.299,0.12,0.453,0.161c2.767,0.743,3.89,0.583,4.183-0.161H680.689z"/>
                        <path fill="#0B1330" d="M690.586,490.179c-16.72-5.035-28.847-14.791-28.847-14.791s-0.852,0.892-0.49,3.141
			c0.474,2.945,2.475,7.795,5.613,11.726c4.509,5.648,7.888,10.448,11.643,12.746h6.854c-0.113-0.644-0.404-1.439-0.729-2.338
			c-1.09-3.02-0.573-5.146,3.444-2.036c0,0,3.234,2.21,7.183,4.374h17.752c-1.217-0.93-2.69-2.011-3.354-3.343
			c0,0-0.358-2.123,3.54-0.596c2.035,0.798,4.277,0.874,6.305,0.479v-5.532C715.156,494.172,703.692,494.124,690.586,490.179z"/>
                        <path fill="#0B1330" d="M713.114,466.202c0,0-12.292,1.146-26.919-3.259c-14.627-4.405-25.235-12.939-25.235-12.939
			s-0.744,0.78-0.429,2.748c0.415,2.576,2.165,6.819,4.91,10.258c4.843,6.065,8.192,11.013,12.493,12.166
			c4.669,1.253,4.006-0.419,3.053-3.061c-0.954-2.642-0.503-4.502,3.012-1.782c0,0,9.147,6.252,14.625,7.277
			c5.84,1.095,8.38,0.147,8.818-1.453c0.34-1.23-3.44-2.668-4.564-4.922c0,0-0.312-1.858,3.097-0.521
			c3.41,1.337,7.487,0.372,9.622-1.407C716.376,468.658,717.543,466.075,713.114,466.202z"/>
                        <path fill="#0B1330" d="M661.044,497.536c0,0-0.988,1.033-0.569,3.643c0.088,0.55,0.238,1.171,0.417,1.821h8.097
			C663.973,499.889,661.044,497.536,661.044,497.536z"/>
                        <path fill="#0B1330"
                              d="M668.988,503h-8.097c0.088,0.32,0.196,0.66,0.305,1h9.438C670.066,503.66,669.512,503.325,668.988,503z"/>
                    </g>
                </g>
                <g id="Layer_6">
                    <g>
                        <g>
                            <path fill="#FCF8C8" d="M106.288,75.537c2.187,0.65,4.125,1.734,5.75,3.129c-7.05-0.336-13.686,4.146-15.787,11.214
				c-1.821,6.127,0.273,12.486,4.829,16.396c-1.241-0.059-2.494-0.266-3.738-0.636c-8.313-2.471-13.049-11.212-10.579-19.525
				C89.234,77.802,97.976,73.066,106.288,75.537z"/>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#C5B896" d="M93.445,79.779c0.713-0.221,1.469-0.077,1.95,0.445c0.706,0.765,0.557,2.051-0.333,2.872
							c-0.265,0.245-0.567,0.419-0.878,0.524c0.014-0.011,0.028-0.024,0.042-0.036C95.615,82.504,94.912,80.42,93.445,79.779z"/>
                                    </g>
                                </g>
                            </g>
                            <g opacity="0.7">
                                <g>
                                    <g>
                                        <path fill="#D1CBA9" d="M92.507,80.325c0.282-0.261,0.606-0.443,0.938-0.546c1.467,0.641,2.169,2.725,0.781,3.806
							c-0.014,0.012-0.028,0.024-0.042,0.036c-0.73,0.249-1.515,0.112-2.01-0.424C91.468,82.431,91.617,81.146,92.507,80.325z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path fill="#C5B896" d="M90.722,85.981c0.486-0.15,1.001-0.052,1.329,0.304c0.481,0.521,0.38,1.398-0.227,1.957
							c-0.181,0.167-0.386,0.286-0.598,0.358c0.009-0.008,0.019-0.017,0.027-0.024C92.2,87.838,91.721,86.418,90.722,85.981z"/>
                                    </g>
                                </g>
                            </g>
                            <g opacity="0.7">
                                <g>
                                    <g>
                                        <path fill="#D1CBA9" d="M90.082,86.353c0.192-0.178,0.413-0.302,0.64-0.372c1,0.437,1.479,1.857,0.531,2.594
							c-0.009,0.008-0.018,0.016-0.027,0.024c-0.499,0.169-1.033,0.077-1.371-0.29C89.374,87.788,89.475,86.912,90.082,86.353z"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Layer_5">
                    <g>
                        <path id="cloud1" opacity="0.1" fill="#FFFFFF" d="M243.938,100.819c-6.78,0-6.78,0-6.78,0s-0.042-0.108-0.126-0.29
			c-0.659-1.414-4.051-7.546-12.872-6.27c-5.276,0.76-9.23,2.135-9.23,2.135s-0.856-13.04-15.07-11.135
			c-6.782,0.91-5.305-0.471-7.159-4.729c-2.824-6.479-20.751-12.571-29.014,1.985c-3.342,5.893-3.298,3.202-7.109,1.83
			c-3.816-1.373-9.031-2.174-13.612,5.389c-3.39,5.592-7.909-4.171-12.81,2.847c-4.9,7.02-7.199-3.385-13.189,2.133
			c-3.712,3.42-6.97,4.772-9.827,5.228c-5.279,0.842-9.189-1.375-12.058,0.729c-4.426,3.245,1.538,6.247,1.538,6.247
			s30.523,0.306,34.29,0c3.768-0.304,6.596-2.593,10.36-1.982c3.768,0.61,5.463-0.151,5.463-0.151s0.756,2.134,7.541,2.134
			c6.779,0,7.532-3.196,11.679-2.813c4.143,0.373,14.316,2.813,19.968,2.813c5.65,0,25.616,0,25.616,0s4.147-1.524,6.029,0
			c1.886,1.525,12.435,0,12.435,0s11.306-3.088,13.939-1.085C246.577,107.832,250.72,100.819,243.938,100.819z"/>
                        <path id="cloud2" ref={el => (cloud2 = el)} opacity="0.05" fill="#FFFFFF" d="M128.412,160.094c-6.78,0-6.78,0-6.78,0s-0.042-0.108-0.126-0.29
			c-0.659-1.414-4.051-7.546-12.872-6.27c-5.276,0.76-9.23,2.135-9.23,2.135s-0.856-13.04-15.07-11.135
			c-6.782,0.91-5.305-0.471-7.159-4.729c-2.824-6.479-20.751-12.571-29.014,1.985c-3.342,5.893-3.298,3.202-7.109,1.83
			c-3.816-1.373-9.031-2.174-13.612,5.389c-3.39,5.592-7.909-4.171-12.81,2.847c-4.9,7.02-7.199-3.385-13.189,2.133
			c-0.318,0.293-0.628,0.55-0.939,0.813v11.52c6.86,0.021,13.282,0.001,14.881-0.129c3.768-0.304,6.596-2.593,10.36-1.982
			c3.768,0.61,5.463-0.151,5.463-0.151s0.756,2.134,7.541,2.134c6.779,0,7.532-3.196,11.679-2.813
			c4.143,0.373,14.316,2.813,19.968,2.813c5.65,0,25.616,0,25.616,0s4.147-1.524,6.029,0c1.886,1.525,12.435,0,12.435,0
			s11.306-3.088,13.939-1.085C131.051,167.106,135.194,160.094,128.412,160.094z"/>
                        <path opacity="0.05" fill="#FFFFFF" d="M448.802,61.099c-6.781,0-6.781,0-6.781,0s-0.041-0.108-0.125-0.29
			c-0.66-1.414-4.051-7.546-12.873-6.27c-5.275,0.76-9.23,2.135-9.23,2.135s-0.855-13.04-15.07-11.135
			c-6.781,0.91-5.305-0.471-7.158-4.729c-2.824-6.479-20.752-12.571-29.014,1.985c-3.342,5.893-3.299,3.202-7.109,1.83
			c-3.816-1.373-9.031-2.174-13.613,5.389c-3.389,5.592-7.908-4.171-12.809,2.847c-4.9,7.02-7.199-3.385-13.189,2.133
			c-3.713,3.42-6.971,4.772-9.828,5.228c-5.279,0.842-9.188-1.375-12.057,0.729c-4.426,3.245,1.537,6.247,1.537,6.247
			s30.523,0.306,34.289,0c3.768-0.304,6.596-2.593,10.361-1.982c3.768,0.61,5.463-0.151,5.463-0.151s0.756,2.134,7.541,2.134
			c6.779,0,7.531-3.196,11.678-2.813c4.143,0.373,14.316,2.813,19.969,2.813c5.65,0,25.615,0,25.615,0s4.148-1.524,6.029,0
			c1.887,1.525,12.436,0,12.436,0s11.305-3.088,13.939-1.085C451.44,68.111,455.583,61.099,448.802,61.099z"/>
                        <path opacity="0.03" id="cloud3" ref={el => (cloud3 = el)} fill="#FFFFFF" d="M718.051,143.076c-9.53,0-9.53,0-9.53,0s-0.058-0.108-0.176-0.29
			c-0.928-1.414-5.692-7.546-18.091-6.27c-7.414,0.76-12.973,2.135-12.973,2.135s-1.202-13.04-21.18-11.135
			c-9.53,0.91-7.455-0.471-10.06-4.729c-3.969-6.479-29.164-12.571-40.775,1.985c-4.696,5.893-4.636,3.202-9.991,1.83
			c-5.363-1.373-12.692-2.174-19.132,5.389c-4.763,5.592-11.114-4.171-18.001,2.847c-6.887,7.02-10.117-3.385-18.536,2.133
			c-5.218,3.42-9.797,4.772-13.812,5.228c-7.419,0.842-12.913-1.375-16.943,0.729c-6.221,3.245,2.16,6.247,2.16,6.247
			s42.896,0.306,48.188,0c5.295-0.304,9.27-2.593,14.562-1.982c5.295,0.61,7.678-0.151,7.678-0.151s1.062,2.134,10.598,2.134
			c9.527,0,10.584-3.196,16.412-2.813c5.821,0.373,20.12,2.813,28.063,2.813c7.94,0,35.999,0,35.999,0s5.83-1.524,8.474,0
			c2.651,1.525,17.477,0,17.477,0s15.888-3.088,19.59-1.085c0.618,0.333,1.295,0.412,1.949,0.318v-5.208
			C719.435,143.123,718.795,143.076,718.051,143.076z"/>
                        <path opacity="0.03" fill="#FFFFFF" d="M527.29,227.91c-9.53,0-9.53,0-9.53,0s-0.058-0.108-0.176-0.29
			c-0.928-1.414-5.692-7.546-18.091-6.27c-7.414,0.76-12.973,2.135-12.973,2.135s-1.202-13.04-21.18-11.135
			c-9.53,0.91-7.455-0.471-10.06-4.729c-3.969-6.479-29.164-12.571-40.775,1.985c-4.696,5.893-4.636,3.202-9.991,1.83
			c-5.363-1.373-12.692-2.174-19.132,5.389c-4.763,5.592-11.114-4.171-18.001,2.847c-6.887,7.02-10.117-3.385-18.536,2.133
			c-5.218,3.42-9.797,4.772-13.812,5.228c-7.419,0.842-12.913-1.375-16.943,0.729c-6.221,3.245,2.16,6.247,2.16,6.247
			s42.896,0.306,48.188,0c5.295-0.304,9.27-2.593,14.562-1.982c5.295,0.61,7.678-0.151,7.678-0.151s1.062,2.134,10.598,2.134
			c9.527,0,10.584-3.196,16.412-2.813c5.821,0.373,20.12,2.813,28.063,2.813c7.94,0,35.999,0,35.999,0s5.83-1.524,8.474,0
			c2.651,1.525,17.477,0,17.477,0s15.888-3.088,19.59-1.085C530.999,234.922,536.82,227.91,527.29,227.91z"/>
                        <path opacity="0.03" fill="#FFFFFF" d="M592.096,336.024c-12.332,0-12.332,0-12.332,0s-0.074-0.152-0.228-0.408
			c-1.2-1.99-7.365-10.621-23.409-8.824c-9.594,1.069-16.786,3.005-16.786,3.005s-1.556-18.353-27.405-15.673
			c-12.332,1.281-9.647-0.662-13.018-6.656c-5.135-9.12-37.737-17.694-52.762,2.794c-6.077,8.294-5.999,4.506-12.929,2.576
			c-6.94-1.933-16.424-3.06-24.756,7.584c-6.163,7.871-14.382-5.871-23.293,4.006c-8.911,9.88-13.092-4.765-23.985,3.003
			c-6.752,4.815-12.677,6.718-17.873,7.358c-9.6,1.186-16.709-1.935-21.924,1.028c-8.049,4.565,2.795,8.791,2.795,8.791
			s55.507,0.432,62.354,0c6.852-0.426,11.994-3.647,18.842-2.79c6.852,0.86,9.936-0.212,9.936-0.212s1.374,3.002,13.713,3.002
			c12.328,0,13.695-4.497,21.236-3.959c7.533,0.525,26.035,3.959,36.313,3.959c10.275,0,46.582,0,46.582,0s7.544-2.145,10.965,0
			c3.431,2.147,22.614,0,22.614,0s20.558-4.346,25.349-1.525C596.895,345.896,604.428,336.024,592.096,336.024z"/>
                    </g>
                </g>
            </svg>

                <Typist startDelay={3000} cursor={{ show: false, blink: true, element: '|', hideWhenDone: true, hideWhenDoneDelay: 1000}}  className="headerTypist" >
                    {/*<Typist.Delay ms={3000} />*/}
                    Animate this fucking text
                </Typist>

        </div>


    );
};

export default SvgHeader;
