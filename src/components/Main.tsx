import PlayerDropdown from './PlayerDropdown';

interface MainProps {
  aProp?: boolean;
}

const players = [
  {id: 1, name: 'Beau'}, 
  {id: 2, name: 'Winston'}, 
  {id: 3, name: 'Greg'}
];

const Main = ({
  aProp,
}: MainProps): JSX.Element => {
  return (
    <div className="border-dotted border-2 border-blue-500 p-2 h-screen">
      <p>This is the Main page!</p>
      <p>Here's a prop: {aProp}</p>
      <PlayerDropdown players={players}></PlayerDropdown>
    </div>
  )
}

export default Main;
