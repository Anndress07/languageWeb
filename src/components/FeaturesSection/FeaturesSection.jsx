import React from 'react'
import './FeaturesSection.css'
import img1 from '../../assets/images/pexels-falling4utah-1934846.jpg'

const FeaturesSection = () => {
  return (
    <div className='features'>
      <div className='feature'>
        <img src={img1} alt=""/>
        <div className='caption'>
          <img src="" alt=""/>
          <p> Some text for img1</p>
        </div>
      </div>
      <div className='feature'>
        <img src={img1} alt=""/>
        <div className='caption'>
          <img src="" alt=""/>
          <p> Some text for img1</p>
        </div>
        
      </div>
      <div className='feature'>
        <img src={img1} alt=""/>
        <div className='caption'>
          <img src="" alt=""/>
          <p> Some text for img1</p>
        </div>
      </div>
      <div className='feature'>
        <img src={img1} alt=""/>
        <div className='caption'>
          <img src="" alt=""/>
          <p> Some text for img1</p>
        </div>
      </div>

      
    </div>
  )
}

export default FeaturesSection
