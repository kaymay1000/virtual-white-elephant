type ActiveGiftsProps = {
  allGifts: Array<{name: string}>;
}

const ActiveGifts = ({
  allGifts,
}: ActiveGiftsProps): JSX.Element => {

  return (
    <div className="text-sm md:text-base flex justify-around">
      <div>
        <h2 className="text-sm md:text-base">Gift</h2>
        <ol>
          {allGifts.map(gift => { return <li key={gift.name}>{gift.name}</li> })}
        </ol>
      </div>
      
      <div>
        <h2 className="text-sm md:text-base">Current Owner</h2>
        <ol>
          {allGifts.map(gift => { return <li key={gift.name}>{gift.name}</li> })}
        </ol>
      </div>
     
    </div>
  )
}

export default ActiveGifts;
