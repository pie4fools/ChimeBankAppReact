import React from 'react';
import HeroSection from '../../Components/HeroSection';
import { homeObjTwo } from './Data';
import Pricing from '../../Components/Pricing';

function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;