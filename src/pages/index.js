/* eslint-disable no-unused-vars */
import React from 'react';
import loadable from '@loadable/component';
import SEO from '../components/seo';
import AboutPage from '../components/containers/AboutPage/AboutPage';
import ExpPage from '../components/containers/ExpPage/ExpPage';
import ProjectsGrid from '../components/containers/Projects/ProjectsGrid';
import BlogSection from '../components/containers/Blog/Blog';
import ContactForm from '../components/ContactForm/ContactForm';
import Layout from '../components/layout';
import SvgHeader from '../components/layout/SvgHeader/SvgHeader';
import styles from '../assets/styles/layout.module.scss';
import Gdpr from '../components/Gdpr/gdpr';

const FooterSvgLoadable = loadable(() =>
  import('../components/layout/SvgFooter/SvgFooter')
);
const HeaderSvgLoadable = loadable(() =>
  import('../components/layout/SvgHeader/SvgHeader')
);
const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Sin Gatsby Portfolio"
        description="An overkill portfolio project to showcase some of my skills"
        keywords={[`gatsby`, `application`, `react`]}
      />

      <section id="home">
        <HeaderSvgLoadable />
        {/*<SvgHeader />*/}
      </section>

      <AboutPage />
      <ExpPage />
      <ProjectsGrid />
      <BlogSection />

      <footer>
        <div className={styles.footerContainer}>
          <FooterSvgLoadable />
          <ContactForm />
        </div>
      </footer>

      <Gdpr
        agreeText="I Agree"
        declineText="I Agree ( in red )"
        gdprText="This website DOESNT use a single cookie xD"
        bothBtnClasses="btn-sin-normal"
        agreeBtnClasses="btn-sin-normal__primary"
        declineBtnClasses="btn-sin-normal__red"
      />
    </Layout>
  );
};

export default IndexPage;
