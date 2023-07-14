import React, { Fragment } from 'react'
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import FeatureProduct from './FeatureProduct';

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <Fragment>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />

    </Fragment>
  );


};

export default Home;