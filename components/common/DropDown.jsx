import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const DropDown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative min-w-full py-1 text-left sm:text-sm text-slate-400 text-xs">
            <span className="block w-16 xl:w-auto truncate">
              {selected[Object.keys(options[0])]}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <img src="../../assets/icons/arrow-down.svg" alt="" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 min-w-max overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scrollbar-none z-20 w-full">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none p-2 lg:p-3 text-xs lg:text-sm ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block w-full text-xs   ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option[Object.keys(options[0])]}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DropDown;
