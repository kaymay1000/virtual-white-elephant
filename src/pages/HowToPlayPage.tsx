import HowToPlayModal from '../components/HowToPlayModal';
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
      <div className="text-center">This is the how to play page!</div>
      { showHowToPlay ? <HowToPlayModal showHowToPlay={showHowToPlay} setShowHowToPlay={setShowHowToPlay}/> : <></> }
    </div>
  )
}

export default HowToPlayPage;
