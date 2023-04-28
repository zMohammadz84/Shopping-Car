import React from "react";
import DropDown from "@common/DropDown";
import Swap from "@/public/icons/Swap";
import Radio from "@/components/common/Radio";

const times = [
  { time: "07 : 00" },
  { time: "08 : 00" },
  { time: "09 : 00" },
  { time: "10 : 00" },
  { time: "11 : 00" },
  { time: "12 : 00" },
];

const dates = [
  { date: "15 February 2022" },
  { date: "20 August 2023" },
  { date: "8 March 2022" },
  { date: "5 July 2021" },
  { date: "01 January 2020" },
  { date: "10 April 2019" },
];

const locations = [
  { location: "Isfahan" },
  { location: "Tehran" },
  { location: "Yazd" },
  { location: "MashHad" },
  { location: "Qom" },
  { location: "Ardebil" },
];

const PickUpAndDropUp = () => {
  return (
    <section className="mt-5 relative flex flex-col gap-11 sm:gap-6 lg:flex-row lg:items-center lg:px-0 px-5 ">
      <div className="flex flex-col bg-primary-0 p-4 rounded-10 flex-1">
        <div className="flex items-center gap-2 mb-5">
          <Radio label="Pick - Up" name="radio" id="pickUp" />
        </div>
        <div className="flex justify-between">
          <div className="  relative flex flex-col text-sm flex-1 xl:text-base border-r mr-5 pr-1.5 ">
            <span className="font-bold mb-2">Locations</span>
            <DropDown options={locations} />
          </div>
          <div className="flex flex-col text-sm flex-1 xl:text-base border-r mr-5 pr-1.5">
            <span className="font-bold mb-2">Date</span>
            <DropDown options={dates} />
          </div>
          <div className="flex flex-col text-sm flex-1 xl:text-base ">
            <span className="font-bold mb-2">Time</span>
            <DropDown options={times} />
          </div>
        </div>
      </div>
      <button className="bg-primary-500 shadow-xl shadow-[rgba(16,50,147,0.32)] rounded-10 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:mx-1 ">
        <Swap />
      </button>
      <div className="flex flex-col bg-primary-0 p-4 rounded-10 flex-1">
        <div className="flex items-center gap-2 mb-5">
          <Radio label="Drop - Up" name="radio" id="dropUp" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col text-sm flex-1 xl:text-base border-r mr-5 pr-1.5">
            <span className="font-bold mb-2">Locations</span>
            <DropDown options={locations} />
          </div>
          <div className="flex flex-col text-sm flex-1 w-2/3 xl:text-base border-r mr-5 pr-1.5">
            <span className="font-bold mb-2">Date</span>
            <DropDown options={dates} />
          </div>
          <div className="flex flex-col text-sm flex-1 xl:text-base ">
            <span className="font-bold mb-2">Time</span>
            <DropDown options={times} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickUpAndDropUp;
