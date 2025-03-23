import React from "react";
import { useSelector } from "react-redux";
import { FavoriteState } from "../state/store";

const Favorites = () => {
  const favoritesIds = useSelector(
    (state: FavoriteState) => state.favorites.ids
  );

  return (
    <div>
      {favoritesIds.map((id) => (
        <li>{id}</li>
      ))}
    </div>
  );
};

export default Favorites;
