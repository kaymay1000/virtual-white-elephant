import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

type PlayerOrderPageProps = {
  aProp?: boolean;
}

const PlayerOrderPage = ({
  aProp
}: PlayerOrderPageProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="text-center">
      {/* <Nav/> */}
      <div>This is the player order page!</div>
      <button 
        onClick={() => navigate('/exchange')}
        className='border-solid border-2 border-black px-2 rounded hover:bg-green-100'
      >
        Start Exchange
      </button>
      {/* <Footer/> */}
    </div>
  )
}

export default PlayerOrderPage;
