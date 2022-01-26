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
    <div className="text-center">
      <div >This is the exchange page!</div>
      <PlayerDropdown players={players}></PlayerDropdown>
      <button 
        className="border-solid border-2 border-black px-2 rounded hover:bg-green-100" 
        onClick={() => navigate('/results')}
      >
        Complete Exchange
      </button>
    </div>
    
  )
}

export default ExchangePage;
