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
              <ul className="list-disc">
                <li>Designate one player to be the host, who will be in charge of updating VWE throughout the exchange.</li>
                <li>Each player places their gift in view of their webcam.</li>
                <li>Each player "draws" a number at random (VWE will handle this for you).</li>
                <li>Player #1 chooses which gift he or she would like to "open", and has the player who brought that gift unveil it on camera for all to see.</li>
                <li>Player #2 has two options: choose another gift to open, or steal Player #1's gift.</li>
                <li>If your gift is stolen, you may either choose a new gift to open or steal another gift.</li>
                <li>A gift can only be stolen twice after its initial opening- after two steals, the gift "dies" and remains with its third/final owner.</li>
                <li>Gameplay continues sequentially until each player has gotten a chance to either open a new gift, or steal an existing one.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
} 

export default HowToPlayModal;
