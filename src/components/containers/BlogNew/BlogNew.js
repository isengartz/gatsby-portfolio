import React, { useRef, useState, useEffect } from 'react';
import styles from './BlogNew.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BlogNew = () => {
  let boxRef = useRef([]);
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
