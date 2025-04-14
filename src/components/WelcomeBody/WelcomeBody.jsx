import React, {forwardRef} from 'react';
import './WelcomeBody.css';
// import '../FeatureCards/FeatureCards.css'
import Card from '../FeaturesSection/FeaturesSection';
import translationVector from "../../assets/images/translVecWhite.png"
import suggestionVector from "../../assets/images/suggestionVecWhite.png"
import flashcardVector from "../../assets/images/flashcardVector.png"
import databaseVector from  "../../assets/images/dbVector.png"


const WelcomeBody = () => {
  return (
    <div>
      <div className='smallSeparator'></div>
      <div className='textTitle1'> ReadStage is a language learning tool that grants you instant translation and meaning of words or sentences in a given text. <br/>
        It comes along with a skill-based text suggestion system that will push your learning goals to the next level, faster. <br/>
        Also, it has flashcards and notes for your own, personal progress.   </div>
        
      <div className='welcomeBodyImage'>
      <h1> Features</h1>
        <div className='card-container'>
          <Card 
            title={"Instant translation"}
            image={translationVector}
            imageSize={'110px'}
            topMargin={'60px'}
            leftMargin={'55px'} 
            description={"Get the meaning of words and senteces just by selecting them.  "}/>
          <Card 
            title={"Skill-based suggestions"}
            image={suggestionVector}
            imageSize={'130px'}
            topMargin={'65px'}
            leftMargin={'45px'}  
            description={"Adaptive content designed to be engaging for all-level learners.   "}/>
          <Card 
            title={"Flashcards and notes"} 
            image={flashcardVector}
            imageSize={'130px'}
            topMargin={'65px'}
            leftMargin={'45px'}  
            description={"Customizable tools aimed to improve your learning    "}/>
          <Card 
            title={"+10K different stories"} 
            image={databaseVector}
            imageSize={'85px'}
            topMargin={'70px'}
            leftMargin={'70px'}  
            description={"With a high variety of topics and skill levels! "}/>
        </div>
        

      </div>
         {/* <span style={{ fontWeight: 'bold', fontFamily: '"Inter", sans-serif' }}>fast, efficiently</span> */}
      
      <div className='bottomContainer'>
        <button>Log in</button>
        <button>Try it</button>
      </div>
    </div>
    

  );
}


export default WelcomeBody;