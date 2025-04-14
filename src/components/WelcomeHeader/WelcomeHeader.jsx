import React, {forwardRef} from 'react';
import './WelcomeHeader.css';
import { Link } from 'react-router-dom';

const WelcomeHeader = forwardRef((props, ref)  => {
  return (
    <div className='welcomeHeader container' ref={ref}>
      <div className='welcomeHeader-text'>
        <h1> start learning now</h1> 
        {/* <p> descriptionnnn</p> */}
        <button> <Link to='/login'>get started - it's free</Link></button>
        <h1 style={{ marginTop: '40px' }}> or sign in for a better experience</h1> 
        {/* <p> descriptionnnn</p> */}
        <button > sign in - it's also free</button>
      </div>
      
    </div>
  )
})


export default WelcomeHeader
