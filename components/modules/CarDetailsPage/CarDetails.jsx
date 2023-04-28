import LikeCar from "@/components/common/LikeCar";
import discountCalculation from "@/utils/discountCalculation";
import Image from "next/image";
import Comment from "./Comment";
import PopularCar from "../Home/PopularCar/PopularCar";
import RecomendationCar from "../Home/RecomendationCar/RecomendationCar";
import { useState } from "react";
import ArrowDown from "@/public/icons/ArrowDown";
import Link from "next/link";
import StarRatingCustomize from "@/components/common/StarRatingCustomize";

const CarDetails = ({ car, cars }) => {
  const {
    price,
    discount,
    description,
    typeCar,
    steering,
    capacity,
    gasoline,
    rating,
    carName,
    image,
    comments,
  } = car;

  const [showAllComments, setShowAllComments] = useState(false);

  return (
    <>
      <main className="my-5 rounded-10 mb-10 gap-10 grid lg:grid-cols-12 px-5 lg:p-0">
        <section className="flex flex-col lg:col-span-4">
          <div className="bg-primary-500 rounded-10 h-72 w-full flex justify-center items-center">
            <Image src={image} width={300} height={100} alt="" priority />
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div
              data-index="0"
              className="rounded-10 overflow-hidden flex-1 cursor-pointer bg-primary-500  flex justify-center items-center"
            >
              <Image src={image} width={400} height={100} alt="" priority />
            </div>
            <div
              data-index="1"
              className="rounded-10 overflow-hidden flex-1 cursor-pointer "
            >
              <img src="/image/View3.png" alt="" className="w-full h-full" />
            </div>
            <div
              data-index="2"
              className="rounded-10 overflow-hidden flex-1 cursor-pointer "
            >
              <img src="/image/View2.png" alt="" className="w-full h-full" />
            </div>
          </div>
        </section>
        <section className="bg-white p-5 rounded-10 lg:h-fit lg:col-span-8">
          <header className="flex justify-between">
            <div>
              <h3 className="mb-1">{carName}</h3>
              <StarRatingCustomize rating={rating} size="18px" />
            </div>
            <LikeCar car={car} />
          </header>
          <main>
            <p className="text-primary-400 mt-5">{description}</p>
            <div className="grid grid-cols-4 mt-5 gap-3.5">
              <span className="text-primary-400">TypeCar</span>
              <span>{typeCar}</span>
              <span className="text-primary-400">Capacity</span>
              <span>{capacity}</span>
              <span className="text-primary-400">Steering</span>
              <span>{steering}</span>
              <span className="text-primary-400">Gasoline</span>
              <span>{gasoline}</span>
            </div>
          </main>
          <footer className="flex justify-between mt-9 items-center text-sm ">
            <div className="font-bold flex flex-col">
              <span>
                ${discount ? discountCalculation(price, discount) : price}/
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
        </section>
        <section className="lg:col-span-12 flex flex-col bg-white p-5 rounded-10 ">
          <header className="flex justify-start items-center gap-2 text-xl mb-10 relative">
            <span>Reviews</span>
            <span className="bg-primary-500 px-2 rounded-4 text-white text-sm ">
              {comments.length}
            </span>
          </header>
          <section className="flex flex-col gap-10">
            <Comment
              comments={showAllComments ? comments : comments.slice(0, 2)}
            />
            <button
              className="text-secondary-300 flex justify-center items-center gap-2"
              onClick={() => setShowAllComments((prev) => !prev)}
            >
              <span>{showAllComments ? "Show Less" : "Show All"}</span>
              <span className={`${showAllComments && "rotate-180"}`}>
                <ArrowDown />
              </span>
            </button>
          </section>
        </section>
      </main>
      <section className="lg:col-span-12">
        <PopularCar cars={cars} />
      </section>
      <section className="lg:col-span-12 mb-16">
        <RecomendationCar cars={cars.slice(4)} />
      </section>
    </>
  );
};

export default CarDetails;
