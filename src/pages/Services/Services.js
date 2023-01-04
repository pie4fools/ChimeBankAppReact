import React from 'react';
import HeroSection from '../../Components/HeroSection';
import { homeObjOne } from './Data';
import Pricing from '../../Components/Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;