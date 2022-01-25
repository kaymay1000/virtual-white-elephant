import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

type HomePageProps = {
  aProp?: boolean;
}

const HomePage = ({
  aProp
}: HomePageProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="text-center">
      {/* <Nav/> */}
      <div>This is the home page!</div>
      <button 
        className="border-solid border-2 border-black px-2 rounded hover:bg-green-100" 
        onClick={() => navigate('/setup')}
      >
        Get Started
      </button>
      {/* <Footer/> */}
    </div>
  )
}

export default HomePage;
