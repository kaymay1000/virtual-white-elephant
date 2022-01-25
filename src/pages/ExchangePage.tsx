import Nav from '../components/Nav';
import Footer from '../components/Footer';

type ExchangePageProps = {
  aProp?: boolean;
}

const ExchangePage = ({
  aProp
}: ExchangePageProps): JSX.Element => {
  return (
    <div>
      <Nav/>
      <div>This is the exchange page!</div>
      <Footer/>
    </div>
    
  )
}

export default ExchangePage;
