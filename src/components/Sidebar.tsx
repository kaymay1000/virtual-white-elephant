import { Fragment } from 'react';
import Icon from './Icon';
import { NavProps } from './Nav';
import { Dialog, Transition } from '@headlessui/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

type SidebarProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setshowWhiteElephantBasics: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHowToUseVWE: React.Dispatch<React.SetStateAction<boolean>>;
  // navItems: NavProps;
}

const Sidebar = ({
  showSidebar,
  setShowSidebar,
  setshowWhiteElephantBasics,
  setShowHowToUseVWE
  // navItems
}: SidebarProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <Transition show={showSidebar} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-y-0 right-0 flex z-10 bg-green-400 w-3/5 md:w-2/5"
        onClose={setShowSidebar}
      >
        <Dialog.Overlay className="fixed inset-0 opacity-30 bg-black z-0"></Dialog.Overlay>
        <Transition.Child
          as={Fragment}
          enter="transform duration-200"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform duration-200"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="flex flex-col w-full p-6 z-10">
            <div className="flex justify-end hover:cursor-pointer">
              <button 
                className="hover:cursor-pointer items-start"
                onClick={() => setShowSidebar(false)}
              >
                <Icon iconName={faTimes}/>
              </button>
            </div>
            
            <div className="flex flex-col pt-2">
              <button 
                className="flex justify-start text-sm underline hover:text-green-100 py-2" 
                onClick={() => {
                  setShowSidebar(false);
                  setshowWhiteElephantBasics(true);
                }}>
                  White Elephant Basics
              </button>
              <button 
                className="flex justify-start text-sm underline hover:text-green-100 py-2" 
                onClick={() => {
                  setShowSidebar(false);
                  setShowHowToUseVWE(true);
                }}>
                  VWE How-To
              </button>
              <button 
                className="flex justify-start text-sm underline hover:text-green-100 py-2" 
                onClick={() => {
                  setShowSidebar(false);
                  navigate('/about-the-developer');
                }}>
                  About
                </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default Sidebar;
