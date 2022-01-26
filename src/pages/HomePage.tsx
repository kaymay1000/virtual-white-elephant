import Emoji from '../components/Emoji';
import { useNavigate } from 'react-router-dom';

type HomePageProps = {
  aProp?: boolean;
}

const HomePage = ({
  aProp
}: HomePageProps): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="w-full md:w-3/5 mx-auto max-h-screen overflow-auto">
      <h1 className="text-2xl font-bold">Virtual White Elephant <Emoji label='elephant emoji' symbol='🐘'/></h1>
      <div className="py-4">
        <p>
          Don't get stuck with those ugly socks (nobody wants your re-gift, Karen!), or that mystery-flavored jam 
          that's at least a decade old... let Virtual White Elephant handle the logistics of hosting a virtual gift exchange, 
          so all you have to do is kick back, relax, and watch your foolproof gift-swapping strategy unfold.
        </p>
      </div>
      
      <button 
        className="border-solid border-2 border-black px-2 rounded hover:bg-green-400" 
        onClick={() => navigate('/setup')}
      >
        Start a Gift Exchange
      </button>
    </div>
  )
}

export default HomePage;
