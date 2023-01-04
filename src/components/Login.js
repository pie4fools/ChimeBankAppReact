import React from 'react';
import './Login.css';
import { Button } from './Button';



function Login() {
  return (
    <div className='subscribe-container'>
      <section className='log-subscription'>
        <div className='input-areas'>
          <form>
            <input
              className='log-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <input
              className='log-input'
              name='password'
              type='password'
              placeholder='Password'
            />
            <Button className='LogBtn' buttonStyle='btn--subscribe' buttonColor='blue'>Login</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;