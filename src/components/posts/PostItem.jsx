import React from "react";
import { useNavigate } from "react-router-dom";
import PostFavorite from "../Favorites/PostFavorite";
import PostLike from "./PostLike";

const PostItem = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="post__card">
      <img src={post.image} className="post__image" alt="" />
      <div className="post__items">
        <PostLike post={post} />
        <PostFavorite post={post} />
      </div>
      <h4>{post.title}</h4>
      <p>{post.desc}</p>
      <button
        className="details__btn"
        onClick={() => navigate(`/details/${post.id}`)}
      >
        Details
      </button>
    </div>
  );
};

export default PostItem;
