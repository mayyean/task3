import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/posts";
const FAVORITES_API = "http://localhost:8000/favorites";
const LIKES_API = "http://localhost:8000/likes";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  let res = await axios.get(API);
  return res.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPostObj, { dispatch }) => {
    await axios.post(API, newPostObj);
    dispatch(getPosts());
  }
);

export const getOnePost = createAsyncThunk("user/getOnePost", async (id) => {
  let { data } = await axios.get(`${API}/${id}`);
  return data;
});

export const deletePost = createAsyncThunk(
  "posts/deltePost",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/${id}`);
    await axios.delete(`${FAVORITES_API}/fav-${id}`);
    dispatch(getPosts());
  }
);

export const saveChanges = createAsyncThunk(
  "posts/saveChanges",
  async (updatedPostObj, { dispatch }) => {
    await axios.patch(`${API}/${updatedPostObj.id}`, updatedPostObj);
    await axios.patch(`${FAVORITES_API}/fav-${updatedPostObj.id}`, {
      post: updatedPostObj,
    });

    dispatch(getPosts());
  }
);

export const addToFavorites = createAsyncThunk(
  "users/addToFavorites",
  async (updatedPostObj, { dispatch }) => {
    if (updatedPostObj.favorites) {
      let favoritesObj = {
        id: `fav-${updatedPostObj.id}`,
        post: updatedPostObj,
      };
      await axios.post(FAVORITES_API, favoritesObj);
    } else {
      await axios.delete(`${FAVORITES_API}/fav-${updatedPostObj.id}`);
    }
    await dispatch(saveChanges(updatedPostObj));
    dispatch(getFavorites());
  }
);

export const getFavorites = createAsyncThunk("posts/getFavorites", async () => {
  let { data } = await axios.get(FAVORITES_API);
  return data;
});

export const addToLikes = createAsyncThunk(
  "posts/addToLikes",
  async (updatedPostObj, { dispatch }) => {
    if (updatedPostObj.likes) {
      let likeObj = {
        id: `like-${updatedPostObj.id}`,
        user: updatedPostObj,
      };
      await axios.post(LIKES_API, likeObj);
    } else {
      await axios.delete(`${LIKES_API}/like-${updatedPostObj.id}`);
    }
    await dispatch(saveChanges(updatedPostObj));
    dispatch(getLikes());
  }
);

export const getLikes = createAsyncThunk("posts/getLikes", async () => {
  let { data } = await axios.get(LIKES_API);
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    favorites: [],
    likes: [],
    onePost: null,
    loading: false,
    error: null,
  },
  reducers: {
    cleanOnePost: (state, action) => {
      state.onePost = null;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.error.name;
      state.loading = false;
    },
    [getOnePost.fulfilled]: (state, action) => {
      state.onePost = action.payload;
    },
    [getFavorites.fulfilled]: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { cleanOnePost } = postsSlice.actions;
export default postsSlice.reducer;
