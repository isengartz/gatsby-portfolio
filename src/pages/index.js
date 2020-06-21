import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../components/containers/AboutPage/AboutPage";
import ExpPage from "../components/containers/ExpPage/ExpPage";
import ProjectsGrid from "../components/containers/Projects/ProjectsGrid";
import BlogSection from "../components/containers/Blog/Blog";
import loadable from '@loadable/component'
import ContactForm from "../components/ContactForm/ContactForm";
import Skills from "../components/containers/Skills/Skills";
import SvgHeader from "../components/layout/SvgHeader/SvgHeader"
import svgImg from "../images/svg/footer.svg"
import styles from "../assets/styles/layout.module.scss"
const FooterSvgLoadable = loadable(() => import('../components/layout/SvgFooter/SvgFooter'));
// const HeaderSvgLoadable = loadable(() => import('../components/layout/SvgHeader/SvgHeader'));
const IndexPage = ({isDarkMode, dispatch, data}) => {

    return (
        <Layout>

            <SEO title="Sin Gatsby Portfolio" keywords={[`gatsby`, `application`, `react`]}/>

            <section id="home">
                <SvgHeader/>
            </section>

            {/*<HeaderSvgLoadable/>*/}


            {/*<div style={{height:'100vh',background:'red'}}></div>*/}


            <AboutPage/>

            <ExpPage/>
            <section>

                <Skills/>
            </section>



            {/*<ProjectsGrid/>*/}

            <BlogSection/>


            <footer>
                <div className={styles.footerContainer}>
                    {/*<FooterSvgLoadable/>*/}
                    <div style={{height:'100vh',backgroundImage:`url(${svgImg})`,backgroundPosition:'center',backgroundSize:'cover'}}></div>
                    <ContactForm/>
                </div>

            </footer>


        </Layout>
    )
}

export default IndexPage
