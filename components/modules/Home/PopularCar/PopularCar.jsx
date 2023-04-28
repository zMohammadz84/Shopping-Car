import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css";
import TitleBar from "@/components/common/TitleBar";
import PopularCarBox from "@/components/modules/Home/PopularCar/PopularCarBox";

const PopularCar = ({ cars }) => {
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="mt-5 px-5 lg:px-0">
      <TitleBar title="Popular Car" />
      <Swiper
        className={`relative px-5 lg:px-0  xl:after:hidden 2xl:before:hidden  ${
          isBeginning ? "before:hidden" : "after:hidden"
        }`}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 25,
          },
          470: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          617: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.7,
            spaceBetween: 50,
          },
          1096: {
            slidesPerView: 2.9,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 32,
            allowTouchMove: false,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
        onReachEnd={() => setIsBeginning(false)}
        onReachBeginning={() => setIsBeginning(true)}
      >
        {cars.slice(0, 4)?.map((car) => {
          return (
            <SwiperSlide key={car.id}>
              <PopularCarBox {...car} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularCar;
