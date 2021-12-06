interface MainProps {
  aProp?: boolean;
}

const Main = ({
  aProp,
}: MainProps): JSX.Element => {
  return (
    <div className="border-dotted border-2 border-blue-500">
      <p>This is the Main page!</p>
      <p>Here's a prop: {aProp}</p>
    </div>
  )
}

export default Main;
