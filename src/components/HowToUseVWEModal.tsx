import Icon from './Icon';
import { Dialog } from '@headlessui/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type HowToUseVWEModalProps = {
  showHowToUseVWE: boolean;
  setShowHowToUseVWE: React.Dispatch<React.SetStateAction<boolean>>;
}

const HowToUseVWEModal = ({
  showHowToUseVWE,
  setShowHowToUseVWE
}: HowToUseVWEModalProps ): JSX.Element => {
  return (
    <Dialog open={showHowToUseVWE} onClose={setShowHowToUseVWE} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>

        <div className="relative bg-white rounded max-w-xs md:max-w-lg lg:max-w-xl p-4 mx-auto">
          <div className="flex justify-end">
            <button onClick={() => setShowHowToUseVWE(false)}>
              <Icon iconName={faTimes}/>
            </button>
          </div>
          
          <div className="px-4 pb-4">
            <Dialog.Title className="text-center font-bold">How to Use VWE</Dialog.Title>
            <div className="py-2">
              <ul className="list-disc">
                <li>A tip for using VWE</li>
                <li>Another tip</li>
                <li>One more tip</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
} 

export default HowToUseVWEModal;
