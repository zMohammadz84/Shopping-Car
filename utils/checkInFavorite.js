const CheckInFavorite = (favoriteList, car) => {
  return favoriteList?.some((c) => c.id === car.id);
};

export default CheckInFavorite;
