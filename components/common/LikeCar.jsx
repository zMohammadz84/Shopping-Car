import {
  FavoriteListContext,
  favoriteList,
  setFavoriteList,
} from "@/context/FavoriteListContext";
import Like from "@/public/icons/Like";
import Liked from "@/public/icons/Liked";
import CheckInFavorite from "@/utils/checkInFavorite";
import toastFavoriteList from "@/utils/toastFavoriteList";
import React, { useContext } from "react";

const LikeCar = ({ car }) => {
  const [favoriteList, setFavoriteList] = useContext(FavoriteListContext);

  const likeHandler = () => {
    let isIn = CheckInFavorite(favoriteList, car);
    toastFavoriteList(favoriteList, car);

    if (isIn) {
      let cloneFavoriteList = [...favoriteList];
      let filtered = cloneFavoriteList.filter((c) => c.id !== car.id);
      return setFavoriteList(filtered);
    }

    setFavoriteList([...favoriteList, car]);
  };

  return (
    <div className="cursor-pointer inline-block" onClick={likeHandler}>
      {CheckInFavorite(favoriteList, car) ? <Liked /> : <Like />}
    </div>
  );
};

export default LikeCar;
