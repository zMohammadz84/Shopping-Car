import Image from "next/image";
import React from "react";

const HeaderMain = () => {
  return (
    <section className="flex sm:justify-between justify-center gap-5 mt-5 px-5 lg:px-0">
      <div className="bg-information-500 rounded-10 h-56 lg:w-[42rem] lg:h-[22rem] relative">
        <div className="p-3 lg:p-5 space-y-3 absolute lg:w-96 ">
          <h3 className="text-lg text-white lg:text-4xl">
            The Best Platform for Car Rental
          </h3>
          <p className=" text-white text-xs lg:text-base">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="btn">Rental Car</button>
        </div>
        <Image
          className="block h-full w-full"
          src="/image/BG2.png"
          width={400}
          height={100}
          alt=""
          priority
        />
      </div>
      <div className="bg-primary-500 rounded-10 h-56 hidden sm:block lg:w-[42rem] lg:h-[22rem] relative">
        <div className="p-3 lg:p-5 space-y-3 absolute lg:w-96 ">
          <h3 className="text-lg text-white lg:text-4xl">
            Easy way to rent a car at a low price
          </h3>
          <p className=" text-white text-xs lg:text-base">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <button className="btn !bg-information-500">Rental Car</button>
        </div>
        <Image
          className="block h-full w-full"
          src="/image/BG.png"
          width={400}
          height={100}
          alt=""
          priority
        />
      </div>
    </section>
  );
};

export default HeaderMain;
