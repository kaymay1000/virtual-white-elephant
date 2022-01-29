type ActiveGiftsProps = {
  allGifts: Array<{name: string}>;
}

const ActiveGifts = ({
  allGifts,
}: ActiveGiftsProps): JSX.Element => {

  return (
    <div className="text-sm md:text-base">
      <ol>
         {allGifts.map(gift => { return <li key={gift.name}>{gift.name}</li> })}
      </ol>
    </div>
  )
}

export default ActiveGifts;
