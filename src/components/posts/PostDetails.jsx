import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost, cleanOnePost, deletePost } from "../../store/postsSlice";

const PostDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { onePost } = useSelector((state) => state.posts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOnePost(id));
    return () => dispatch(cleanOnePost());
  }, []);

  // console.log(onePost);

  return (
    <>
      {onePost ? (
        <div className="post__card">
          <img src={onePost.image} className="post__image" alt="" />
          <h4>{onePost.title}</h4>
          <p>{onePost.desc}</p>
          <button
            className="edit__btn"
            onClick={() => navigate(`/edit/${onePost.id}`)}
          >
            Edit
          </button>
          <button
            className="delete__btn"
            onClick={() => {
              dispatch(deletePost(onePost.id));
              navigate("/home");
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default PostDetails;
