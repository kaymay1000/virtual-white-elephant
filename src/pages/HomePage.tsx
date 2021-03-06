import Emoji from '../components/Emoji';
import { useNavigate } from 'react-router-dom';

const HomePage = (): JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className="w-full md:w-3/5 mx-auto max-h-screen overflow-auto bg-purple-100 p-12 rounded-xl">
      <h1 className="text-2xl font-bold">Virtual White Elephant</h1>
      <div>
        <img 
          className="object-cover h-12 w-12 mx-auto" 
          aria-label="Virtual White Elephant gift with gift tag logo" 
          src="../assets/gift_with_tag.png"
        />
      </div>
      
   
      <div className="pb-4">
        <p>
          Don't get stuck with those ugly socks (nobody wants your re-gift, Karen!), or that mystery-flavored jam 
          that's at <em>least</em> a decade old... let Virtual White Elephant handle the logistics of hosting a virtual gift exchange, 
          so all you have to do is kick back, relax, and watch your foolproof gift-swapping strategy unfold.
        </p>
      </div>
      
      <button 
        className="border-2 border-black px-2 rounded hover:bg-green-400" 
        onClick={() => navigate('/setup')}
      >
        Start a Gift Exchange
      </button>
    </div>
  )
}

export default HomePage;
