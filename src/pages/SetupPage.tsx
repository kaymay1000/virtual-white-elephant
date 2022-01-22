import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
interface SetupPageProps {
  testProp?: boolean;
}

const SetupPage = ({
  testProp,
}: SetupPageProps): JSX.Element => {
  // react-router-dom v6 replaces useHistory with useNavigate
  const navigate = useNavigate();

  // initialState keys must match their corresponding field's "name" attribute
  const initialState = {
    numPlayers: 0,
  }

  // make use of custom useForm hook
  const { handleChange, handleSubmit, values } = useForm(setupFormCallback, initialState);

  async function setupFormCallback() {
    console.log('values: ', values);
    console.log('hitting callback');
    navigate('/');
  }

  return (
    <div className="border-solid border-2 border-red-500">
      <h1>Let's get things set up.</h1>
      <p>How many players are participating in the exchange?</p>
      <form onSubmit={handleSubmit}>
        <input 
          required
          type="text"
          // name must match corresponding key in initialState
          name="numPlayers"
          onChange={handleChange}
          className="border-solid border-2 border-black" 
          id="num-players-setup"
        />
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default SetupPage;
