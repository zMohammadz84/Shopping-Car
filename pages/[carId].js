import CarDetailsPage from "@/components/templates/CarDetailsPage";
import { getACar, getCars } from "@/services/apiCars";
import React from "react";

const CarId = ({ data, cars }) => {
  return (
    <>
      <CarDetailsPage car={data} cars={cars} />
    </>
  );
};

export default CarId;

//// Get Static Paths ////

export async function getStaticPaths() {
  const cars = await getCars();

  const paths = cars.map((car) => ({
    params: { carId: car.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

//// Get Static Props ////

export async function getStaticProps({ params }) {
  const cars = await getCars();
  const { carId } = params;
  let data = null;

  try {
    data = await getACar(carId);
  } catch (error) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  return {
    props: { data, cars },
  };
}
