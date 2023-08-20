import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../store/postsSlice";
import bookmark from "../assets/bookmark.png";
import outline from "../assets/outline.png";

const PostFavorite = ({ post }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(post.favorites);

  const favoriteClick = () => {
    const updatedPost = { ...post, favorites: !isFavorite };
    dispatch(addToFavorites(updatedPost));
    setIsFavorite(!isFavorite); // Обновляем локальное состояние
  };

  return (
    <div onClick={favoriteClick}>
      <img
        src={isFavorite ? bookmark : outline}
        alt={isFavorite ? "Selected" : "Unselected"}
        width="20"
        height="20"
      />
    </div>
  );
};

export default PostFavorite;
