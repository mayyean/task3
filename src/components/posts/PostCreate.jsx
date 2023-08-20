import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../store/postsSlice";

const PostCreate = () => {
  const [post, setPost] = useState({
    image: "",
    title: "",
    desc: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addPost() {
    for (let key in post) {
      if (!post[key]) return alert("Some inputs are empty! :(");
    }

    dispatch(createPost({ ...post, favorites: false }));
    navigate("/home");
  }

  return (
    <div className="panel">
      <h2>Add Post</h2>
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
      <button className="btn" onClick={addPost}>
        Add
      </button>
    </div>
  );
};

export default PostCreate;
