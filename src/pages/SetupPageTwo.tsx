import PlayerFormFormikTwo from '../components/PlayerFormFormikTwo';


const SetupPage = () => {
  return (
    <div className="text-center h-screen pt-10 overflow-auto">
      <div>
        <h1 className="text-2xl">Let's get things set up.</h1>
        <p>Enter each player's name, then click Next.</p>
      </div>
      <PlayerFormFormikTwo></PlayerFormFormikTwo>
    </div>
  )
}

export default SetupPage;
