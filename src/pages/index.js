import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Partners from '@sections/Partners';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import Background from '@sections/Background';

const IndexPage = () => (
  <Layout>
    <Background>
      <Navbar />
      <Header />
    </Background>
    <About />
    <Partners />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
