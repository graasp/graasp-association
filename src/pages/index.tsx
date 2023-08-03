import React, { RefObject, useRef } from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Partners from '@sections/Partners';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import Background from '@sections/Background';
import ScrollSpy from 'react-ui-scrollspy';

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <ScrollSpy offsetTop={72} offsetBottom={72}>
        <Background>
          <Header />
        </Background>
        <About />
        <Partners />
        <Team />
        <Faq />
      </ScrollSpy>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
