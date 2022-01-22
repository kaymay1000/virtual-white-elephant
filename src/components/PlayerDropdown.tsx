import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import Icon from './Icon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type PlayerDropdownProps = {
  players: Array<{id: number, name: string}>;
  // diff syntax
  // players: {id: number, name: string}[];
}

// interfaces have slightly diff syntax and are extendable, whereas types are not
// typically want to use types over interfaces
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// interface PlayerDropdownProps  {
//   players: Array<{id: number, name: string}>;
// }

const PlayerDropdown = ({
  players,
}: PlayerDropdownProps): JSX.Element => {

  const [selectedPlayer, setSelectedPlayer] = useState(players[0].name);
  return (
    <div className="border-solid border-2 border-black py-10">
      <Listbox value={selectedPlayer} onChange={setSelectedPlayer}>
        <Listbox.Label>Player Name:</Listbox.Label>
        <Listbox.Button>{selectedPlayer}</Listbox.Button>
        <Listbox.Options>
          {players.map((player) => (
            <>
              <Listbox.Option
              key={player.id}
              value={player.name}
              >
                {player.name}
              </Listbox.Option>
            </>
          ))}
        </Listbox.Options>
        <Icon iconName={faChevronDown}></Icon>
      </Listbox>
    </div>
    
  )
}

export default PlayerDropdown;
