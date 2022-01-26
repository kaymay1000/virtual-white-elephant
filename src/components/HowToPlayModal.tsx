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
              <ul>
                <li>Designate one participant to be the Host</li>
                <li>Each Participant places their gift in view of their webcam</li>
                <li>Each Participant "draws" a number at random</li>
                <li>Participant #1 chooses which gift they'd like to "open", and has the Participant who brought that gift unveil it on camera for all to see</li>
                <li>Participant #2 has two options: choose another gift to open, or steal Participant #1's gift</li>
                <li>If your gift is stolen, you may either choose a new gift to open or steal another gift</li>
                <li>A gift can only be stolen twice after its initial opening-- after two steals, the gift "dies" and remains with its third/final owner</li>
                <li>Gameplay continues sequentially until each Participant has gotten a chance to either open a new gift, or steal an existing one</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
} 

export default HowToPlayModal;
