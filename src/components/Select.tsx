import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import Icon from './Icon';
import { faChevronDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

type SelectProps = {
  options?: Array<{name: string}>;
  stringOptions?: string[];
  label: string;
}

const Select = ({
  options,
  stringOptions,
  label
}: SelectProps): JSX.Element => {

  const [selectedOption, setSelectedOption] = useState();

  return (
    <>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Label className="text-sm md:text-base">{label}</Listbox.Label>
          <div className="flex justify-between items-center border-2 border-black px-2 my-2 w-36 md:w-44">
            <p className="text-sm md:text-base">{selectedOption}</p>
            <Listbox.Button className="pl-28">
              <Icon iconName={faChevronDown}></Icon>
            </Listbox.Button>
          </div>
          <Listbox.Options className="max-h-16 md:max-h-20 w-full overflow-auto border-black border-2">
            {options?.map((option) => (
              <Listbox.Option
                key={options.indexOf(option)}
                value={option.name}
                className="text-sm md:text-base px-2 hover:bg-green-400"
              >
                {/* active and selected are Render Props provided by HeadlessUI */}
                {/* https://headlessui.dev/react/listbox#styling-the-active-and-selected-option */}
                {({ active, selected }) => (
                  <div className={`flex justify-between ${active ? 'font-bold' : 'font-normal'}`}>
                    <p className="text-sm md:text-base">{option.name}</p>
                    <div>{selected && <Icon iconName={faCheckCircle}></Icon>}</div>
                  </div>
                )}
              </Listbox.Option>
            ))}

            {stringOptions?.map((option) => (
              <Listbox.Option
                key={stringOptions.indexOf(option)}
                value={option}
                className="text-sm md:text-base px-2 hover:bg-green-400"
              >
                {/* active and selected are Render Props provided by HeadlessUI */}
                {/* https://headlessui.dev/react/listbox#styling-the-active-and-selected-option */}
                {({ active, selected }) => (
                  <div className={`flex justify-between ${active ? 'font-bold' : 'font-normal'}`}>
                    <p className="text-sm md:text-base">{option}</p>
                    <div>{selected && <Icon iconName={faCheckCircle}></Icon>}</div>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
      </Listbox>
    </>
    
  )
}

export default Select;
