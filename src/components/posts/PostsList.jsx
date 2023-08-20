import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postsSlice";

const PostsList = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      {error ? (
        <div>
          <h3>Something went wrong!</h3>
          <h4>{error}</h4>
        </div>
      ) : (
        <div>
          {loading && <h3>Loading...</h3>}
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostsList;
