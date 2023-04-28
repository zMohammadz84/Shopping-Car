import TitleBar from "@/components/common/TitleBar";
import React, { Fragment } from "react";
import RecomendationCarBox from "./RecomendationCarBox";

const RecomendationCar = ({ cars }) => {
  return (
    <div className="mt-5 px-5 lg:px-0">
      <TitleBar title="Recomendation Car" isHidden />
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-2">
        {cars.slice(4, 12)?.map((car) => {
          return (
            <Fragment key={car.id}>
              <RecomendationCarBox {...car} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default RecomendationCar;
