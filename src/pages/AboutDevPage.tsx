type AboutDevPageProps = {
  aProp?: boolean;
}

const AboutDevPage = ({
  aProp
}: AboutDevPageProps): JSX.Element => {
  return (
    <div className="text-center">
      <div>This is the about the developer page!</div>
    </div>
  )
}

export default AboutDevPage;
