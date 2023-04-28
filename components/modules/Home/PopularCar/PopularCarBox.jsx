import React, { useContext } from "react";
import discountCalculation from "@/utils/discountCalculation";
import Image from "next/image";
// import { addFavoriteCar } from "@/store/favoriteSlice";
import GasStation from "@/public/icons/GasStation";
import Car from "@/public/icons/Car";
import Profile from "@/public/icons/Profile";
import Link from "next/link";
import LikeCar from "@/components/common/LikeCar";
import { FavoriteListContext } from "@/context/FavoriteListContext";

const PopularCarBox = (car) => {
  const {
    carName,
    price,
    steering,
    gasoline,
    capacity,
    typeCar,
    image,
    discount,
  } = car;

  return (
    <div className="bg-primary-0 rounded-10 p-4 flex-1 w-72 xl:w-80 mt-2">
      <header className="flex justify-between text-xs lg:text-sm">
        <div className="text-left flex flex-col">
          <span className="font-bold">{carName}</span>
          <span className="text-slate-400">{typeCar}</span>
        </div>
        <LikeCar car={car} />
      </header>
      <main>
        <Link
          href={`/${car.id}`}
          className=" relative h-32 flex justify-center items-end car-box-after w-56 m-auto lg:w-full "
        >
          <Image src={image} height={100} width={250} alt={carName} />
        </Link>
        <div className="flex justify-between gap-1 mt-14 text-xs lg:text-sm">
          <div className="flex items-center text-slate-400 gap-2">
            <GasStation />
            <span>{gasoline}</span>
          </div>
          <div className="flex items-center text-slate-400 gap-2">
            <Car />
            <span>{steering}</span>
          </div>
          <div className="flex items-center text-slate-400 gap-2">
            <Profile />
            <span>{capacity}</span>
          </div>
        </div>
      </main>
      <footer className="flex justify-between mt-9 items-center text-sm ">
        <div className="font-bold flex flex-col">
          <span>
            ${discount ? discountCalculation(price, discount) : price} /
            <span className="text-slate-400 text-sm"> day</span>
          </span>
          <span className="line-through text-slate-400">
            {discount && "$" + price}
          </span>
        </div>
        <Link
          href={{
            pathname: "/rental",
            query: car,
          }}
          className="btn"
        >
          Rental Now
        </Link>
      </footer>
    </div>
  );
};

export default PopularCarBox;
