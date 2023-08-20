import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../store/postsSlice";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
  const { favorites } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <>
      {favorites.length ? (
        <ul className="list">
          {favorites.map((favoritesObj) => (
            <FavoriteItem key={favoritesObj.id} favoritesObj={favoritesObj} />
          ))}
        </ul>
      ) : (
        <h3 className="favorites__title">No favorites now!</h3>
      )}
    </>
  );
};

export default FavoritesList;
