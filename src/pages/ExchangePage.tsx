import PlayerDropdown from '../components/PlayerDropdown';
import { useNavigate } from 'react-router-dom';

type ExchangePageProps = {
  aProp?: boolean;
}

const ExchangePage = ({
  aProp
}: ExchangePageProps): JSX.Element => {

  const navigate = useNavigate();

  const players = [
    {id: 1, name: 'Beau'}, 
    {id: 2, name: 'Winston'}, 
    {id: 3, name: 'Greg'}
  ];

  return (
    <div className="w-full mx-auto max-h-screen overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">Gift Exchange</h1>
        {/* TODO: eventually want to render the name of the Host here */}
        <p>Host, this is your time to shine!</p>
        <p className="pb-4 md:pb-8">Log each gift as it's opened, as well as any time a gift is stolen or becomes frozen.</p>
      </div>
      <div className="w-full h-full p-6 overflow-auto border-solid border-2 border-gray">
        
        <div className="border-solid border-2 border-gray p-2">
          <div className="flex flex-col">
            <h1 className="font-bold">Add New Gift</h1>
              <div className="flex justify-between">
                <div className="flex flex-col w-1/2 mx-2">
                  <label 
                    htmlFor='gift name'
                    className="text-sm md:text-base font-bold flex justify-center"
                  >
                    Gift Name
                  </label>
                  <input type="text" name="gift name" className="border-solid border-2 border-black px-1 my-2"/>
              </div>
              <div className="flex flex-col w-1/2 mx-2">
                <PlayerDropdown players={players}></PlayerDropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <div className="border-solid border-2 border-gray w-1/2 mx-2">
            <h1 className="font-bold">Current Opener</h1>
            <p>Someone's Name</p>
          </div>
          
          <div className="border-solid border-2 border-gray w-1/2 mx-2">
            <h1 className="font-bold">Next Opener</h1>
            <p>Someone's Name</p>
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <div className="border-solid border-2 border-gray w-1/2 mx-2">
            <h1 className="font-bold">Active Gifts</h1>
            <div>
              <ol>
                <li>This is where an active gift will go</li>
                <li>This is where an active gift will go</li>
                <li>This is where an active gift will go</li>
              </ol>
            </div>
          </div>
          
          <div className="border-solid border-2 border-gray w-1/2 mx-2">
            <h1 className="font-bold">Frozen Gifts</h1>
            <div>
              <ol>
                <li>This is where a frozen gift will go</li>
                <li>This is where a frozen gift will go</li>
                <li>This is where a frozen gift will go</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button 
            className="border-solid border-2 border-black px-2 rounded hover:bg-green-100" 
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
