import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

type ExchangePageProps = {
  aProp?: boolean;
}

const ExchangePage = ({
  aProp
}: ExchangePageProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="text-center">
      <Nav/>
      <div >This is the exchange page!</div>
       <button 
        className="border-solid border-2 border-black px-2 rounded hover:bg-green-100" 
        onClick={() => navigate('/results')}
      >
        Complete Exchange
      </button>
      <Footer/>
    </div>
    
  )
}

export default ExchangePage;
