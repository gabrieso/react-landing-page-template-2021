import React from 'react';

import ReactGA from 'react-ga4';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import CVUploadForm from '../components/CVUploadform';
import Features from '../components/Features';
import Header from '../components/Header';
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
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
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

      <Analytics />
    </div>
  );
};

export default App;
