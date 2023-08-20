import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "../components/posts/PostsList";
import PostCreate from "../components/posts/PostCreate";
import PostEdit from "../components/posts/PostEdit";
import PostDetails from "../components/posts/PostDetails";
import FavoritesList from "../components/Favorites/FavoritesList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<PostsList />} />
      <Route path="/create" element={<PostCreate />} />
      <Route path="/details/:id" element={<PostDetails />} />
      <Route path="/edit/:id" element={<PostEdit />} />
      <Route path="/favorites" element={<FavoritesList />} />
    </Routes>
  );
};

export default MainRoutes;
