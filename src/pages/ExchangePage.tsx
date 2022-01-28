import PlayerDropdown from '../components/PlayerDropdown';
import ActiveGifts from '../components/ActiveGifts';
import FrozenGifts from '../components/FrozenGifts';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const ExchangePage = (): JSX.Element => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const playerFormData = location.state;
  const [playerDropdownValues, setPlayerDropdownValues] = useState(playerFormData);

  return (
    <div className="w-full mx-auto max-h-screen overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">Exchange</h1>
        {/* TODO: eventually want to render the name of the Host here */}
        <p>Host, this is your time to shine!</p>
        <p className="pb-4 md:pb-8">Log each gift as it's opened, as well as any time a gift is stolen.</p>
      </div>
      <div className="w-full h-full p-6 overflow-auto border-2 border-gray">
        
        <div className="flex flex-col md:flex-row">

          <div className="border-2 border-gray p-2 md:p-2 md:w-1/2 md:mx-2">
            <div className="flex flex-col">
              <h1 className="font-bold text-sm md:text-base">Add New Gift</h1>
              <div className="flex flex-col mx-auto xl:flex-row xl:justify-between">
                <div className="mx-auto md:mx-2">
                  <label 
                    htmlFor='gift name'
                    className="flex justify-center text-sm md:text-base"
                  >
                    Gift Name
                  </label>
                  <input type="text" name="gift name" className="border-2 border-black px-1 my-2 w-44"/>
                </div>
                <div className="mx-auto md:mx-2">
                  <PlayerDropdown players={playerDropdownValues}/>
                </div>
                <div className="flex flex-col justify-end mx-2">
                  <button className="border-2 border-black px-2 my-2 rounded hover:bg-green-400 text-sm md:text-base">Add</button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray p-2 md:p-2 mt-6 md:w-1/2 md:mt-0 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Unopened Gifts Remaining</h1>
            <p className="text-sm md:text-base">This is where the unopened gift count will go</p>
          </div>
        </div>
        

        <div className="flex flex-col md:flex-row mt-6">
          <div className="border-2 border-gray p-2 md:p-2 md:w-1/2 md:mx-2">
            <h1 className="font-bold text-sm md:text-base md:mb-2">Current Opener</h1>
            <div className="flex flex-col md:flex-row justify-around items-center">
              <p className="text-sm md:text-base">Someone's Name</p>
              <button className="border-2 border-black px-2 rounded hover:bg-green-400 text-sm md:text-base">Advance to Next Opener</button>
            </div>

            
          </div>
          
          <div className="border-2 border-gray p-2 md:p-2 mt-6 md:w-1/2 md:mt-0 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Next Opener</h1>
            <p className="text-sm md:text-base">Someone Else's Name</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row mt-6">
          <div className="border-2 border-gray p-2 md:p-2 md:w-1/2 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Active Gifts</h1>
            <ActiveGifts/>
          </div>
          
          <div className="border-2 border-gray p-2 md:p-2 mt-6 md:w-1/2 md:mt-0 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Frozen Gifts</h1>
            <FrozenGifts/>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end mt-6">
          <button 
            className="border-2 border-black px-2 mx-2 rounded hover:bg-green-400 text-sm md:text-base" 
            onClick={() => navigate('/results')}
          >
            Complete Exchange
          </button>
        </div>
        
      </div>

    </div>
    
  )
}

export default ExchangePage;
