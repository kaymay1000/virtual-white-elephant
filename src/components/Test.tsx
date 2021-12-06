interface TestProps {
  testProp?: boolean;
}

const Test = ({
  testProp,
}: TestProps): JSX.Element => {
  return (
    <div>
      <p>This is the Test page!</p>
      <p>Here's a prop: {testProp}</p>
    </div>
  )
}

export default Test;
