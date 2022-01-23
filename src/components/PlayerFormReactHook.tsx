import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from './Icon';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

type PlayerFormReactHookProps = {
  numPlayers?: number;
}

type PlayerFormReactHookData = {
  // players: Array<{ name: string, id: number }>
  firstName: string;
  lastName: string;
  id: number;
}

// const initialValues: PlayerFormValues = {
//   players: []
// }

const PlayerFormReactHook = ({
  numPlayers,
}: PlayerFormReactHookProps) => {

  // let playersArray: Array<{name: string, id: number}> = [...Array(numPlayers)];
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<PlayerFormReactHookData>();
  const onSubmit = handleSubmit(data => console.log(data));

  // const [value, setValue] = useState('');
  // const [players, setPlayers] = useState(playersArray)

  // console.log('players: ', players)

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('event.target.value: ', event.target.value);
  //   console.log('players in handleChange: ', players)
  //   setValue(event.target.value);
  // }
  
  // const handleDeletePlayer = (event) => {
  //   console.log('in delete handler');
  // }

  //  {
  //         players.length > 0 &&
  //         players.map((player, index) => (
  //           <div key={index}>
  //             <label htmlFor={`player-${index}`}>Name</label>
  //             <input
  //               type="text"
  //               name={`player-${index}`}
  //               value={value}
  //               onChange={handleChange}
  //             />
  //             {/* <button onClick={handleDeletePlayer}>
  //               <Icon iconName={faTrash}></Icon>
  //             </button> */}
  //           </div>
  //         ))
  //       }

  return (
    <div>
      <h1>Player Names</h1>   
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />
        <input type="submit" />
      </form>
        

    </div>
  )
};

export default PlayerFormReactHook;
