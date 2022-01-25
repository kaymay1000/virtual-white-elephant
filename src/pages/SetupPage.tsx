import PlayerForm from '../components/PlayerForm';

const SetupPage = () => {

  return (
    <div>
      {/* <Nav/> */}
      <div className="text-center max-h-screen py-8 px-6 overflow-auto">
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
