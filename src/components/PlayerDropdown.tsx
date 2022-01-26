import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import Icon from './Icon';
import { faChevronDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

type PlayerDropdownProps = {
  players: Array<{id: number, name: string}>;
}

const PlayerDropdown = ({
  players,
}: PlayerDropdownProps): JSX.Element => {

  const [selectedPlayer, setSelectedPlayer] = useState(players[0].name);
  
  return (
    <div className="w-1/2 mx-auto py-4">
      <Listbox value={selectedPlayer} onChange={setSelectedPlayer}>
        <Listbox.Label className='font-bold'>Player Name:</Listbox.Label>
          <div className="flex justify-between border-solid border-2 border-black p-2">
            <p>{selectedPlayer}</p>
            <Listbox.Button>
              <Icon iconName={faChevronDown}></Icon>
            </Listbox.Button>
            
          </div>
          <Listbox.Options>
            {players.map((player) => (
              <Listbox.Option
                key={player.id}
                value={player.name}
              >
                {/* active and selected are Render Props provided by HeadlessUI */}
                {/* https://headlessui.dev/react/listbox#styling-the-active-and-selected-option */}
                {({ active, selected }) => (
                  <li className={`flex justify-between ${active ? 'font-bold' : 'font-normal'}`}>
                    <p>{player.name}</p>
                    <div>{selected && <Icon iconName={faCheckCircle}></Icon>}</div>
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
      </Listbox>
    </div>
    
  )
}

export default PlayerDropdown;
