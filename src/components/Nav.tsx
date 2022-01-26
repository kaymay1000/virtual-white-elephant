import Icon from './Icon';
import Sidebar from './Sidebar';
import Emoji from './Emoji';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMedia } from 'use-media';
import { useNavigate } from 'react-router-dom';

export type NavProps = {
  navItems?: JSX.Element;
  setshowWhiteElephantBasics: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHowToUseVWE: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({
  navItems,
  setshowWhiteElephantBasics,
  setShowHowToUseVWE
}: NavProps): JSX.Element => {

  const [showSidebar, setShowSidebar] = useState(false);

  const isMobile = useMedia({maxWidth: '640px'});
  const navigate = useNavigate();

  return (
    <>
      {/* mobile only */}
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setshowWhiteElephantBasics={setshowWhiteElephantBasics}
        setShowHowToUseVWE={setShowHowToUseVWE}
      />
      
      <header>
        <nav>
          <div className="w-full h-16 p-4 bg-green-100 text-center">
            <div className="flex justify-between">
              {isMobile ? 
                <button className="text-2xl flex" onClick={() => navigate('/')}>VWE <Emoji label='elephant emoji' symbol='🐘'/></button>
               : 
                <button className="text-2xl flex" onClick={() => navigate('/')}>Virtual White Elephant <Emoji label='elephant emoji' symbol='🐘'/></button>
              }

              {isMobile ? (
                <button className="flex items-center" onClick={() => setShowSidebar(true)}>
                  <Icon iconName={faBars}></Icon>
                </button>
                ): (
                  <div className="flex items-center">
                    <button className="flex text-sm ml-4 underline hover:text-green-400" onClick={() => {setshowWhiteElephantBasics(true);}}>White Elephant Basics</button>
                    <button className="flex text-sm ml-4 underline hover:text-green-400" onClick={() => {setShowHowToUseVWE(true);}}>VWE How-To</button>
                    <button className="flex text-sm ml-4 underline hover:text-green-400" onClick={() => navigate('/about-the-developer')}>About</button>
                  </div>
                )
              }
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav;
