interface MainProps {
  aProp?: boolean;
}

const Main = ({
  aProp,
}: MainProps): JSX.Element => {
  return (
    <div>
      <p>This is the Main page!</p>
      <p>Here's a prop: {aProp}</p>
    </div>
  )
}

export default Main;
