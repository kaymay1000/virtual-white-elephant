type EmojiProps = {
  className?: string;
  label?: string;
  symbol: any;
}

const Emoji = ({
  className,
  label,
  symbol
}: EmojiProps): JSX.Element => {
  return (
    <span
      className={className ? className : ""}
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  )
}

export default Emoji;
