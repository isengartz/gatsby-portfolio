import React, { useState, useEffect, useRef } from 'react';
import { TimelineMax, TweenMax, gsap, Power4 } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

const SvgAnimal = ({ onClick, isVisible }) => {
  const [state, setState] = useState({
    isHovered: false,
    dontHover: false,
    animalShouldVanish: true,
    isVisible,
  });
  // Initialize Vars
  let animal = useRef(null);
  let leftEye = useRef(null);
  let rightEye = useRef(null);
  let leftEar = useRef(null);
  let rightEar = useRef(null);
  let leftHand = useRef(null);
  let bubble = useRef(null);

  gsap.registerPlugin(TextPlugin);
  const tl = new TimelineMax();

  const eyesBlink = () => {
    tl.fromTo(
      leftEye,
      { autoAlpha: 0 },
      { duration: 1, autoAlpha: 1, repeat: -1, repeatDelay: 3 }
    ).fromTo(
      rightEye,
      { autoAlpha: 0 },
      { duration: 1, autoAlpha: 1, repeat: -1, repeatDelay: 3 },
      '-=1'
    );
  };
  const handMoving = () => {
    tl.to(leftHand, {
      duration: 0.6,
      transformOrigin: 'right center',
      rotation: +15,
    })
      .to(leftHand, {
        duration: 0.6,
        transformOrigin: 'right center',
        rotation: 0,
      })
      .to(leftHand, {
        duration: 0.6,
        transformOrigin: 'right center',
        rotation: +15,
      })
      .to(leftHand, {
        duration: 0.6,
        transformOrigin: 'right center',
        rotation: 0,
      });
  };
  const bubbleShow = () => {
    tl.to(bubble, {
      duration: 1,
      autoAlpha: 1,
    })
      .to(bubble, {
        duration: 2,
        text:
          'If you wanna see this shitty section or me again, double click me else I will vanish with it forever!',
      })
      .to(bubble, {
        autoAlpha: 0,
        duration: 1,
        delay: 10,
        onComplete: vanishAnimal,
        onCompleteParams: [animal],
      });
  };
  const animalStartTalking = () => {
    tl.to(animal, {
      duration: 1.5,
      x: '+=250',
    })
      .to(animal, {
        transformOrigin: 'center center',
        rotate: 0,
      })
      .to(animal, {
        x: '-=250',
        duration: 1.5,
        ease: Power4.easeOut,
      });
    handMoving();
    bubbleShow();
  };
  const animalDoubleClick = () => {
    setState((prevState) => ({
      ...prevState,
      animalShouldVanish: false,
    }));
    // Pause the main Timeline
    tl.pause();
    // Force parent component click
    onClick();

    // Show new Message, and hide bubble and Animal
    TweenMax.set(bubble, {
      autoAlpha: 1,
    });
    TweenMax.to(bubble, {
      text:
        'Why would you wanna see that shit again... W/E Im off forever cya !',
      duration: 2,
    });
    TweenMax.to(bubble, {
      autoAlpha: 0,
      duration: 1.5,
    });
    TweenMax.to(animal, {
      duration: 1,
      autoAlpha: 0,
      x: '+=300',
    });
    // Add it to localStorage so we wont rerender it
    localStorage.setItem('hideAnimal', 'true');
  };
  const vanishAnimal = (animalRef) => {
    if (state.animalShouldVanish) {
      TweenMax.to(animalRef, {
        duration: 1.5,
        autoAlpha: 0,
        x: '+=300',
      });
      localStorage.setItem('hideAnimal', 'true');
    }
  };

  // Initiate position of animal
  useEffect(() => {
    tl.set(animal, {
      x: '+=250',
      transformOrigin: 'right center',
      rotation: -90,
    });
  }, []);

  // Show the animal and start blinking
  useEffect(() => {
    if (isVisible && !localStorage.getItem('hideAnimal')) {
      tl.to(animal, {
        x: '-=250',
        duration: 1.5,
      });
      eyesBlink();
    }
  }, [isVisible]);

  useEffect(() => {
    if (
      state.isHovered &&
      !state.dontHover &&
      !localStorage.getItem('hideAnimal')
    ) {
      setState((prevState) => ({
        ...prevState,
        dontHover: true,
      }));
      animalStartTalking();
    }
  }, [state.isHovered]);
  return (
    <div className="position-relative">
      <div
        ref={(el) => {
          bubble = el;
        }}
        className="bubble"
        style={{ opacity: '0' }}
      />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="150px"
        viewBox="0 0 87.873 126.008"
        // enableBackground="new 0 0 87.873 126.008"
        xmlSpace="preserve"
        onDoubleClick={animalDoubleClick}
        style={{
          position: 'absolute',
          bottom: '-5px',
          right: '0px',
          zIndex: '50',
          cursor: 'pointer',
          // opacity: '0',
        }}
        ref={(el) => {
          animal = el;
        }}
        onMouseEnter={() =>
          setState((prevState) => ({ ...prevState, isHovered: true }))
        }
      >
        <g id="animal">
          <path
            id="XMLID_590_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#6D6E71"
            d="M53.268,107.095
		c0.936,1.596,1.672,4.68,3.673,8.059c2.384,4.027,3.946,6.637,10.527,4.356c6.188-2.144,4.042-10.141-3.191-8.666
		c-0.941,0.192-0.294,0.824-1.973-4.604c-1.138-3.671-5.647,0.536-8.584,0.519C53.415,106.757,53.073,106.764,53.268,107.095z"
          />
          <path
            id="XMLID_589_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#6D6E71"
            d="M36.226,103.838
		c-0.137,1.844,0.56,4.939,0.25,8.853c-0.367,4.666-0.62,7.696-7.533,8.546c-6.501,0.801-8.094-7.323-0.951-9.186
		c0.931-0.242,0.626,0.611-0.255-5c-0.595-3.799,5.306-2.007,7.936-3.315C35.944,103.601,36.254,103.455,36.226,103.838z"
          />
          <path
            ref={(el) => {
              leftHand = el;
            }}
            id="XMLID_588_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#BCBEC0"
            d="M27.705,72.433
		C25.716,77.825,8.521,76.041,9.993,83.26c0.844,4.146,26.384-0.172,21.789-9.785C30.785,71.386,27.75,72.305,27.705,72.433z"
          />
          <path
            id="XMLID_587_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#BCBEC0"
            d="M74.989,85.527
		c3.241-2.716-12.914-23.01-19.105-14.337c-1.046,1.465,2.481,4.495,6.518,8.016C67.131,83.328,70.423,89.352,74.989,85.527z"
          />
          <path
            id="XMLID_586_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#808285"
            d="M29.012,69.282
		c-5.46,3.307-11.599,21.948-7.949,29.636c7.157,15.073,30.302,14.663,39.592,7.927c14.12-10.239,4.608-24.848-3.315-34.781
		c-5.43-6.806-4.26-8.597-14.973-7.366C26.131,66.562,35.636,65.27,29.012,69.282z"
          />
          <path
            ref={(el) => {
              leftEar = el;
            }}
            id="XMLID_585_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#8B8E90"
            d="M23.458,34.165
		C21.8,31.566,29.046-2.937,39.738,6.406c0.938,0.819-5,21.313-6.783,22.555C30.018,31.006,27.053,35.438,23.458,34.165z"
          />
          <path
            id="XMLID_584_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#A2AAAB"
            d="M31.379,7.563c1.8,2.543,12.167,25,12.813,8.594
		c0.188-4.734-2.86-11.774-8.527-11.313C34.886,4.909,31.079,7.139,31.379,7.563z"
          />
          <path
            ref={(el) => {
              rightEar = el;
            }}
            id="XMLID_583_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#8B8E90"
            d="M45.064,36.466
		c-1.657-2.599,5.588-37.103,16.282-27.76c0.939,0.82-4.999,21.313-6.784,22.556C51.625,33.307,48.66,37.738,45.064,36.466z"
          />
          <path
            id="XMLID_582_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#A2AAAB"
            d="M52.985,9.863
		c1.801,2.544,12.167,25.001,12.813,8.594c0.188-4.732-2.861-11.774-8.528-11.312C56.493,7.21,52.685,9.439,52.985,9.863z"
          />
          <path
            id="XMLID_581_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#A2AAAB"
            d="M23.657,32.965
		c-8.358,9.657-9.791,20.513-7.004,26.962c7.049,16.311,31.814,15.682,43.781,7.122c9.344-6.684,3.552-24.937-0.853-30.813
		C50.739,24.44,33.382,21.728,23.657,32.965z"
          />
          <path
            id="XMLID_577_"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.202,46.896c0,0-0.849,0.684-1.12,0.248
		c-0.446-0.717-0.127-2.552-0.046-2.29C24.119,45.119,25.052,46.038,25.202,46.896L25.202,46.896z M26.83,46.032
		c-0.008-0.871-0.78-1.93-0.819-2.203c-0.036-0.271-0.648,1.486-0.326,2.267C25.88,46.568,26.83,46.032,26.83,46.032L26.83,46.032
		L26.83,46.032z M23.883,47.782c-0.318-0.812-1.417-1.523-1.55-1.765c-0.133-0.24-0.074,1.621,0.505,2.232
		C23.192,48.622,23.883,47.782,23.883,47.782L23.883,47.782z"
          />
          <path
            id="XMLID_576_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            d="M23.907,54.916
		c5.229,5.655,12.849-2.369,8.225-7.287C26.833,41.998,18.574,49.146,23.907,54.916z"
          />
          <path
            id="XMLID_575_"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.175,52.628c3.727,4.031,9.158-1.688,5.861-5.194
		C28.261,43.42,22.373,48.516,26.175,52.628z"
          />
          <path
            ref={(el) => {
              leftEye = el;
            }}
            id="XMLID_574_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            d="M29.01,49.859
		c1.287,1.393,3.163-0.582,2.023-1.794C29.73,46.68,27.697,48.44,29.01,49.859z"
          />
          <path
            id="XMLID_570_"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.392,49.271c0,0,0.848,0.684,1.119,0.248
		c0.444-0.717,0.126-2.551,0.045-2.289C57.474,47.493,56.54,48.413,56.392,49.271L56.392,49.271z M54.764,48.407
		c0.007-0.87,0.779-1.93,0.817-2.203c0.037-0.271,0.649,1.487,0.326,2.266C55.712,48.943,54.763,48.408,54.764,48.407L54.764,48.407
		L54.764,48.407z M57.707,50.156c0.319-0.81,1.42-1.521,1.553-1.763c0.132-0.24,0.074,1.62-0.506,2.231
		C58.401,50.997,57.707,50.156,57.707,50.156L57.707,50.156z"
          />
          <path
            id="XMLID_569_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            d="M49.516,57.18
		c5.227,5.654,12.848-2.371,8.222-7.288C52.441,44.26,44.181,51.408,49.516,57.18z"
          />
          <path
            id="XMLID_568_"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.783,54.891c3.726,4.032,9.158-1.688,5.861-5.193
		C53.867,45.683,47.979,50.779,51.783,54.891z"
          />
          <path
            ref={(el) => {
              rightEye = el;
            }}
            id="XMLID_567_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            d="M54.617,52.123
		c1.286,1.393,3.163-0.585,2.023-1.793C55.337,48.942,53.305,50.703,54.617,52.123z"
          />
          <path
            id="XMLID_566_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#58595B"
            d="M31.213,39.909
		c-3.138-2.362-6.986,1.325-4.962,2.122C29.729,43.397,32.057,40.545,31.213,39.909z"
          />
          <path
            id="XMLID_565_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#58595B"
            d="M59.884,43.698
		c-1.456-3.646-6.66-2.49-5.343-0.759C56.805,45.912,60.276,44.68,59.884,43.698z"
          />
          <path
            id="XMLID_561_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#414042"
            d="M40.414,59.062
		c0.527,0.568,1.295-0.239,0.829-0.734C40.708,57.76,39.877,58.479,40.414,59.062L40.414,59.062z M42.747,58.104
		c0.525,0.568,1.292-0.24,0.827-0.735C43.04,56.803,42.208,57.523,42.747,58.104L42.747,58.104L42.747,58.104z M40.571,56.268
		c0.526,0.57,1.293-0.237,0.828-0.733C40.864,54.968,40.033,55.688,40.571,56.268L40.571,56.268z"
          />
          <path
            id="XMLID_560_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#F1607C"
            d="M51.274,62.854
		c2.067,1.748,5.083-0.733,3.251-2.255C52.431,58.858,49.165,61.07,51.274,62.854z"
          />
          <path
            id="XMLID_559_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#F1607C"
            d="M25.334,60.559
		c2.068,1.75,5.082-0.732,3.253-2.254C26.492,56.563,23.224,58.774,25.334,60.559z"
          />
          <path
            id="XMLID_555_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#414042"
            d="M33.612,58.361
		c0.527,0.568,1.294-0.239,0.828-0.733C33.907,57.06,33.075,57.78,33.612,58.361L33.612,58.361z M35.944,57.403
		c0.525,0.568,1.293-0.238,0.828-0.734C36.238,56.102,35.406,56.821,35.944,57.403L35.944,57.403L35.944,57.403z M33.769,55.567
		c0.526,0.571,1.294-0.237,0.827-0.732C34.063,54.268,33.231,54.987,33.769,55.567L33.769,55.567z"
          />
          <path
            id="XMLID_554_"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.528,55.57c0.453-0.083-1.077,7.122,2.837,5.766
		c0.475-0.165,1.122-0.805,1.375-0.715c0.29,0.104-0.409,1.497-2.334,1.432c-1.13-0.038-1.701-0.665-1.961-1.536
		c-0.093-0.313-0.188-0.798-0.292-1.455c-0.183,0.639-0.404,1.201-0.581,1.504c-0.569,0.965-2.079,1.335-3.195,0.601
		c-0.461-0.303-1.083-1.129-1.184-1.651c-0.157-0.828,0.85,0.148,1.379,0.609c3.289,2.866,3.199-3.491,3.566-4.225
		c-0.015-0.078-0.037-0.131-0.065-0.147c0.038,0.024,0.072,0.051,0.104,0.083C38.261,55.692,38.376,55.6,38.528,55.57z"
          />
          <path
            id="XMLID_553_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#F8ABAD"
            d="M35.54,49.195
		c1.508-1.912,11.34,0.184,5.297,4.73c-1.351,1.017-1.532,2.134-2.341,2.106c-1.032-0.034-0.203-0.813-2-2.437
		C36.168,53.301,34.179,50.92,35.54,49.195z"
          />
          <path
            id="XMLID_552_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#BCBEC0"
            d="M34.791,86.5
		c-5.143,5.581-6.025,11.855-4.31,15.585c4.337,9.428,19.575,9.063,26.938,4.116c5.748-3.862,2.186-14.414-0.524-17.81
		C51.454,81.572,40.775,80.005,34.791,86.5z"
          />
          <path
            id="XMLID_551_"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#6D6E71"
            d="M44.94,104.922
		c-0.154,0.168-0.181,0.355-0.129,0.469c0.129,0.282,0.588,0.272,0.809,0.123c0.172-0.115,0.065-0.434-0.015-0.535
		C45.441,104.773,45.12,104.726,44.94,104.922z"
          />
        </g>
      </svg>
    </div>
  );
};

export default SvgAnimal;
