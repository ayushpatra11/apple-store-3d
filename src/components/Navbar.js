import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import './Navbar.css';
import {Link as LinkS, animateScroll as scroll} from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar]=useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  function handleNavbar(){
    if(window.scrollY>=80){
        setNavbar(true);
        setClick(false);
    }else if(window.scrollY<80){
        setNavbar(false);
    }
    // console.log(window.scrollY);
}

window.addEventListener('scroll', handleNavbar);

const toggleHome= () =>{
  scroll.scrollToTop();
}

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <>
      <nav className={navbar ? 'navbar active': 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={toggleHome}>
          <i class="fab fa-apple"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <NavHashLink to='/' className='nav-links' 
                smooth scroll={el => scrollWithOffset(el)} 
                >
                  Home
                </NavHashLink>
            </li>
            <li className='nav-item'>
              <NavHashLink
                smooth scroll={el => scrollWithOffset(el)}
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buy
              </NavHashLink>
            </li>
            <li className='nav-item'>
              <NavHashLink
              smooth scroll={el => scrollWithOffset(el)}
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Me
              </NavHashLink>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;