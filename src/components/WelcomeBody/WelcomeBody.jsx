import React, {forwardRef} from 'react';
import './WelcomeBody.css';
// import '../FeatureCards/FeatureCards.css'



const WelcomeBody = () => {
  return (
    <div>
      <div className='smallSeparator'></div>
      <div className='textTitle1'> ReadStage is a language learning tool that grants you instant translation and meaning of words or sentences in a given text. <br/>
        It comes along with a skill-based text suggestion system that will push your learning goals to the next level, faster. <br/>
        Also, it has flashcards and notes for your own, personal progress.   </div>
      <div className='welcomeBodyImage'>
        <div>
          <h1> start learning now</h1> 
          {/* <p> descriptionnnn</p> */}
          {/* <button className='btn'> get started - it's free</button> */}
          <h1 style={{ marginTop: '40px' }}> or sign in for a better experience</h1> 
          {/* <p> descriptionnnn</p> */}
          {/* <button className='btn' > sign in - it's also free</button> */}
          
        </div>
      </div>
         {/* <span style={{ fontWeight: 'bold', fontFamily: '"Inter", sans-serif' }}>fast, efficiently</span> */}
      
    </div>

  );
}


export default WelcomeBody;