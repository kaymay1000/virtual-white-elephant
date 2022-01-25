import Nav from '../components/Nav';
import Footer from '../components/Footer';

type HomePageProps = {
  aProp?: boolean;
}

const HomePage = ({
  aProp
}: HomePageProps): JSX.Element => {
  return (
    <div>
      <Nav/>
      <div>This is the home page!</div>
      <Footer/>
    </div>
  )
}

export default HomePage;
