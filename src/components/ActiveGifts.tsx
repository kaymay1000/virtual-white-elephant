type ActiveGiftsProps = {
  currentGifts: Array<{name: string, currentOwner: string}>;
  onUpdateGift: any;
}

const ActiveGifts = ({
  currentGifts,
  onUpdateGift
}: ActiveGiftsProps): JSX.Element => {

  const handleUpdateGift = (currentGifts: Array<{name: string, currentOwner: string}>) => {
    onUpdateGift(currentGifts);
  }

  handleUpdateGift(currentGifts);
  
  return (
    <div className="text-sm md:text-base flex justify-around">
      <div>
        <h2 className="text-sm md:text-base">Gift</h2>
        <ol>
          {currentGifts.map(gift => { return <li key={gift.name}>{gift.name}</li> })}
        </ol>
      </div>
      <div>
        <h2 className="text-sm md:text-base">Current Owner</h2>
        <ol>
          {currentGifts.map(gift => { return <li key={gift.name}>{gift.currentOwner}</li> })}
        </ol>
      </div>
    </div>
  )
}

export default ActiveGifts;
