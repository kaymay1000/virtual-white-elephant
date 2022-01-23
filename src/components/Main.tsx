import PlayerDropdown from './PlayerDropdown';

interface MainProps {
  aProp?: boolean;
}

// ex of how to declare a type and then use it

// type PlayerProps = {
//   id: number;
//   name: string;
// }

// const players: PlayerProps[] = [
//   {id: 1, name: 'Beau'}, 
//   {id: 2, name: 'Winston'}, 
//   {id: 3, name: 'Greg'}
// ];

const players = [
  {id: 1, name: 'Beau'}, 
  {id: 2, name: 'Winston'}, 
  {id: 3, name: 'Greg'}
];

const Main = ({
  aProp,
}: MainProps): JSX.Element => {
  return (
    <div className="border-dotted border-2 border-blue-500 p-2">
      <p>This is the Main page!</p>
      <p>Here's a prop: {aProp}</p>
      <PlayerDropdown players={players}></PlayerDropdown>
    </div>
  )
}

export default Main;
