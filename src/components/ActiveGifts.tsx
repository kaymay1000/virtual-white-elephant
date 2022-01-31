import { useState } from 'react';

type ActiveGiftsProps = {
  currentGifts?: Array<{name: string, currentOwner: string}>;
  // allGifts: Array<string>;
  // players: Array<{name: string, currentGift?: string}>;
  // giftToUpdate?: string;
  // playerToUpdate?: string;
  onUpdateGift?: any;
}

const ActiveGifts = ({
  // allGifts,
  currentGifts,
  // players,
  // giftToUpdate,
  // playerToUpdate,
  onUpdateGift
}: ActiveGiftsProps): JSX.Element => {

  // console.log('allGifts in ActiveGifts: ', allGifts);
  // console.log('players in ActiveGifts: ', players);
  // console.log('giftToUpdate in ActiveGifts: ', giftToUpdate);
  // console.log('playerToUpdate in ActiveGifts: ', playerToUpdate);

  const handleUpdateGift = (currentGifts: Array<{name: string, currentOwner: string}>) => {
    onUpdateGift(currentGifts);
  }

  if(currentGifts) {
    handleUpdateGift(currentGifts);
  }
  

  return (
    <div className="text-sm md:text-base flex justify-around">
      <div>
        <h2 className="text-sm md:text-base">Gift</h2>
        <ol>
          {/* {players.map(player => { return <li key={player.name}>{player.currentGift}</li> })} */}
          {/* {gifts.map(gift => { return <li key={gift.name}>{gift.name}</li> })} */}
          {currentGifts?.map(gift => { return <li key={gift.name}>{gift.name}</li> })}
          {/* {handleUpdateGift(currentGifts)} */}
        </ol>
      </div>
      
      <div>
        <h2 className="text-sm md:text-base">Current Owner</h2>
        <ol>
          {/* {players.map(player => { return <li key={player.name}>{player.name}</li> })} */}
          {/* {gifts.map(gift => { return <li key={gift.name}>{gift.currentOwner}</li> })} */}
          {currentGifts?.map(gift => { return <li key={gift.name}>{gift.currentOwner}</li> })}
          {/* {currentPairs} */}
        </ol>
      </div>
     
    </div>
  )
}

export default ActiveGifts;
