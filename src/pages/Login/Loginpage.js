import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjThree } from './Data';
import Login from '../../components/Login';

function Loginpage() {
    return (
        <>
            <Login />
            <HeroSection {...homeObjThree} />
        </>
    );
}

export default Loginpage;