import Icon from './Icon';
import { Dialog } from '@headlessui/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type HowToPlayModalProps = {
  showHowToPlay: boolean;
  setShowHowToPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const HowToPlayModal = ({
  showHowToPlay,
  setShowHowToPlay
}: HowToPlayModalProps ): JSX.Element => {
  return (
    <Dialog open={showHowToPlay} onClose={setShowHowToPlay}>
      <Dialog.Overlay/>

      <Dialog.Title>How To Play</Dialog.Title>
      <button onClick={() => setShowHowToPlay(false)}>
        <Icon iconName={faTimes}/>
      </button>
      <div className="text-center">
        <p>This is the where the gameplay instructions will go.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt architecto magnam neque unde perferendis, 
          sed tempora, ab earum eos praesentium a corrupti dignissimos possimus laborum animi nisi quos in harum.
        </p>
      </div>

    </Dialog>
  )
} 

export default HowToPlayModal;
