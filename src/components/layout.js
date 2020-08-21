import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Location } from '@reach/router';
import '../assets/styles/imports.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faFileCode,
  faAt,
  faRoute,
} from '@fortawesome/free-solid-svg-icons';
import Scrollchor from 'react-scrollchor';
import { bubble as Menu } from 'react-burger-menu';
// import { slide as Menu } from 'react-burger-menu'

const Layout = ({ children, pageId }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <>
          <Location>
            {({ location }) => {
              const LinkComponent =
                location.pathname === '/' ? Scrollchor : Link;
              return (
                <Menu className={pageId ?? 'home-page'}>
                  <nav className="en">
                    <ul>
                      <li>
                        <LinkComponent
                          to={location.pathname === '/' ? '#home' : '/#home'}
                          className="home-link active"
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: '20px', width: '20px' }}
                            icon={faHome}
                          />
                          <span>Home</span>
                        </LinkComponent>
                      </li>
                      <li>
                        <LinkComponent
                          to={location.pathname === '/' ? '#about' : '/#about'}
                          className=""
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: '20px', width: '20px' }}
                            icon={faUser}
                          />
                          <span>About</span>
                        </LinkComponent>
                      </li>
                      <li>
                        <LinkComponent
                          to={
                            location.pathname === '/' ? '#journey' : '/#journey'
                          }
                          className=""
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: '20px', width: '20px' }}
                            icon={faRoute}
                          />
                          <span>The Journey</span>
                        </LinkComponent>
                      </li>
                      <li>
                        <LinkComponent
                          to={
                            location.pathname === '/'
                              ? '#projects'
                              : '/#projects'
                          }
                          className="home-link active"
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: '20px', width: '20px' }}
                            icon={faFileCode}
                          />
                          <span>Projects</span>
                        </LinkComponent>
                      </li>
                      <li>
                        <LinkComponent
                          to={
                            location.pathname === '/' ? '#contact' : '/#contact'
                          }
                          className="home-link active"
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: '20px', width: '20px' }}
                            icon={faAt}
                          />
                          <span>Contact</span>
                        </LinkComponent>
                      </li>
                    </ul>
                  </nav>
                </Menu>
              );
            }}
          </Location>

          <main id={pageId ?? 'home-page'}>{children}</main>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
