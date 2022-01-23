import Icon from './Icon';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="w-full h-16 bg-gray-200 text-center">
      <div className="flex justify-between">
        <p className="text-2xl p-4 flex font-bold">Virtual White Elephant</p>
        <div className="flex">
           <Icon iconName={faBars}></Icon>
        </div>
       
      </div>
      
    </div>
  )
}

export default Header;
