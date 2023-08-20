import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost, saveChanges, cleanOnePost } from "../../store/postsSlice";

const PostEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { onePost } = useSelector((state) => state.posts);
  const [post, setPost] = useState(onePost);

  useEffect(() => {
    dispatch(getOnePost(id));
    return () => dispatch(cleanOnePost());
  }, []);

  return (
    <div className="panel">
      <h2>Edit Post</h2>
      <input
        type="url"
        placeholder="Image"
        onChange={(e) => setPost({ ...post, image: e.target.value })}
        value={post.image}
      />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setPost({ ...post, desc: e.target.value })}
        value={post.desc}
      />
      <button
        className="btn"
        onClick={() => {
          dispatch(saveChanges(post));
          navigate("/home");
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default PostEdit;
