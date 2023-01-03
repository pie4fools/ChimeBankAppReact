import React from 'react';
import './Login.css';
import { Button } from './Button';



function Login() {
  return (
    <div className='subscribe-container'>
      <section className='sub-subscription'>
        <div className='input-areas'>
          <form>
            <input
              className='subscribe-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <input
              className='subscribe-input'
              name='password'
              type='password'
              placeholder='Password'
            />
            <Button buttonStyle='btn--subscribe'>Login</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;