type EmojiProps = {
  label?: string;
  symbol: any;
}

const Emoji = ({
  label,
  symbol
}: EmojiProps): JSX.Element => {
  return (
    <span
      className=""
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  )
}

export default Emoji;
