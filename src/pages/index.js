import React,{useState,useEffect} from "react"
import {graphql,withPrefix} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "../assets/styles/pages/index.module.scss"
import Col from "react-bootstrap/Col";
import 'react-vertical-timeline-component/style.min.css';
import SvgHeader from '../components/layout/SvgHeader/SvgHeader'
import AboutPage from "../components/containers/AboutPage/AboutPage";
import ExpPage from "../components/containers/ExpPage/ExpPage";
import ProjectsGrid from "../components/containers/Projects/ProjectsGrid";
import BlogSection from "../components/containers/Blog/Blog";
import Helmet from "react-helmet"
import SvgFooter from "../components/layout/SvgFooter/SvgFooter";

const IndexPage = ({isDarkMode, dispatch, data}) => {
    const [isLoaded,setIsLoaded]= useState(false);
    useEffect( ()=> {
        setIsLoaded(true);
    },[])
    return (
        <Layout>
            {/*<Helmet>*/}
            {/*    <script src={withPrefix('pace.js')} type="text/javascript" />*/}
            {/*</Helmet>*/}
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
            <Container fluid={true} className="p-0 m-0" id="home">
                <Row>
                    <Col>
                        <SvgHeader loaded={isLoaded}/>
                    </Col>
                </Row>
            </Container>
            <div className="clearfix"/>


            <AboutPage/>

            <ExpPage/>
            {/*<SinTimeline/>*/}

            <ProjectsGrid/>

            <BlogSection/>
            <SvgFooter/>

        </Layout>
    )
}
export const query = graphql`
    query HomePageQuery {
        file(relativePath: {eq: "animations/developer-1.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
export default IndexPage
