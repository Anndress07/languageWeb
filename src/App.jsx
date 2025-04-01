import React, {useRef} from 'react'
import Navbar from './components/Navbar/Navbar'
import WelcomeHeader from './components/WelcomeHeader/WelcomeHeader'
import WelcomeBody from './components/WelcomeBody/WelcomeBody'

const App = () => {
  const headerRef = useRef(null);
  
  return (
    <div>
      <WelcomeHeader ref={headerRef} />
      <Navbar headerRef={headerRef}/>
      <Navbar fade={false}/>
      <WelcomeBody/>
      
      

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