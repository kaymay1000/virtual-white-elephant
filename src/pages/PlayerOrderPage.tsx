import Nav from '../components/Nav';
import Footer from '../components/Footer';

type PlayerOrderPageProps = {
  aProp?: boolean;
}

const PlayerOrderPage = ({
  aProp
}: PlayerOrderPageProps): JSX.Element => {
  return (
    <div className="text-center">
      <Nav/>
      <div>This is the player order page!</div>
      <Footer/>
    </div>
  )
}

export default PlayerOrderPage;
