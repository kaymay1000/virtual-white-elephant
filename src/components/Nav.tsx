import Icon from './Icon';
import MobileNav from './MobileNav';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMedia } from 'use-media';
import { useNavigate } from 'react-router-dom';

export type NavProps = {
  navItems?: JSX.Element;
}

const Nav = ({
  navItems
}: NavProps): JSX.Element => {

  const [showMobileNav, setShowMobileNav] = useState(false);
  
  const isMobile = useMedia({maxWidth: '640px'});
  const navigate = useNavigate();

  return (
    <div>
      {/* mobile nav */}
      <MobileNav
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      
      {/* large screen nav */}
      <header>
        <nav>
          <div className="w-full h-16 p-4 bg-green-100 text-center">
            <div className="flex justify-between">
              {isMobile ? 
                <button className="text-2xl flex" onClick={() => navigate('/')}>VWE</button>
               : 
                <button className="text-2xl flex" onClick={() => navigate('/')}>Virtual White Elephant</button>
              }

              {isMobile ? (
                <button className="flex items-center" onClick={() => setShowMobileNav(true)}>
                  <Icon iconName={faBars}></Icon>
                </button>
                ): (
                  <div className="flex items-center">
                    <button className="flex text-sm ml-4 hover:underline" onClick={() => navigate('/how-to-play')}>How to Play</button>
                    <button className="flex text-sm ml-4 hover:underline" onClick={() => navigate('/about-the-developer')}>About the Developer</button>
                  </div>
                )
              }
            </div>
          </div>
        </nav>
      </header>
    </div>
   
  )
}

export default Nav;
