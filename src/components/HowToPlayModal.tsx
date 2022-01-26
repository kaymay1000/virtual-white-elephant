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
    <Dialog open={showHowToPlay} onClose={setShowHowToPlay} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>

        <div className="relative bg-white rounded max-w-xs md:max-w-lg lg:max-w-xl p-4 mx-auto">
          <div className="flex justify-end">
            <button onClick={() => setShowHowToPlay(false)}>
              <Icon iconName={faTimes}/>
            </button>
          </div>
          
          <div className="px-4 pb-4">
            <Dialog.Title className="text-center font-bold">How To Play</Dialog.Title>
            <div className="py-2">
              <p>This is the where the gameplay instructions will go.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt architecto magnam neque unde perferendis, 
                sed tempora, ab earum eos praesentium a corrupti dignissimos possimus laborum animi nisi quos in harum.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </Dialog>
  )
} 

export default HowToPlayModal;
