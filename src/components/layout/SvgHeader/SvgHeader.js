import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineMax, Power2, Linear } from 'gsap/dist/gsap';
import Typist from 'react-typist';
import styles from './SvgHeader.module.scss';
import SvgHeaderStart from './SvgParts/SvgHeaderStart';
import SvgHeaderSecondPart from './SvgParts/SvgHeaderSecondPart';
import SvgHeaderEnd from './SvgParts/SvgHeaderEnd';

const SvgHeader = React.memo(function SvgHeader() {
  let cloud2 = useRef(null);
  let cloud3 = useRef(null);
  let moon = useRef(null);
  let moonLight = useRef(null);
  const bigSnowRef = useRef([]);
  const smallSnowRef = useRef([]);

  useEffect(() => {
    const tl = new TimelineMax();
    const tlSnow = new TimelineMax();
    // hide snowflakes
    bigSnowRef.current.forEach((snow) => {
      tlSnow.set(snow, { autoAlpha: 0, display: 'block' });
    });
    smallSnowRef.current.forEach((snow) => {
      tlSnow.set(snow, { autoAlpha: 0, display: 'block' });
    });

    function doneFalling(snowId) {
      // Need to add the check cause it loops forever
      // And if you change page it will still try to loop xD
      if (snowId) {
        let range = Math.random() * 800;
        range -= 400;

        TweenMax.set(snowId, {
          y: -100,
          x: range,
          autoAlpha: 0.2,
          rotation: Math.random() * 360,
        });
        TweenMax.to(snowId, 3 + Math.random() * 10, {
          y: '+=1200',
          autoAlpha: 1,
          ease: Linear.easeNone,
          onComplete: doneFalling,
          onCompleteParams: [snowId],
        });
      }
    }

    // start snowflake looping
    function startLoops() {
      bigSnowRef.current.forEach((snow) => {
        tlSnow.set(snow, { autoAlpha: 0 });
      });

      bigSnowRef.current.forEach((snow) => {
        TweenMax.to(
          snow,
          10 + Math.random() * 10,
          {
            y: '+=1200',
            autoAlpha: 1,
            ease: Linear.easeNone,
            onStart: doneFalling,
            onStartParams: [snow],
          },
          '+=0.5'
        );
      });

      smallSnowRef.current.forEach((snow) => {
        tlSnow.set(snow, { autoAlpha: 0 });
      });

      smallSnowRef.current.forEach((snow) => {
        TweenMax.to(
          snow,
          10 + Math.random() * 10,
          {
            y: '+=1200',
            autoAlpha: 1,
            ease: Linear.easeNone,
            onStart: doneFalling,
            onStartParams: [snow],
          },
          '+=2'
        );
      });
    }

    // initialize elements positions
    tl.set(cloud2, { x: '-=260', display: 'block' })
      .set(cloud3, { x: '+=260', display: 'block' })
      .set(moon, { y: '+=260' })
      .set(moon, { autoAlpha: 1 })
      .set(moonLight, { autoAlpha: 0, display: 'block' })
      .to(moon, 5, { y: '-=260', display: 'block', ease: Power2.easeOut })
      .to(moonLight, 5, { autoAlpha: 1, ease: Power2.easeOut }, '-=3')
      .to(cloud2, 2.5, { x: '+=260', display: 'block', autoAlpha: 0.05 }, '-=3')
      .to(
        cloud3,
        2.5,
        {
          x: '-=260',
          display: 'block',
          autoAlpha: 0.03,
          onComplete: startLoops,
        },
        '-=3'
      );
  }, []);
  return (
    // Unfortunately I cant import svg as media cause I need to set the refs
    // Best thing I could do is to break the elements that doesnt use a ref in small parts
    // And import them inside the main svg body
    <div className={styles.ContentContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100vh',
        }}
        height="1000px"
        width="100%"
        xmlSpace="preserve"
        viewBox="0 0 720 503.999"
        preserveAspectRatio="xMidYMax slice"
        // preserveAspectRatio="none"
      >
        <g
          id="Layer_1"
          style={{ display: 'none' }}
          ref={(el) => {
            moonLight = el;
          }}
        >
          <SvgHeaderStart />
        </g>
        <g
          id="Layer_7"
          style={{ display: 'none' }}
          ref={(el) => {
            moon = el;
          }}
        >
          <circle fill="#F4D6BC" cx="653.985" cy="364.586" r="39.089" />
        </g>
        <SvgHeaderSecondPart />
        <g id="Layer_4">
          <g>
            {/*<circle fill="#FFFFFF" cx="130.602" cy="123.098" r="1.5"/>*/}
            <g>
              <g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[0] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="58.092" cy="192.717" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[1] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="75.982" cy="265.248" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[2] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="136.613" cy="257.79" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[3] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="175.531" cy="185.103" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[4] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="202.724" cy="103.64" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[5] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="288.973" cy="104.966" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[6] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="328.834" cy="164.033" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[7] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="297.977" cy="176.162" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[8] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="382.961" cy="150.691" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[9] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="445.771" cy="122.104" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[10] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="487.92" cy="94.587" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[11] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="542.819" cy="103.128" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[12] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="548.333" cy="116.887" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[13] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="539.816" cy="152.369" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[14] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="529.554" cy="166.325" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[15] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="525.367" cy="162.475" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[16] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="18.973" cy="78.634" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[17] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="37.655" cy="56.76" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[18] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="115.738" cy="16.064" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[19] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="202.852" cy="26.102" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[20] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="233.402" cy="48.968" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[21] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="311.73" cy="59.241" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[22] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="366.077" cy="50.269" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[23] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="427.769" cy="42.668" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[24] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="508.98" cy="47.033" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[25] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="548.642" cy="50.287" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[26] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="586.144" cy="50.876" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[27] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="605.716" cy="48.374" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[28] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="613.396" cy="45.716" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[29] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="487.814" cy="246.846" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[30] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="459.738" cy="234.233" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[31] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="293.75" cy="221.96" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[32] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="296.779" cy="304.069" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[33] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="313.304" cy="305.816" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[34] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="262.054" cy="348.416" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[35] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="426.901" cy="363.268" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[36] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="412.957" cy="300.851" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[37] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="274.885" cy="300.758" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[38] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="441.027" cy="310.204" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[39] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="243.484" cy="201.891" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[40] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="339.628" cy="252.262" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[41] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="208.963" cy="256.631" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[42] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="177.722" cy="326.35" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[43] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="97.442" cy="312.51" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[44] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="155.007" cy="360.051" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[45] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="46.062" cy="383.83" r="1.5" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    bigSnowRef.current[46] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="63.242" cy="366.622" r="1.5" />
                </g>
              </g>
              <g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[0] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="463.393" cy="2.114" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[1] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="525.113" cy="14.209" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[2] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="604.517" cy="17.178" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[3] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="640.529" cy="27.831" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[4] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="668.561" cy="27.886" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[5] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="678.483" cy="25.13" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[6] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="682.359" cy="30.335" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[7] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="692.342" cy="29.442" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[8] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="678.889" cy="108.938" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[9] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="674.461" cy="139.263" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[10] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="673.934" cy="136.728" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[11] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="709.508" cy="169.318" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[12] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="704.613" cy="182.252" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[13] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="667.863" cy="227.093" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[14] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="660.097" cy="227.03" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[15] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="620.241" cy="245.146" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[16] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="550.821" cy="246.54" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[17] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="544.239" cy="246.505" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[18] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="552.701" cy="206.729" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[19] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="336.548" cy="204.588" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[20] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="402.839" cy="194.623" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[21] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="427.744" cy="219.654" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[22] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="398.23" cy="243.904" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[23] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="399.351" cy="263.28" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[24] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="412.195" cy="266.457" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[25] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="373.031" cy="289.627" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[26] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="363.575" cy="294.938" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[27] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="302.158" cy="289.912" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[28] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="300.28" cy="245.895" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[29] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="313.734" cy="251.354" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[30] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="320.766" cy="232.103" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[31] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="353.658" cy="230.698" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[32] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="376.04" cy="225.045" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[33] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="380.878" cy="228.954" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[34] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="382.286" cy="235.315" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[35] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="380.516" cy="253.526" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[36] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="369.703" cy="265.954" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[37] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="347.388" cy="267.378" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[38] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="349.023" cy="255.755" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[39] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="302.199" cy="258.067" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[40] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="337.972" cy="235.541" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[41] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="288.059" cy="267.13" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[42] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="267.227" cy="285.75" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[43] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="303.723" cy="298.88" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[44] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="312.151" cy="308.356" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[45] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="331.791" cy="296.062" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[46] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="310.527" cy="324" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[47] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="348.012" cy="311.834" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[48] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="351.222" cy="331.628" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[49] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="380.634" cy="289.901" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[50] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="350.944" cy="289.467" r="0.693" />
                </g>
                <g
                  style={{ display: 'none' }}
                  ref={(el) => {
                    smallSnowRef.current[51] = el;
                  }}
                >
                  <circle fill="#FFFFFF" cx="334.911" cy="285.615" r="0.693" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <SvgHeaderEnd />
        <g id="Layer_5">
          <g>
            <path
              id="cloud1"
              opacity="0.1"
              fill="#FFFFFF"
              d="M243.938,100.819c-6.78,0-6.78,0-6.78,0s-0.042-0.108-0.126-0.29
			c-0.659-1.414-4.051-7.546-12.872-6.27c-5.276,0.76-9.23,2.135-9.23,2.135s-0.856-13.04-15.07-11.135
			c-6.782,0.91-5.305-0.471-7.159-4.729c-2.824-6.479-20.751-12.571-29.014,1.985c-3.342,5.893-3.298,3.202-7.109,1.83
			c-3.816-1.373-9.031-2.174-13.612,5.389c-3.39,5.592-7.909-4.171-12.81,2.847c-4.9,7.02-7.199-3.385-13.189,2.133
			c-3.712,3.42-6.97,4.772-9.827,5.228c-5.279,0.842-9.189-1.375-12.058,0.729c-4.426,3.245,1.538,6.247,1.538,6.247
			s30.523,0.306,34.29,0c3.768-0.304,6.596-2.593,10.36-1.982c3.768,0.61,5.463-0.151,5.463-0.151s0.756,2.134,7.541,2.134
			c6.779,0,7.532-3.196,11.679-2.813c4.143,0.373,14.316,2.813,19.968,2.813c5.65,0,25.616,0,25.616,0s4.147-1.524,6.029,0
			c1.886,1.525,12.435,0,12.435,0s11.306-3.088,13.939-1.085C246.577,107.832,250.72,100.819,243.938,100.819z"
            />
            <path
              style={{ display: 'none' }}
              id="cloud2"
              ref={(el) => {
                cloud2 = el;
              }}
              opacity="0.05"
              fill="#FFFFFF"
              d="M128.412,160.094c-6.78,0-6.78,0-6.78,0s-0.042-0.108-0.126-0.29
			c-0.659-1.414-4.051-7.546-12.872-6.27c-5.276,0.76-9.23,2.135-9.23,2.135s-0.856-13.04-15.07-11.135
			c-6.782,0.91-5.305-0.471-7.159-4.729c-2.824-6.479-20.751-12.571-29.014,1.985c-3.342,5.893-3.298,3.202-7.109,1.83
			c-3.816-1.373-9.031-2.174-13.612,5.389c-3.39,5.592-7.909-4.171-12.81,2.847c-4.9,7.02-7.199-3.385-13.189,2.133
			c-0.318,0.293-0.628,0.55-0.939,0.813v11.52c6.86,0.021,13.282,0.001,14.881-0.129c3.768-0.304,6.596-2.593,10.36-1.982
			c3.768,0.61,5.463-0.151,5.463-0.151s0.756,2.134,7.541,2.134c6.779,0,7.532-3.196,11.679-2.813
			c4.143,0.373,14.316,2.813,19.968,2.813c5.65,0,25.616,0,25.616,0s4.147-1.524,6.029,0c1.886,1.525,12.435,0,12.435,0
			s11.306-3.088,13.939-1.085C131.051,167.106,135.194,160.094,128.412,160.094z"
            />
            <path
              opacity="0.05"
              fill="#FFFFFF"
              d="M448.802,61.099c-6.781,0-6.781,0-6.781,0s-0.041-0.108-0.125-0.29
			c-0.66-1.414-4.051-7.546-12.873-6.27c-5.275,0.76-9.23,2.135-9.23,2.135s-0.855-13.04-15.07-11.135
			c-6.781,0.91-5.305-0.471-7.158-4.729c-2.824-6.479-20.752-12.571-29.014,1.985c-3.342,5.893-3.299,3.202-7.109,1.83
			c-3.816-1.373-9.031-2.174-13.613,5.389c-3.389,5.592-7.908-4.171-12.809,2.847c-4.9,7.02-7.199-3.385-13.189,2.133
			c-3.713,3.42-6.971,4.772-9.828,5.228c-5.279,0.842-9.188-1.375-12.057,0.729c-4.426,3.245,1.537,6.247,1.537,6.247
			s30.523,0.306,34.289,0c3.768-0.304,6.596-2.593,10.361-1.982c3.768,0.61,5.463-0.151,5.463-0.151s0.756,2.134,7.541,2.134
			c6.779,0,7.531-3.196,11.678-2.813c4.143,0.373,14.316,2.813,19.969,2.813c5.65,0,25.615,0,25.615,0s4.148-1.524,6.029,0
			c1.887,1.525,12.436,0,12.436,0s11.305-3.088,13.939-1.085C451.44,68.111,455.583,61.099,448.802,61.099z"
            />
            <path
              style={{ display: 'none' }}
              opacity="0.03"
              id="cloud3"
              ref={(el) => {
                cloud3 = el;
              }}
              fill="#FFFFFF"
              d="M718.051,143.076c-9.53,0-9.53,0-9.53,0s-0.058-0.108-0.176-0.29
			c-0.928-1.414-5.692-7.546-18.091-6.27c-7.414,0.76-12.973,2.135-12.973,2.135s-1.202-13.04-21.18-11.135
			c-9.53,0.91-7.455-0.471-10.06-4.729c-3.969-6.479-29.164-12.571-40.775,1.985c-4.696,5.893-4.636,3.202-9.991,1.83
			c-5.363-1.373-12.692-2.174-19.132,5.389c-4.763,5.592-11.114-4.171-18.001,2.847c-6.887,7.02-10.117-3.385-18.536,2.133
			c-5.218,3.42-9.797,4.772-13.812,5.228c-7.419,0.842-12.913-1.375-16.943,0.729c-6.221,3.245,2.16,6.247,2.16,6.247
			s42.896,0.306,48.188,0c5.295-0.304,9.27-2.593,14.562-1.982c5.295,0.61,7.678-0.151,7.678-0.151s1.062,2.134,10.598,2.134
			c9.527,0,10.584-3.196,16.412-2.813c5.821,0.373,20.12,2.813,28.063,2.813c7.94,0,35.999,0,35.999,0s5.83-1.524,8.474,0
			c2.651,1.525,17.477,0,17.477,0s15.888-3.088,19.59-1.085c0.618,0.333,1.295,0.412,1.949,0.318v-5.208
			C719.435,143.123,718.795,143.076,718.051,143.076z"
            />
            <path
              opacity="0.03"
              fill="#FFFFFF"
              d="M527.29,227.91c-9.53,0-9.53,0-9.53,0s-0.058-0.108-0.176-0.29
			c-0.928-1.414-5.692-7.546-18.091-6.27c-7.414,0.76-12.973,2.135-12.973,2.135s-1.202-13.04-21.18-11.135
			c-9.53,0.91-7.455-0.471-10.06-4.729c-3.969-6.479-29.164-12.571-40.775,1.985c-4.696,5.893-4.636,3.202-9.991,1.83
			c-5.363-1.373-12.692-2.174-19.132,5.389c-4.763,5.592-11.114-4.171-18.001,2.847c-6.887,7.02-10.117-3.385-18.536,2.133
			c-5.218,3.42-9.797,4.772-13.812,5.228c-7.419,0.842-12.913-1.375-16.943,0.729c-6.221,3.245,2.16,6.247,2.16,6.247
			s42.896,0.306,48.188,0c5.295-0.304,9.27-2.593,14.562-1.982c5.295,0.61,7.678-0.151,7.678-0.151s1.062,2.134,10.598,2.134
			c9.527,0,10.584-3.196,16.412-2.813c5.821,0.373,20.12,2.813,28.063,2.813c7.94,0,35.999,0,35.999,0s5.83-1.524,8.474,0
			c2.651,1.525,17.477,0,17.477,0s15.888-3.088,19.59-1.085C530.999,234.922,536.82,227.91,527.29,227.91z"
            />
            <path
              opacity="0.03"
              fill="#FFFFFF"
              d="M592.096,336.024c-12.332,0-12.332,0-12.332,0s-0.074-0.152-0.228-0.408
			c-1.2-1.99-7.365-10.621-23.409-8.824c-9.594,1.069-16.786,3.005-16.786,3.005s-1.556-18.353-27.405-15.673
			c-12.332,1.281-9.647-0.662-13.018-6.656c-5.135-9.12-37.737-17.694-52.762,2.794c-6.077,8.294-5.999,4.506-12.929,2.576
			c-6.94-1.933-16.424-3.06-24.756,7.584c-6.163,7.871-14.382-5.871-23.293,4.006c-8.911,9.88-13.092-4.765-23.985,3.003
			c-6.752,4.815-12.677,6.718-17.873,7.358c-9.6,1.186-16.709-1.935-21.924,1.028c-8.049,4.565,2.795,8.791,2.795,8.791
			s55.507,0.432,62.354,0c6.852-0.426,11.994-3.647,18.842-2.79c6.852,0.86,9.936-0.212,9.936-0.212s1.374,3.002,13.713,3.002
			c12.328,0,13.695-4.497,21.236-3.959c7.533,0.525,26.035,3.959,36.313,3.959c10.275,0,46.582,0,46.582,0s7.544-2.145,10.965,0
			c3.431,2.147,22.614,0,22.614,0s20.558-4.346,25.349-1.525C596.895,345.896,604.428,336.024,592.096,336.024z"
            />
          </g>
        </g>
      </svg>

      <Typist
        startDelay={3000}
        cursor={{
          show: false,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 1000,
        }}
        className={styles.headerTypist}
      >
        <h1>Hello Lad, Im Thanasis</h1>
        <h1>Backend Developer</h1>
        <Typist.Backspace count={17} delay={200} />
        <h1>FullStack Developer from Greece ^.^</h1>
      </Typist>
    </div>
  );
});
export default SvgHeader;
