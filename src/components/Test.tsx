interface TestProps {
  testProp?: boolean;
}

const Test = ({
  testProp,
}: TestProps): JSX.Element => {
  return (
    <div className="border-solid border-2 border-red-500">
      <p>This is the Test page!</p>
      <p>Here's a prop: {testProp}</p>
    </div>
  )
}

export default Test;
