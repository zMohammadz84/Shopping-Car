import React, { Fragment, useState } from "react";
import Layout from "../layout/Layout";
import FilterSideBar from "../modules/FilterPage/FilterSideBar";
import RecomendationCarBox from "../modules/Home/RecomendationCar/RecomendationCarBox";

const FilterPage = ({ data: { cars } }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  return (
    <Layout>
      <section className="grow lg:flex pb-10 pt-4 justify-between ">
        <FilterSideBar isOpen={filterIsOpen} setIsOpen={setFilterIsOpen} />
        <div className=" lg:px-9 justify-center ">
          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 mt-5 lg:px-0 px-5">
            {cars &&
              cars?.map((car) => {
                return (
                  <Fragment key={car.id}>
                    <RecomendationCarBox {...car} />
                  </Fragment>
                );
              })}
          </div>
        </div>
      </section>
      <div className="sticky w-full h-16 bottom-0 left-0 flex justify-center items-center mb-10 bg-primary-20/80 backdrop-blur-sm lg:hidden">
        <button className="btn w-1/2" onClick={() => setFilterIsOpen(true)}>
          Filter
        </button>
      </div>
    </Layout>
  );
};

export default FilterPage;
