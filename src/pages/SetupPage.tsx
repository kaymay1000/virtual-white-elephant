import PlayerForm from '../components/PlayerForm';
import Header from '../components/Header';
// import PlayerFormFormikTwo from '../components/PlayerFormFormikTwo';

const SetupPage = () => {
  return (
    <div>
      <Header></Header>
      <div className="text-center h-screen pt-10 overflow-auto">
        <div>
          <h1 className="text-2xl font-bold">Let's get things set up.</h1>
          <p>Enter each player's name, then click Next.</p>
        </div>
        <PlayerForm></PlayerForm>
      </div>
    </div>
  )
}

export default SetupPage;
