import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Svg from '../images/svg/illustatus.inline.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ width: '100%', height: '100vh' }}>
      <Svg />
    </div>
  </Layout>
);

export default NotFoundPage;
