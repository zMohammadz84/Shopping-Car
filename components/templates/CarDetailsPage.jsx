import React from "react";
import Layout from "../layout/Layout";
import CarDetails from "../modules/CarDetailsPage/CarDetails";

const CarDetailsPage = ({ car, cars }) => {
  return (
    <Layout>
      <CarDetails car={car} cars={cars} />
    </Layout>
  );
};

export default CarDetailsPage;
