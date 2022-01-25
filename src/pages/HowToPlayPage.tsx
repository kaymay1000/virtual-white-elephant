import Nav from '../components/Nav';
import Footer from '../components/Footer';

type HowToPlayPageProps = {
  aProp?: boolean;
}

const HowToPlayPage = ({
  aProp
}: HowToPlayPageProps): JSX.Element => {
  return (
    <div>
      <Nav/>
      <div>This is the how to play page!</div>
      <Footer/>
    </div>
  )
}

export default HowToPlayPage;
