import PlayerForm from '../components/PlayerForm';

const SetupPage = () => {

  return (
    <div className="w-full md:w-3/5 mx-auto max-h-screen overflow-auto">
      <div>
        <h1 className="text-2xl font-bold">Let's get things set up.</h1>
        <p className="pb-4 md:pb-8">Enter each player's name, then click Next.</p>
      </div>
      <PlayerForm/>
    </div>
  )
}

export default SetupPage;
