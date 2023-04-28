import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import ArrowDown from "@/public/icons/ArrowDown";

export default function Select({ label, options }) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <label className="mb-3 block">{label}</label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="border-none outline-none bg-secondary-300/10 rounded-10 w-full text-sm text-secondary-300 flex justify-between items-center p-4">
            <span className="block truncate">
              {selected[Object.keys(options[0])]}
            </span>
            <span className="pointer-events-none inset-y-0 right-0 flex items-center pr-2">
              <ArrowDown />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {options.map((person, personIdx) => (
                <Listbox.Option
                  disabled={person === options[0]}
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-xs lg:text-sm  ${
                      active && person !== options[0]
                        ? "bg-amber-100 text-amber-900"
                        : "text-gray-900"
                    } ${person === options[0] && "text-secondary-300"}`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person[Object.keys(person)[0]]}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
