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
        
        <div className="border-solid border-2 border-gray p-2 md:mx-2">
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-sm md:text-base">Add New Gift</h1>
            </div>
            <div className="flex flex-col mx-auto md:flex-row md:justify-between">
              <div className="flex flex-col mx-auto md:mx-4">
                <label 
                  htmlFor='gift name'
                  className="flex justify-center text-sm md:text-base"
                >
                  Gift Name
                </label>
                <input type="text" name="gift name" className="border-solid border-2 border-black px-1 my-2 w-44"/>
              </div>
              <div className="flex flex-col mx-auto md:mx-4">
                <PlayerDropdown players={players}></PlayerDropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-6">
          <div className="border-solid border-2 border-gray p-1 md:p-2 md:w-1/2 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Current Opener</h1>
            <p className="text-sm md:text-base">Someone's Name</p>
          </div>
          
          <div className="border-solid border-2 border-gray p-1 md:p-2 mt-6 md:w-1/2 md:mt-0 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Next Opener</h1>
            <p className="text-sm md:text-base">Someone's Name</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row mt-6">
          <div className="border-solid border-2 border-gray p-1 md:p-2 md:w-1/2 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Active Gifts</h1>
            <div className="text-sm md:text-base">
              <ol>
                <li>This is where an active gift will go</li>
                <li>This is where an active gift will go</li>
                <li>This is where an active gift will go</li>
              </ol>
            </div>
          </div>
          
          <div className="border-solid border-2 border-gray p-1 md:p-2 mt-6 md:w-1/2 md:mt-0 md:mx-2">
            <h1 className="font-bold text-sm md:text-base">Frozen Gifts</h1>
            <div className="text-sm md:text-base">
              <ol>
                <li>This is where a frozen gift will go</li>
                <li>This is where a frozen gift will go</li>
                <li>This is where a frozen gift will go</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end mt-6">
          <button 
            className="border-solid border-2 border-black px-2 mx-2 rounded hover:bg-green-100 text-sm md:text-base" 
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
