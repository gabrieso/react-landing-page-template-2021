import React from 'react';

import ReactGA from 'react-ga4';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import CVUploadForm from '../components/CVUploadform';
import Features from '../components/Features';
import Header from '../components/Header';
import Hotjar from '../components/Hotjar';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const TRACKING_ID = 'G-KRGGQ3ZDBR';

const App = () => {
  ReactGA.initialize(TRACKING_ID);
  // Send pageview with a custom path
  ReactGA.send({
    hitType: 'pageview',
    page: '/landingpage',
    title: 'Landing Page',
  });

  return (
    <div className="bg-background overflow-hidden">
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <Header />
            <MainHero />
          </div>
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 lg:pt-20">
            <MainHeroImage />
          </div>
        </div>
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <CVUploadForm />
      <LazyShow>
        <>
          <Canvas />
        </>
      </LazyShow>
      <Hotjar hotjarId="4969754" hotjarVersion="6" />
      <Analytics />
    </div>
  );
};

export default App;
