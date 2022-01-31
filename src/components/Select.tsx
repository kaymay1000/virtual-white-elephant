import { Listbox } from '@headlessui/react'
import Icon from './Icon';
import { faChevronDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

type SelectProps = {
  options: Array<{name: string}>;
  label: string;
  currentValue: any;
  onValueChange?: any;
}

const Select = ({
  options,
  label,
  currentValue,
  onValueChange
}: SelectProps): JSX.Element => {

  const handleChange = (newValue: string) => {
    onValueChange(newValue);
  }

  return (
    <>
      <Listbox 
        value={currentValue}
        onChange={handleChange}
      >
        <Listbox.Label className="text-sm md:text-base">{label}</Listbox.Label>
          <div className="flex justify-between items-center border-2 border-black px-2 my-2 w-36 md:w-44">
            <p className="text-sm md:text-base">{currentValue}</p>
            <Listbox.Button>
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
                {/* https://headlessui.dev/react/listbox#styling-the-active-and-selected-value */}
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
