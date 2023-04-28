import PickUpAndDropUp from "@modules/Home/PickUpAndDropUp";
import PopularCar from "@/components/modules/Home/PopularCar/PopularCar";
import HeaderMain from "@modules/Home/HeaderMain";
import RecomendationCar from "../modules/Home/RecomendationCar/RecomendationCar";
import Layout from "../layout/Layout";

function HomePage({ cars }) {
  return (
    <Layout>
      <HeaderMain />
      <PickUpAndDropUp />
      <PopularCar cars={cars} />
      <RecomendationCar cars={cars} />
      <div className="flex justify-center py-16">
        <button className="btn">Show more car</button>
      </div>
    </Layout>
  );
}

export default HomePage;
