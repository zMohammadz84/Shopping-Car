import { toast } from "react-hot-toast";
import CheckInFavorite from "./checkInFavorite";

const toastFavoriteList = (favoriteList, car) => {
  if (!CheckInFavorite(favoriteList, car)) {
    return toast.success("Added to FavoriteList");
  }
  toast.success("Remove from FavoriteList");
};

export default toastFavoriteList;
