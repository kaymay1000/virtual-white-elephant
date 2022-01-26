import { useNavigate } from 'react-router-dom';

type ResultsPageProps = {
  aProp?: boolean;
}

const ResultsPage = ({
  aProp
}: ResultsPageProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
       <div>
        <h1 className="text-2xl font-bold">Gift Exchange Results</h1>
        <p>Awesome job! Hopefully you ended up with something great.</p>
        <p className="pb-4 md:pb-8">Click Share to email a copy of the results to whoevers wants one.</p>
      </div>

      <div className="max-w-full flex flex-col h-80 px-6 pb-6 pt-4 overflow-auto border-solid border-2 border-gray">
        <h1 className="text-lg md:text-2xl">Results</h1>
        <div className="my-4">
          <ol className="list-none list-inside">
            <li>Player 1: Gift 1</li>
            <li>Player 2: Gift 2</li>
            <li>Player 3: Gift 3</li>
          </ol>
        </div>
        
        <div className="flex justify-center md:justify-end mt-6">
          <button 
            onClick={() => navigate('/')}
            className='border-solid border-2 border-black px-2 rounded hover:bg-green-100'
          >
            Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage;
