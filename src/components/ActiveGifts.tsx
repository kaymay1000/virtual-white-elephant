import { useState } from 'react';

type ActiveGiftsProps = {
  currentGifts: Array<{name: string, currentOwner: string}>;
  allGifts: Array<string>;
  players: Array<{name: string, currentGift?: string}>;
  giftToUpdate?: string;
  playerToUpdate?: string;
  handleUpdateGift: any;
}

const ActiveGifts = ({
  allGifts,
  currentGifts,
  players,
  giftToUpdate,
  playerToUpdate,
  handleUpdateGift
}: ActiveGiftsProps): JSX.Element => {

  console.log('allGifts in ActiveGifts: ', allGifts);
  // console.log('currentGifts in ActiveGifts: ', currentGifts);
  console.log('players in ActiveGifts: ', players);
  console.log('giftToUpdate in ActiveGifts: ', giftToUpdate);
  console.log('playerToUpdate in ActiveGifts: ', playerToUpdate);

  // const [currentPairs, setCurrentPairs] = useState([]);
  // const [updateGift, setUpdateGift] = useState(giftToUpdate);
  // const [updatePlayer, setUpdatePlayer] = useState(playerToUpdate);
  const [allGiftsArray, setAllGiftsArray] = useState(allGifts);
  const [currentGiftsArray, setCurrentGiftsArray] = useState(currentGifts);

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



  // const checkIfUpdateNeeded = () => {
  //   // let getNewOwner = playerToUpdate && giftToUpdate ? players.filter((player) => player.name = playerToUpdate) : '';
  //   let currentOwner = currentGifts.filter(gift => gift.currentOwner === playerToUpdate)[0].name;
  //   // let currentGift = playerToUpdate && giftToUpdate ? currentGifts.indexOf({name: giftToUpdate, currentOwner: ''}) : '';
  //   let currentGift = currentGifts.filter(gift => gift.name === giftToUpdate)[0];
  //   let currentGiftIndex = giftToUpdate ? currentGifts.indexOf(currentGift) : '';
  //   console.log('currentOwner in ActiveGifts: ', currentOwner);
  //   console.log('currentGift in ActiveGifts: ', currentGift);
  //   currentGifts[currentGiftIndex].currentOwner = playerToUpdate;
  //   // setUpdatePlayer(getNewOwner[0].name);
    
  // }

  // checkIfUpdateNeeded();

  // const updateOwner = () => {
  //   players.map(player => { 
  //     console.log('player in active gifts map: ', player);
  //     // player.name === playerToUpdate ? <li key={player.name}>{player.name}</li> : <></>
  //     let pairToUpdate = currentPairs.filter(pair => pair.player = playerToUpdate)[0];
  //     player.name === playerToUpdate ? console.log('match') : console.log('not a match');
  //     // player.name === playerToUpdate ? currentPairs.filter(pair => pair.player = playerToUpdate)[0]
  //   })
  // }

  handleUpdateGift(currentGifts, playerToUpdate, giftToUpdate);

  return (
    <div className="text-sm md:text-base flex justify-around">
      <div>
        <h2 className="text-sm md:text-base">Gift</h2>
        <ol>
          {/* {players.map(player => { return <li key={player.name}>{player.currentGift}</li> })} */}
          {/* {gifts.map(gift => { return <li key={gift.name}>{gift.name}</li> })} */}
          {currentGifts.map(gift => { return <li key={gift.name}>{gift.name}</li> })}
        </ol>
      </div>
      
      <div>
        <h2 className="text-sm md:text-base">Current Owner</h2>
        <ol>
          {/* {players.map(player => { return <li key={player.name}>{player.name}</li> })} */}
          {/* {gifts.map(gift => { return <li key={gift.name}>{gift.currentOwner}</li> })} */}
          {currentGifts.map(gift => { return <li key={gift.name}>{gift.currentOwner}</li> })}
          {/* {currentPairs} */}
        </ol>
      </div>
     
    </div>
  )
}

export default ActiveGifts;
