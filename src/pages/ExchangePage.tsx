import PlayerDropdown from '../components/PlayerDropdown';
import ActiveGifts from '../components/ActiveGifts';
import FrozenGifts from '../components/FrozenGifts';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const ExchangePage = (): JSX.Element => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const playerFormData = location.state;
  const numPlayers = playerFormData.length;
  const [playerDropdownValues, setPlayerDropdownValues] = useState(playerFormData);
  const [unopenedGiftsRemaining, setUnopenedGiftsRemaining] = useState(numPlayers);

  return (
    <div className="w-full mx-auto max-h-screen overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">Exchange</h1>
        {/* TODO: eventually want to render the name of the Host here */}
        <p>Host, this is your time to shine!</p>
        <p className="pb-4 md:pb-6">Log each gift as it's opened, as well as any time a gift is stolen.</p>
      </div>

      {/* Main wrapper */}
      <div className="w-full h-full p-6 overflow-auto border-2 border-gray">
        {/* Actions wrapper */}
        <div className="border-2 border-green-400 border-dashed py-6 px-4">
          <h1 className="text-xl font-bold mb-1">Actions</h1>
          {/* Actions sub component wrapper */}
          <div className="flex flex-col md:flex-row">
            {/* Actions sub component */}
            <div className="border-2 border-gray p-2 md:w-1/2 md:mx-2">
              <div className="flex flex-col">
                <h1 className="font-bold text-sm md:text-base">Log New Gift</h1>
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
            {/* Actions sub component */}
            <div className="border-2 border-gray p-2 md:w-1/2 md:mx-2">
              <div className="flex flex-col">
                <h1 className="font-bold text-sm md:text-base">Log a Steal</h1>
                <div className="flex flex-col mx-auto xl:flex-row xl:justify-between">
                  <div className="mx-auto md:mx-2">
                    {/* will eventually be active gifts instead of playerDropdownValues */}
                    <PlayerDropdown players={playerDropdownValues}/>
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
            {/* Actions sub component */}
            <div className="flex items-center md:mx-2">
              <button className="border-2 border-black px-2 h-1/2 rounded hover:bg-green-400 text-sm md:text-base">Advance to Next Opener</button>
            </div>
          </div>
        </div>
      
        {/* Info wrapper */}
        <div className="border-2 border-green-400 border-dashed py-6 px-4 mt-6">
          <h1 className="text-xl font-bold mb-1">Info</h1>
          {/* Info sub component wrapper */}
          <div className="border-2 border-gray p-2 mx-auto md:w-1/2">
            <h1 className="font-bold text-sm md:text-base">Unopened Gifts Remaining</h1>
            <p className="text-sm md:text-base">{unopenedGiftsRemaining}</p>
          </div>

          {/* Info sub component wrapper */}
          <div className="flex flex-col md:flex-row mt-6">
            <div className="border-2 border-gray p-2 md:w-1/2 md:mx-2">
              <h1 className="font-bold text-sm md:text-base md:mb-2">Current Opener</h1>
              <p className="text-sm md:text-base">Someone's Name</p>
            </div>
            <div className="border-2 border-gray p-2 mt-6 md:w-1/2 md:mt-0 md:mx-2">
              <h1 className="font-bold text-sm md:text-base">Next Opener</h1>
              <p className="text-sm md:text-base">Someone Else's Name</p>
            </div>
          </div>
        
          {/* Info sub component wrapper */}
          <div className="flex flex-col md:flex-row mt-6">
            <div className="border-2 border-gray p-2 md:w-1/2 md:mx-2">
              <h1 className="font-bold text-sm md:text-base">Active Gifts</h1>
              <ActiveGifts/>
            </div>
            <div className="border-2 border-gray p-2 mt-6 md:w-1/2 md:mt-0 md:mx-2">
              <h1 className="font-bold text-sm md:text-base">Frozen Gifts</h1>
              <FrozenGifts/>
            </div>
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
