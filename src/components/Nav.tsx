import Icon from './Icon';
import MobileNav from './MobileNav';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMedia } from 'use-media';

export type NavProps = {
  navItems?: JSX.Element;
}

const Nav = ({
  navItems
}: NavProps): JSX.Element => {

  const [showMobileNav, setShowMobileNav] = useState(false);
  const isMobile = useMedia({maxWidth: '640px'});

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
          <div className="w-full h-16 bg-green-100 text-center">
            <div className="flex justify-between">
              <button className="flex items-center p-4" onClick={() => setShowMobileNav(true)}>
                <Icon iconName={faBars}></Icon>
              </button>
              {isMobile ? 
                <p className="text-2xl p-4 flex font-bold">VWE</p>
               : 
                <p className="text-2xl p-4 flex font-bold">Virtual White Elephant</p>
              }
            </div>
          </div>
        </nav>
      </header>
    </div>
   
  )
}

export default Nav;
