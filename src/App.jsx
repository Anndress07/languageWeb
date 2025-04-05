import React, {useRef} from 'react'
import Navbar from './components/Navbar/Navbar'
import WelcomeHeader from './components/WelcomeHeader/WelcomeHeader'
import WelcomeBody from './components/WelcomeBody/WelcomeBody'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'


const App = () => {
  const headerRef = useRef(null);
  
  return (
    <div>
      <WelcomeHeader ref={headerRef} />
      <Navbar headerRef={headerRef}/>
      <Navbar fade={false}/>
      <WelcomeBody/>
      <div>
       
      </div>
      
      
      

      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
      <h1> test </h1>
    </div>
  )
}

export default App