type ActiveGiftsProps = {
  aProp?: boolean;
}

const ActiveGifts = ({
  aProp,
}: ActiveGiftsProps): JSX.Element => {

  return (
    <div className="text-sm md:text-base">
      <ol>
        <li>This is where an active gift will go</li>
        <li>This is where an active gift will go</li>
        <li>This is where an active gift will go</li>
      </ol>
    </div>
  )
}

export default ActiveGifts;
