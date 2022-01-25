import Nav from '../components/Nav';
import HowToPlayModal from '../components/HowToPlayModal';
import Footer from '../components/Footer';
import { useState } from 'react';

type HowToPlayPageProps = {
  aProp?: boolean;
}

const HowToPlayPage = ({
  aProp
}: HowToPlayPageProps): JSX.Element => {

  const [showHowToPlay, setShowHowToPlay] = useState(true);

  return (
    <div>
      {/* <Nav/> */}
      <div className="text-center">This is the how to play page!</div>
      { showHowToPlay ? <HowToPlayModal showHowToPlay={showHowToPlay} setShowHowToPlay={setShowHowToPlay}/> : <></> }
      {/* <Footer/> */}
    </div>
  )
}

export default HowToPlayPage;
