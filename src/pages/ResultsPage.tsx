import { useNavigate } from 'react-router-dom';

type ResultsPageProps = {
  aProp?: boolean;
}

const ResultsPage = ({
  aProp
}: ResultsPageProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div>This is the results page!</div>
      <button 
        onClick={() => navigate('/')}
        className='border-solid border-2 border-black px-2 rounded hover:bg-green-100'
      >
        Share
      </button>
    </div>
  )
}

export default ResultsPage;
