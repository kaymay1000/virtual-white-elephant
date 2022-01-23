import { useState } from 'react';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type PlayerFormProps = {
  numPlayers?: number;
}

// interface PlayerFormValues {
//   players: Array<{ name: string, id: number }>
// }

// const initialValues: PlayerFormValues = {
//   players: []
// }

const PlayerForm = ({
  numPlayers,
}: PlayerFormProps) => {

  let playersArray: Array<{name: string, id: number}> = [...Array(numPlayers)];

  const [value, setValue] = useState('');
  const [players, setPlayers] = useState(playersArray)

  // console.log('players: ', players)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event.target.value: ', event.target.value);
    console.log('players in handleChange: ', players)
    setValue(event.target.value);
  }
  
  // const handleDeletePlayer = (event) => {
  //   console.log('in delete handler');
  // }

  return (
    <div>
      <h1>Player Names</h1>   
        {
          players.length > 0 &&
          players.map((player, index) => (
            <div key={index}>
              <label htmlFor={`player-${index}`}>Name</label>
              <input
                type="text"
                name={`player-${index}`}
                value={value}
                onChange={handleChange}
              />
              {/* <button onClick={handleDeletePlayer}>
                <Icon iconName={faTrash}></Icon>
              </button> */}
            </div>
          ))
        }

    </div>
  )
};

export default PlayerForm;
