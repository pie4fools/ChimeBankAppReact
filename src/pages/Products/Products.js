import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjTwo } from './Data';
import Pricing from '../../components/Pricing';

function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;