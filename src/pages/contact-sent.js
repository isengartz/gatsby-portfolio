import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NewButton from '../components/layout/Buttons/NewButton/newButton';

const ContactSentPage = () => {
  return (
    <Layout>
      <SEO title="Thank you - Contact Sent" />
      <div style={{ width: '100%', height: '100vh' }}>
        <div
          className="text-center"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h1 className="customHeadings">Message Sent!</h1>
          <p className="color-white">
            I've Received your message and I will get back to you soon!
          </p>
          <p className="p-5 m-5">
            <NewButton type="internalLink" to="/">Back To Home</NewButton>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactSentPage;
