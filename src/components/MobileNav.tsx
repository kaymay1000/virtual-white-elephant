import { Fragment } from 'react';
import Icon from './Icon';
import { NavProps } from './Nav';
import { Dialog, Transition } from '@headlessui/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type MobileNavProps = {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  // navItems: NavProps;
}

const MobileNav = ({
  showMobileNav,
  setShowMobileNav,
  // navItems
}: MobileNavProps): JSX.Element => {
  return (
    <Transition show={showMobileNav} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-10 bg-blue-500 w-2/5"
        onClose={setShowMobileNav}
      >
        <Dialog.Overlay className="fixed inset-0 opacity-30 bg-black z-0"></Dialog.Overlay>
        <Transition.Child
          as={Fragment}
          enter="transform duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform duration-200"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="flex flex-col w-full p-6 z-10">
            <div className="flex justify-start hover:cursor-pointer">
              <button 
                className="hover:cursor-pointer items-start"
                onClick={() => setShowMobileNav(false)}
              >
                <Icon iconName={faTimes}></Icon>
              </button>
            </div>
            
            <div className="flex flex-col pt-2">
              <button className="flex justify-start text-xl hover:text-white py-2">Item 1</button>
              <button className="flex justify-start text-xl hover:text-white py-2">Item 2</button>
              <button className="flex justify-start text-xl hover:text-white py-2">Item 3</button>
            </div>
          </div>
          
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default MobileNav;
