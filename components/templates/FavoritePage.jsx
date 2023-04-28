import Link from "next/link";
import RecomendationCarBox from "../modules/Home/RecomendationCar/RecomendationCarBox";
import { Fragment, useContext } from "react";
import Layout from "../layout/Layout";
import { FavoriteListContext } from "@/context/FavoriteListContext";

const FavoritPage = () => {
  const [favoriteList, setFavoriteList] = useContext(FavoriteListContext);

  const removeAllHandler = () => {
    setFavoriteList([]);
  };

  if (!favoriteList.length)
    return (
      <Layout>
        <div className="flex flex-col items-center gap-5 justify-center py-20 text-lg">
          <p>Your Favorite Cars List is Empty !</p>
          <Link href="/" className="text-primary-500">
            Back To Shop
          </Link>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className="px-5 lg:p-0 my-5 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {favoriteList.map((car) => (
          <Fragment key={car.id}>
            <RecomendationCarBox {...car} />
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center mb-5 sticky bottom-0 bg-primary-20/80 backdrop-blur-sm py-3 lg:static">
        <button onClick={removeAllHandler} className="btn">
          Remove All
        </button>
      </div>
    </Layout>
  );
};

export default FavoritPage;
