import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import Icon from './Icon';
import { faChevronDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

type SelectProps = {
  valueArray: Array<{name: string}>;
  // TODO: figure out how to properly type these
  value: any;
  onValueChange?: any;
  label: string;
  // hasGifts?: boolean;
}

const Select = ({
  valueArray,
  label,
  value,
  onValueChange,
  // hasGifts
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
            <Listbox.Button 
              // disabled={!hasGifts}
            >
              <Icon iconName={faChevronDown}></Icon>
            </Listbox.Button>
          </div>
          <Listbox.Options className="max-h-16 md:max-h-20 w-full overflow-auto border-black border-2">
            {valueArray?.map((option) => (
              <Listbox.Option
                key={valueArray.indexOf(option)}
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
