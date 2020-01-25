import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "./header"
import '../assets/styles/imports.scss'
import "./layout.css"
import styles from "../assets/styles/layout.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faCog,faFileCode,faAt} from '@fortawesome/free-solid-svg-icons'
import Scrollchor from 'react-scrollchor';

const Layout = ({children}) => (
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
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title}/>

                <main>
                    <div className={styles.Navbar}>

                        <nav className="en">
                            <Scrollchor to="#home" className="home-link active">
                                <FontAwesomeIcon icon={faHome}/>
                            </Scrollchor>

                            <Scrollchor to="#about" className="">
                                <FontAwesomeIcon icon={faUser}/>
                            </Scrollchor>
                            <Scrollchor to="#skills" className="">
                                <FontAwesomeIcon icon={faCog}/>
                            </Scrollchor>
                            <Scrollchor to="#projects" className="home-link active">
                                <FontAwesomeIcon icon={faFileCode}/>
                            </Scrollchor>
                            <Scrollchor to="#contact" className="home-link active">
                                <FontAwesomeIcon icon={faAt}/>
                            </Scrollchor>
                        </nav>
                        <ul>
                            <li><a href="https://twitter.com/JeznachJacek" target="_blank"><i
                                className="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="https://pl.linkedin.com/pub/jacek-jeznach/40/9b6/a9" target="_blank">
                                <i className="fa fa-linkedin"/></a>
                            </li>
                            <li><a href="https://www.facebook.com/pages/JJ-Front-End-Web-Developer/1065969103428564"
                                   target="_blank"><i className="fa fa-facebook"/></a></li>
                            <li><a href="https://jacekjeznach.com/feed/" target="_blank"><i className="fa fa-rss"/></a>
                            </li>
                        </ul>
                        <a id="mobile-link" href=""><i className="fa fa-bars"/></a>
                    </div>
                    {children}
                </main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>

            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
