import React, { useState, useEffect } from 'react';
import PlayerFormTemp from '../components/PlayerFormTemp';

interface SetupPageTempProps {
  testProp?: boolean;
  // showPlayerForm: boolean;
}

const SetupPageTemp = ({
  testProp,
}: SetupPageTempProps): JSX.Element => {
  const [showPlayerForm, setShowPlayerForm] = useState(false);
  const [showNumPlayers, setShowNumPlayers] = useState(true);
  const [numPlayers, setNumPlayers] = useState(0);

  // react-router-dom v6 replaces useHistory with useNavigate
  // const navigate = useNavigate();

  // initialState keys must match their corresponding field's "name" attribute
  // const initialState = {
  //   numPlayers: 0,
  // }

  // make use of custom useForm hook
  // const { handleChange, handleSubmit, values } = useForm(setupFormCallback, initialState);

  // async function setupFormCallback() {
  //   console.log('values: ', values);
  //   console.log('hitting callback');
  //   navigate('/');
  // }

  console.log('numPlayers page load: ', numPlayers)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    console.log('event.target.value: ', event.target.value);
    setNumPlayers(parseInt(event.target.value));
  }

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowPlayerForm(!showPlayerForm);
    setShowNumPlayers(!showNumPlayers);
    console.log('submit event: ', event)
  }

  // useEffect(() => {}, [showPlayerForm])
  // useEffect(() => {}, [numPlayers])

  return (
    <div className="border-solid border-2 border-red-500 h-screen">
      {
        showNumPlayers ? (
          <div>
            <h1>Let's get things set up.</h1>
            <p>How many players are participating in the exchange?</p>
            <form onSubmit={handleSubmit}>
              <input 
                required
                type="text"
                // name must match corresponding key in initialState
                // value={numPlayers}
                name="numPlayers"
                onChange={handleChange}
                className="border-solid border-2 border-black" 
                id="num-players-setup"
              />
              <button type="submit">Next</button>
            </form>
          </div>
        ) : 
        <></>
      }

      {/* {showPlayerForm ? <PlayerFormTemp numPlayers={numPlayers}></PlayerFormTemp> : <></>} */}
    </div>
  )
}

export default SetupPageTemp;
