import { useNavigate } from 'react-router-dom';

type PlayerOrderPageProps = {
  aProp?: boolean;
}

const PlayerOrderPage = ({
  aProp
}: PlayerOrderPageProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="w-full md:w-3/5 mx-auto max-h-screen overflow-auto">
       <div>
        <h1 className="text-2xl font-bold">It's go time!</h1>
        <p>Players will open gifts in the order shown below.</p>
        <p className="pb-4 md:pb-8">There's no need to memorize your number. We'll let you know when it's your turn.</p>
      </div>
      <div className="max-w-full flex flex-col h-80 px-6 pb-6 pt-4 overflow-auto border-solid border-2 border-gray">
        <h1 className="text-lg md:text-2xl">Player Order</h1>
        <div className="my-4">
          <ol className="list-decimal list-inside">
            <li>Player One</li>
            <li>Player Two</li>
            <li>Player Three</li>
          </ol>
        </div>
        
        <div className="flex justify-center md:justify-end mt-6">
          <button 
            onClick={() => navigate('/exchange')}
            className='border-solid border-2 border-black px-2 rounded hover:bg-green-100'
          >
            Start Exchange
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default PlayerOrderPage;
