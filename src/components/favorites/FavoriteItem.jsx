import React from "react";
import PostFavorite from "./PostFavorite";

const FavoriteItem = ({ favoritesObj, likeObj }) => {
  return (
    <div className="post__card">
      <img src={favoritesObj.post.image} className="post__image" alt="" />
      <div className="post__items">
        {/* <PostLike post={likeObj.post} /> */}
        <PostFavorite post={favoritesObj.post} />
      </div>
      <h4>{favoritesObj.post.title}</h4>
      <p>{favoritesObj.post.desc}</p>
    </div>
  );
};

export default FavoriteItem;
