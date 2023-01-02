import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjThree } from './Data';
import Subscribe from '../Login/Login';

function SignUp() {
  return (
    <>
      <Subscribe/>
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;