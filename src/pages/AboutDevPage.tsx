import Nav from '../components/Nav';
import Footer from '../components/Footer';

type AboutDevPageProps = {
  aProp?: boolean;
}

const AboutDevPage = ({
  aProp
}: AboutDevPageProps): JSX.Element => {
  return (
    <div>
      <Nav/>
      <div>This is the about the developer page!</div>
      <Footer/>
    </div>
  )
}

export default AboutDevPage;
