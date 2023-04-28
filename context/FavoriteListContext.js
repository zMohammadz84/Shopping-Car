import { createContext, useState } from "react";

export const FavoriteListContext = createContext();

const FavoriteListContextWrapper = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <FavoriteListContext.Provider value={[favoriteList, setFavoriteList]}>
      {children}
    </FavoriteListContext.Provider>
  );
};

export default FavoriteListContextWrapper;
