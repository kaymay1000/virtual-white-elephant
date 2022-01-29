import { useState } from 'react';

type ActiveGiftsProps = {
  gifts: Array<{name: string}>;
  players: Array<{name: string, currentGift?: string}>;
  giftToUpdateWith?: string;
  playerToUpdate?: string;
}

const ActiveGifts = ({
  gifts,
  players,
  giftToUpdateWith,
  playerToUpdate
}: ActiveGiftsProps): JSX.Element => {

  console.log('gifts in ActiveGifts: ', gifts);
  console.log('players in ActiveGifts: ', players);
  console.log('giftToUpdateWith in select: ', giftToUpdateWith);
  console.log('playerToUpdate in select: ', playerToUpdate);

  // const [currentPairs, setCurrentPairs] = useState([]);

  // const generatePairs = (players: {name: string, currentGift?: string}[]) => {
  //   let pairsArray = [];
  //   players.map(player => {
  //     console.log('player in generatePairs', player);
  //     let pairObj = {player: '', gift: ''};
  //     pairObj.player = player.name;
  //     pairObj.gift = player.currentGift;
  //   })
  // }

  // generatePairs(players);

  // const updateOwner = () => {
  //   players.map(player => { 
  //     console.log('player in active gifts map: ', player);
  //     // player.name === playerToUpdate ? <li key={player.name}>{player.name}</li> : <></>
  //     let pairToUpdate = currentPairs.filter(pair => pair.player = playerToUpdate)[0];
  //     player.name === playerToUpdate ? console.log('match') : console.log('not a match');
  //     // player.name === playerToUpdate ? currentPairs.filter(pair => pair.player = playerToUpdate)[0]
  //   })
  // }

  // updateOwner();

  return (
    <div className="text-sm md:text-base flex justify-around">
      <div>
        <h2 className="text-sm md:text-base">Gift</h2>
        <ol>
          {/* {players.map(player => { return <li key={player.name}>{player.currentGift}</li> })} */}
          {players.map(player => { return <li key={player.name}>{player.currentGift}</li> })}
        </ol>
      </div>
      
      <div>
        <h2 className="text-sm md:text-base">Current Owner</h2>
        <ol>
          {/* {currentPairs} */}
        </ol>
      </div>
     
    </div>
  )
}

export default ActiveGifts;
