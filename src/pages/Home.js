import React from 'react';
import HeroSection from '../components/HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';
import Pricing from '../components/Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home