import React from 'react';
import './Subscribe.css';
import { Button } from '../../Components/Button';



function Subscribe() {
  return (
    <div className='subscribe-container'>
      <section className='sub-subscription'>
        <p className='subscribe-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='subscribe-subscription-text'>
          You can unsubscribe at any time.
        </p>
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
              name='name'
              type='name'
              placeholder='Name'
            />
            <input
              className='subscribe-input'
              name='password'
              type='password'
              placeholder='Password'
            />
            <Button className='subbtn' buttonStyle='btn--outline' buttonColor='blue'>Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;