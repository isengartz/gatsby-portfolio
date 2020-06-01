import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "./header"
import '../assets/styles/imports.scss'
import "./layout.css"
import styles from "../assets/styles/layout.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faCog,faFileCode,faAt,faRoute} from '@fortawesome/free-solid-svg-icons'
import Scrollchor from 'react-scrollchor';
import { bubble as Menu } from 'react-burger-menu'
// import { slide as Menu } from 'react-burger-menu'
import '../assets/styles/menu.scss'

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

                <div id="outer-container">
                    <Menu
                        pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
                    >

                        <nav className="en">
                            <ul>
                                <li>
                                    <Scrollchor to="#home" className="home-link active">
                                        <FontAwesomeIcon icon={faHome}/> Home
                                    </Scrollchor>
                                </li>
                                <li>
                                    <Scrollchor to="#about" className="">
                                        <FontAwesomeIcon icon={faUser}/> About
                                    </Scrollchor>
                                </li>
                                <li>
                                    <Scrollchor to="#journey" className="">
                                        <FontAwesomeIcon icon={faRoute}/> The Journey
                                    </Scrollchor>
                                </li>
                                <li>
                                    <Scrollchor to="#projects" className="home-link active">
                                        <FontAwesomeIcon icon={faFileCode}/> Projects
                                    </Scrollchor>
                                </li>
                                <li>
                                    <Scrollchor to="#contact" className="home-link active">
                                        <FontAwesomeIcon icon={faAt}/> Contact
                                    </Scrollchor>
                                </li>
                            </ul>

                        </nav>
                    </Menu>

                    <main id="page-wrap">
                        <div className={styles.Navbar}>


                            {/*<a id="mobile-link" href=""><i className="fa fa-bars"/></a>*/}
                        </div>
                        {children}
                    </main>
                </div>

                {/*<footer>*/}
                {/*    © {new Date().getFullYear()}, Built with*/}
                {/*    {` `}*/}
                {/*    <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
                {/*</footer>*/}

            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
