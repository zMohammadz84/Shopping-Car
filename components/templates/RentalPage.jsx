import React from "react";
import CarInfo from "../modules/RentalPage/CarInfo";
import Layout from "../layout/Layout";

const RentalPage = ({ car }) => {
  return (
    <Layout>
      <CarInfo {...car} />
    </Layout>
  );
};

export default RentalPage;
