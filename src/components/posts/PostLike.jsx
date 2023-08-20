import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToLikes } from "../../store/postsSlice";

const PostLike = ({ post }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(post.likes);

  const likeClick = () => {
    const updatedPost = { ...post, likes: !isLiked };
    dispatch(addToLikes(updatedPost));
    setIsLiked(!isLiked);
  };

  return (
    <>
      {isLiked ? (
        <div onClick={likeClick}>
          <img
            src="https://static-00.iconduck.com/assets.00/white-heart-emoji-2048x2008-1l7jbme4.png"
            alt="Liked"
            width="25"
            height="25"
          />
        </div>
      ) : (
        <div onClick={likeClick}>
          <img
            src="https://icon-library.com/images/white-heart-icon/white-heart-icon-23.jpg"
            alt="Not Liked"
            width="25"
            height="25"
          />
        </div>
      )}
    </>
  );
};

export default PostLike;
