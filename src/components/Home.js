import React, { Fragment } from 'react'
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

const Home = () => {
  const data = {
    name: "thapa store",
  };

  return (
    <Fragment>
      <HeroSection myData={data} />
      <Services />
      <Trusted />

    </Fragment>
  );


};

export default Home;