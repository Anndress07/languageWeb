
import './Navbar.css'
import logo from '../../assets/images/img1.png'
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ headerRef }) => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      setIsVisible(headerBottom  <= 0);
    
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef]);

  return (
    <nav className={`container ${isVisible ? 'visible' : 'hidden'}`}>
      <img src={logo} className="logo" alt = "" />
      <ul>
        <li> <Link to='textTitle1' smooth={true} duration={500} offset={-200}> Home </Link></li>
        <li><Link to='card-container' smooth={true} duration={500} offset={-200}> Features </Link></li>
        <li><button className='btn'>Contact</button></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
