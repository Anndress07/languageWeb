import React, {forwardRef} from 'react';
import './WelcomeBody.css';

const WelcomeBody = () => {
  return (
    <div>
      <div className='smallSeparator'></div>
      <div className='textTitle1'> Reading is one of the <span style={{ fontWeight: 'bold' }}>best</span> ways <br/>
      <span style={{ fontSize: '1.2em', fontFamily: '"Inter", sans-serif' }}>to get better at a language</span> </div>
    </div>

  );
}

export default WelcomeBody;