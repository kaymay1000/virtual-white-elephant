import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import Icon from './Icon';
import { faChevronDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

type SelectProps = {
  objectArray?: Array<{name: string}>;
  stringArray?: Array<string>;
  value: any;
  onValueChange?: any;
  label: string;
}

const Select = ({
  objectArray,
  stringArray,
  label,
  value,
  onValueChange
}: SelectProps): JSX.Element => {

  const handleChange = (newValue: string) => {
    onValueChange(newValue);
  }

  return (
    <>
      <Listbox 
        value={value}
        onChange={handleChange}
      >
        <Listbox.Label className="text-sm md:text-base">{label}</Listbox.Label>
          <div className="flex justify-between items-center border-2 border-black px-2 my-2 w-36 md:w-44">
            <p className="text-sm md:text-base">{value}</p>
            <Listbox.Button>
              <Icon iconName={faChevronDown}></Icon>
            </Listbox.Button>
          </div>

          <Listbox.Options className="max-h-16 md:max-h-20 w-full overflow-auto border-black border-2">
            
            {stringArray?.map((option) => (
              <Listbox.Option
                key={stringArray.indexOf(option)}
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

            {objectArray?.map((option) => (
              <Listbox.Option
                key={objectArray.indexOf(option)}
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
          </Listbox.Options> 
      </Listbox>
    </>
  )
}

export default Select;
