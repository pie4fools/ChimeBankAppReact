import React from 'react';
import HeroSection from '../../Components/HeroSection';
import { homeObjThree } from './Data';
import Login from '../../Components/Login';

function Loginpage() {
    return (
        <>
            <Login />
            <HeroSection {...homeObjThree} />
        </>
    );
}

export default Loginpage;