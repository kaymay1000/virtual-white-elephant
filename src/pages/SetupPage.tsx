import PlayerForm from '../components/PlayerForm';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import PlayerFormTemp from '../components/PlayerFormTemp';

const SetupPage = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="text-center max-h-screen py-8 px-6 overflow-auto">
        <div>
          <h1 className="text-2xl font-bold">Let's get things set up.</h1>
          <p>Enter each player's name, then click Next.</p>
        </div>
        <PlayerForm></PlayerForm>
        {/* <PlayerFormTemp></PlayerFormTemp> */}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SetupPage;
