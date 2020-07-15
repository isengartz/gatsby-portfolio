import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './BlogNew.module.scss';

const BlogNew = () => {
  let containerRef = useRef(null);
  let triggerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(containerRef, {
      height: '0',
      display: 'none',
      autoAlpha: 0,
      // duration:10,
      scrollTrigger: {
        trigger: containerRef,
        toggleActions: 'play pause resume none',
        start: 'center center',
        end: 'bottom -100%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
        // markers: true,
      },
    });
  }, []);
  return (
    <div>
      <div
        ref={(el) => {
          containerRef = el;
        }}
        className={styles.Container}
      >
        <div style={{ height: '25%' }} />
        <div
          ref={(el) => {
            // eslint-disable-next-line no-unused-vars
            triggerRef = el;
          }}
          className={styles.FullCenter}
        >
          Nothing to do here !
        </div>
      </div>
    </div>
  );
};

export default BlogNew;
