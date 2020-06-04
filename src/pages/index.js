import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../assets/styles/pages/index.module.scss"
import Col from "react-bootstrap/Col";
import 'react-vertical-timeline-component/style.min.css';
import AboutPage from "../components/containers/AboutPage/AboutPage";
import ExpPage from "../components/containers/ExpPage/ExpPage";
import ProjectsGrid from "../components/containers/Projects/ProjectsGrid";
import BlogSection from "../components/containers/Blog/Blog";
import loadable from '@loadable/component'

// const FooterSvgLoadable = loadable( ()=> import('../components/layout/SvgFooter/SvgFooter'));
const HeaderSvgLoadable = loadable( ()=> import('../components/layout/SvgHeader/SvgHeader'));
const IndexPage = ({isDarkMode, dispatch, data}) => {

    return (
        <Layout>

            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
            <Container fluid={true} className="p-0 m-0" id="home">
                <Row>
                    <Col>
                        <HeaderSvgLoadable/>
                    </Col>
                </Row>
            </Container>
            <div className="clearfix"/>


            {/*<AboutPage/>*/}

            {/*<ExpPage/>*/}

            {/*<ProjectsGrid/>*/}

            {/*<BlogSection/>*/}
            {/*<FooterSvgLoadable/>*/}

        </Layout>
    )
}

export default IndexPage
