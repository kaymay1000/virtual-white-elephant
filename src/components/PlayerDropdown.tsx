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
    <>
      <Listbox value={selectedPlayer} onChange={setSelectedPlayer}>
        <Listbox.Label>Player Name</Listbox.Label>
          <div className="flex justify-between border-solid border-2 border-black px-2 my-2 w-44">
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
    </>
    
  )
}

export default PlayerDropdown;
