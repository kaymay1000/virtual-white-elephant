import Icon from './Icon';
import MobileNav from './MobileNav';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export type NavProps = {
  navItems?: JSX.Element;
}

const Nav = ({
  navItems
}: NavProps): JSX.Element => {

  const [showMobileNav, setShowMobileNav] = useState(false);

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
          <div className="w-full h-16 bg-gray-200 text-center">
            <div className="flex justify-between">
              <button className="flex items-center p-4" onClick={() => setShowMobileNav(true)}>
                <Icon iconName={faBars}></Icon>
              </button>
              <p className="text-2xl p-4 flex font-bold">Virtual White Elephant</p>
            </div>
          </div>
        </nav>
      </header>
    </div>
   
  )
}

export default Nav;
