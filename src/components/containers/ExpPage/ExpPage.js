/* eslint-disable react/jsx-wrap-multilines */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-es6';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faHiking,
  faUserAstronaut,
  faUserGraduate,
  faUserNinja,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { cssConsts } from '../../utils/consts';

const ExpPage = () => (
  <Container className="mb-5" id="journey">
    <h2 className="text-center customHeadings">THE JOURNEY</h2>
    <Row noGutters>
      <Col>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--born"
            contentStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            contentArrowStyle={{
              background: `7px solid ${cssConsts.primaryColor}`,
            }}
            date={`1991 - present (${moment(new Date()).diff(
              moment('19910505', 'YYYYMMDD'),
              'years'
            )} years)`}
            iconStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            icon={
              <FontAwesomeIcon icon={faBaby} style={{ fontSize: '32px' }} />
            }
          >
            <h3 className="vertical-timeline-element-title">Born</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Larisa, Greece
            </h4>
            <p className="timeline-paragraph" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            contentArrowStyle={{
              background: `7px solid ${cssConsts.primaryColor}`,
            }}
            date={`2009 - 2014 (${moment('2014', 'YYYY').diff(
              moment('2009', 'YYYY'),
              'years'
            )} years)`}
            iconStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            icon={
              <FontAwesomeIcon
                icon={faUserGraduate}
                style={{ fontSize: '30px' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Graduation</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Larisa, Greece
            </h4>
            <p className="timeline-paragraph">
              Graduated from Technological Institute of Larisa with Bachelor in
              Computer Science and Telecommunications
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            contentArrowStyle={{
              background: `7px solid ${cssConsts.primaryColor}`,
            }}
            date={`2014 - 2015 (${moment('2015', 'YYYY').diff(
              moment('2014', 'YYYY'),
              'years'
            )} year)`}
            iconStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            icon={
              <FontAwesomeIcon icon={faHiking} style={{ fontSize: '25px' }} />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer - Exnet Hellas
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Thessaloniki, Greece
            </h4>
            <p className="timeline-paragraph">
              Main objective was creating Joomla! websites alongside with custom
              Joomla! modules, components and plugins.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            contentArrowStyle={{
              background: `7px solid ${cssConsts.primaryColor}`,
            }}
            date={`2015 - present (${moment(new Date()).diff(
              moment('2015', 'YYYY'),
              'years'
            )} years)`}
            iconStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            icon={
              <FontAwesomeIcon
                icon={faUserSecret}
                style={{ fontSize: '25px' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Lead Developer - Spiti360 (360Group)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Thessaloniki, Greece
            </h4>
            <p className="timeline-paragraph">
              Developing, optimizing, scaling and continuously upgrading
              Spiti360 both backend and frontend.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            contentArrowStyle={{
              background: `7px solid ${cssConsts.primaryColor}`,
            }}
            date={`2015 - present (${moment(new Date()).diff(
              moment('2015', 'YYYY'),
              'years'
            )} years)`}
            iconStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            icon={
              <FontAwesomeIcon
                icon={faUserAstronaut}
                style={{ fontSize: '25px' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              FullStack Developer - Mybusiness360 (360Group)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Thessaloniki, Greece
            </h4>
            <p className="timeline-paragraph">
              Developing projects mostly with Wordpress/Joomla/Opencart and many
              custom projects with Laravel/jQuery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            contentArrowStyle={{
              background: `7px solid ${cssConsts.primaryColor}`,
            }}
            date={`2016 - present (${moment(new Date()).diff(
              moment('2016', 'YYYY'),
              'years'
            )} years)`}
            iconStyle={{
              background: cssConsts.primaryColor,
              color: cssConsts.lightColorWhite,
            }}
            icon={
              <FontAwesomeIcon
                icon={faUserNinja}
                style={{ fontSize: '25px' }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              FullStack Developer - ViewNvisit (360Group)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Geneva, Switzerland
            </h4>
            <p className="timeline-paragraph">
              Developing Custom projects and more complex software, mostly using
              Laravel/Symfony for Backend and jQuery plus some React for
              Frontend.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Col>
    </Row>
  </Container>
);

export default ExpPage;
